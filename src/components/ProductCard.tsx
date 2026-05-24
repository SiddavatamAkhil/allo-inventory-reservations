'use client'

import { useRouter } from 'next/navigation'

interface ProductCardProps {
  productId: string
  warehouseId: string
  name: string
  warehouse: string
  availableUnits: number
  totalUnits: number
}

export default function ProductCard({
  name,
  warehouse,
  availableUnits,
  totalUnits
}: ProductCardProps) {
  const router = useRouter()

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-7 shadow-lg hover:scale-[1.03] hover:shadow-blue-500/20 transition-all duration-300">
      <div className="space-y-5">
        <div>
          <h2 className="text-3xl font-bold text-white mb-3">
            {name}
          </h2>

          <p className="text-slate-400 mb-3">
            {warehouse}
          </p>

          <div className="flex gap-3 flex-wrap">
            <div
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                availableUnits > 0
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-red-500/20 text-red-400'
              }`}
            >
              Available: {availableUnits}
            </div>

            <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
              Total: {totalUnits}
            </div>
          </div>
        </div>

        <button
          disabled={availableUnits === 0}
          onClick={() => router.push('/checkout')}
          className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
            availableUnits === 0
              ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {availableUnits === 0
            ? 'Out of Stock'
            : 'Reserve Now'}
        </button>
      </div>
    </div>
  )
}