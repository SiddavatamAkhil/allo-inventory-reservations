export default function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-950 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">
          Allo Inventory
        </h1>

        <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-lg text-white text-sm font-medium">
          Dashboard
        </button>
      </div>
    </nav>
  )
}