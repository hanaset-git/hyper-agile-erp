export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-white via-white to-silver">
      <div className="text-6xl font-bold text-primary mb-4">
        Start Anywhere. Grow Everywhere.
      </div>
      <p className="text-xl text-coral mb-8">
        The ERP that gives small and medium businesses the BEST.
      </p>
      {/* Placeholder for HanaPanda mascot */}
      <div className="text-7xl animate-bounce mb-8">🐼</div>
      <button className="bg-cta text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition">
        Start Your Journey Today →
      </button>
    </section>
  );
}
