import { prisma } from './prisma'

export async function reserveStock(
  productId: string,
  warehouseId: string,
  quantity: number
) {
  return prisma.$transaction(async (tx) => {
    const inventory = await tx.inventory.findUnique({
      where: {
        productId_warehouseId: {
          productId,
          warehouseId
        }
      }
    })

    if (!inventory) {
      throw new Error('Inventory not found')
    }

    const availableUnits =
      inventory.totalUnits - inventory.reservedUnits

    // Prevent overselling under concurrent requests
    if (availableUnits < quantity) {
      throw new Error('NOT_ENOUGH_STOCK')
    }

    await tx.inventory.update({
      where: {
        id: inventory.id
      },
      data: {
        reservedUnits: {
          increment: quantity
        }
      }
    })

    const reservation = await tx.reservation.create({
      data: {
        productId,
        warehouseId,
        quantity,
        expiresAt: new Date(Date.now() + 10 * 60 * 1000)
      }
    })

    return reservation
  })
}

export async function confirmReservation(id: string) {
  return prisma.$transaction(async (tx) => {
    const reservation = await tx.reservation.findUnique({
      where: { id }
    })

    if (!reservation) {
      throw new Error('Reservation not found')
    }

    if (reservation.status !== 'PENDING') {
      throw new Error('Reservation already processed')
    }

    if (new Date() > reservation.expiresAt) {
      throw new Error('RESERVATION_EXPIRED')
    }

    const inventory = await tx.inventory.findUnique({
      where: {
        productId_warehouseId: {
          productId: reservation.productId,
          warehouseId: reservation.warehouseId
        }
      }
    })

    if (!inventory) {
      throw new Error('Inventory missing')
    }

    await tx.inventory.update({
      where: { id: inventory.id },
      data: {
        totalUnits: {
          decrement: reservation.quantity
        },
        reservedUnits: {
          decrement: reservation.quantity
        }
      }
    })

    return tx.reservation.update({
      where: { id },
      data: {
        status: 'CONFIRMED'
      }
    })
  })
}

export async function releaseReservation(id: string) {
  return prisma.$transaction(async (tx) => {
    const reservation = await tx.reservation.findUnique({
      where: { id }
    })

    if (!reservation || reservation.status !== 'PENDING') {
      return
    }

    const inventory = await tx.inventory.findUnique({
      where: {
        productId_warehouseId: {
          productId: reservation.productId,
          warehouseId: reservation.warehouseId
        }
      }
    })

    if (!inventory) {
      return
    }

    await tx.inventory.update({
      where: {
        id: inventory.id
      },
      data: {
        reservedUnits: {
          decrement: reservation.quantity
        }
      }
    })

    return tx.reservation.update({
      where: { id },
      data: {
        status: 'RELEASED'
      }
    })
  })
}