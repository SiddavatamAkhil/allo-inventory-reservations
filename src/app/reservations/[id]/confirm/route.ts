import { NextResponse } from 'next/server'
import { confirmReservation } from '@/lib/reservations'

export async function POST(
  _: Request,
  { params }: { params: { id: string } }
) {
  try {
    const updatedReservation = await confirmReservation(params.id)

    return NextResponse.json(updatedReservation)
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === 'RESERVATION_EXPIRED') {
        return NextResponse.json(
          { error: 'Reservation expired' },
          { status: 410 }
        )
      }
    }

    return NextResponse.json(
      { error: 'Unable to confirm reservation' },
      { status: 500 }
    )
  }
}