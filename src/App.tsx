import { useMemo, useState } from 'react'

const mockComputes = [
  {
    id: 'node-1',
    name: 'GPU Cluster A',
    specs: '8x NVIDIA A100, 256 GB RAM',
    pricePerHour: 4.5,
  },
  {
    id: 'node-2',
    name: 'CPU Compute B',
    specs: '128 vCPU, 512 GB RAM',
    pricePerHour: 2.25,
  },
]

export function App() {
  const [selected, setSelected] = useState<string | null>(null)
  const totalCost = useMemo(() => {
    if (!selected) return 0
    const compute = mockComputes.find((c) => c.id === selected)
    return compute ? compute.pricePerHour : 0
  }, [selected])

  return (
    <div className="mx-auto max-w-5xl p-8">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold">Axionax Marketplace</h1>
        <p className="mt-2 text-gray-600">Rent decentralized compute power with AXX tokens.</p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        {mockComputes.map((compute) => (
          <button
            key={compute.id}
            onClick={() => setSelected(compute.id)}
            className={`rounded border p-6 text-left shadow transition ${
              selected === compute.id ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-gray-200'
            }`}
          >
            <h2 className="text-2xl font-semibold">{compute.name}</h2>
            <p className="mt-2 text-sm text-gray-500">{compute.specs}</p>
            <p className="mt-4 text-xl font-medium">{compute.pricePerHour.toFixed(2)} AXX/hour</p>
          </button>
        ))}
      </section>

      <footer className="mt-10 rounded border border-gray-200 p-6 text-center shadow">
        {selected ? (
          <div>
            <p className="text-lg">Selected node: {selected}</p>
            <p className="mt-2 text-2xl font-semibold">Total cost: {totalCost.toFixed(2)} AXX/hour</p>
            <button className="mt-4 rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
              Connect Wallet & Rent
            </button>
          </div>
        ) : (
          <p>Select a compute resource to see pricing and continue.</p>
        )}
      </footer>
    </div>
  )
}

export default App
