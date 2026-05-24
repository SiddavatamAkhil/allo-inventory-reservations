'use client'

import { useEffect, useState } from 'react'

export default function ReservationTimer() {
  const [seconds, setSeconds] = useState(600)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          return 0
        }

        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  return (
    <div className="bg-yellow-500/10 border border-yellow-500 rounded-xl p-4">
      <p className="text-yellow-400 font-semibold text-lg">
        Reservation expires in:
      </p>

      <h2 className="text-3xl font-bold text-white mt-2">
        {minutes}:
        {remainingSeconds.toString().padStart(2, '0')}
      </h2>
    </div>
  )
}