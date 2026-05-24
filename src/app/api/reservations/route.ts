import { NextResponse } from 'next/server'
import { reserveStock } from '@/lib/reservations'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const reservation = await reserveStock(
      body.productId,
      body.warehouseId,
      body.quantity
    )

    return NextResponse.json(reservation)
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === 'NOT_ENOUGH_STOCK') {
        return NextResponse.json(
          { error: 'Not enough stock available' },
          { status: 409 }
        )
      }
    }

    return NextResponse.json(
      { error: 'Unable to create reservation' },
      { status: 500 }
    )
  }
}