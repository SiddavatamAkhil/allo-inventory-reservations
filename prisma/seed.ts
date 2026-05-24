import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const warehouse = await prisma.warehouse.create({
    data: {
      name: 'Central Warehouse',
      city: 'Bangalore'
    }
  })

  const product = await prisma.product.create({
    data: {
      name: 'iPhone 15',
      price: 79999
    }
  })

  await prisma.inventory.create({
    data: {
      productId: product.id,
      warehouseId: warehouse.id,
      totalUnits: 10
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error) => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })