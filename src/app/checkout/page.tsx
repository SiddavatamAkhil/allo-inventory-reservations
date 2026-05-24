'use client'

import { useState } from 'react'
import ReservationTimer from '@/components/ReservationTimer'

export default function CheckoutPage() {
  const [status, setStatus] = useState('pending')
  const [message, setMessage] = useState('')

  const confirmReservation = () => {
    setStatus('confirmed')

    setMessage(
      'Reservation confirmed successfully.'
    )
  }

  const cancelReservation = () => {
    setStatus('released')

    setMessage(
      'Reservation released successfully.'
    )
  }

  const showExpiryError = () => {
    setMessage(
      '410 Reservation expired.'
    )
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
      <div className="bg-slate-800 p-10 rounded-2xl w-full max-w-[500px] space-y-7 shadow-2xl">
        <div>
          <h1 className="text-4xl font-bold">
            Reservation Checkout
          </h1>

          <div className="mt-5">
            <ReservationTimer />
          </div>
        </div>

        {message && (
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 text-slate-200">
            {message}
          </div>
        )}

        <div className="space-y-4">
          <div className="flex justify-between text-lg">
            <span className="text-slate-400">
              Product
            </span>

            <span>iPhone 15 Pro</span>
          </div>

          <div className="flex justify-between text-lg">
            <span className="text-slate-400">
              Status
            </span>

            <span className="text-yellow-400 capitalize">
              {status}
            </span>
          </div>
        </div>

        <div className="grid gap-4">
          <button
            onClick={confirmReservation}
            className="bg-green-600 hover:bg-green-700 transition-colors py-4 rounded-xl text-lg font-semibold"
          >
            Confirm Purchase
          </button>

          <button
            onClick={cancelReservation}
            className="bg-red-600 hover:bg-red-700 transition-colors py-4 rounded-xl text-lg font-semibold"
          >
            Cancel Reservation
          </button>

          <button
            onClick={showExpiryError}
            className="bg-yellow-500 hover:bg-yellow-600 transition-colors py-4 rounded-xl text-black font-semibold"
          >
            Simulate Expiry Error
          </button>
        </div>
      </div>
    </main>
  )
}