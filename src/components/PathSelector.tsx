'use client';
import { useState } from 'react';

const modules = [
  'Finance Management',
  'Inventory Control',
  'Customer Relations',
  'Project Management',
  'Human Resources',
  'Sales Pipeline',
];

export default function PathSelector() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-16 flex flex-col items-center text-center gap-6">
      <h2 className="text-4xl font-bold text-pink mb-6">Where Will You Begin?</h2>
      <div className="relative flex flex-wrap items-center justify-center gap-4 max-w-xl">
        {modules.map((mod) => (
          <button
            key={mod}
            onClick={() => setSelected(mod)}
            className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
          >
            {mod}
          </button>
        ))}
      </div>
      {selected && (
        <p className="mt-6 text-lg">
          Great choice! Here&apos;s how your <span className="font-semibold">{selected}</span> journey grows with HyperAgilERP...
        </p>
      )}
    </section>
  );
}
