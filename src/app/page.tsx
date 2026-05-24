import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'

const inventory = [
  {
    id: '1',
    productId: 'p1',
    warehouseId: 'w1',
    name: 'iPhone 15 Pro',
    warehouse: 'Bangalore Warehouse',
    availableUnits: 8,
    totalUnits: 12
  },
  {
    id: '2',
    productId: 'p2',
    warehouseId: 'w2',
    name: 'AirPods Pro Gen 2',
    warehouse: 'Hyderabad Warehouse',
    availableUnits: 10,
    totalUnits: 15
  },
  {
    id: '3',
    productId: 'p3',
    warehouseId: 'w3',
    name: 'Apple Watch Ultra',
    warehouse: 'Mumbai Warehouse',
    availableUnits: 5,
    totalUnits: 9
  },
  {
    id: '4',
    productId: 'p4',
    warehouseId: 'w4',
    name: 'MacBook Pro M3',
    warehouse: 'Delhi Warehouse',
    availableUnits: 0,
    totalUnits: 6
  }
]

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-blue-400 text-sm mb-6">
              Multi-Warehouse Inventory System
            </div>

            <h1 className="text-6xl font-bold mb-5 leading-tight max-w-4xl">
              Reserve inventory before checkout confirmation.
            </h1>

            <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">
              Prevent overselling during payment delays using temporary reservation holds,
              warehouse-aware stock tracking, and expiry-based inventory release flows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inventory.map((item) => (
              <ProductCard
                key={item.id}
                productId={item.productId}
                warehouseId={item.warehouseId}
                name={item.name}
                warehouse={item.warehouse}
                availableUnits={item.availableUnits}
                totalUnits={item.totalUnits}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}