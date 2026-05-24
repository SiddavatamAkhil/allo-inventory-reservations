export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          Built using Next.js, TypeScript, Tailwind CSS and modular reservation architecture.
        </p>

        <div className="flex gap-3">
          <div className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm">
            Reservation Ready
          </div>

          <div className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">
            Concurrency Safe
          </div>
        </div>
      </div>
    </footer>
  )
}