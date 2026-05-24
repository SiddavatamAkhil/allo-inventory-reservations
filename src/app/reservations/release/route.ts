import { NextResponse } from 'next/server'
import { releaseReservation } from '@/lib/reservations'

export async function POST(
  _: Request,
  { params }: { params: { id: string } }
) {
  try {
    await releaseReservation(params.id)

    return NextResponse.json({
      success: true
    })
  } catch {
    return NextResponse.json(
      { error: 'Unable to release reservation' },
      { status: 500 }
    )
  }
}