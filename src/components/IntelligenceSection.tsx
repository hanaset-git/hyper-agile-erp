export default function IntelligenceSection() {
  return (
    <section className="bg-silver py-16 text-center">
      <h2 className="text-4xl font-bold text-primary mb-10">Empower Every Team to Operate Intelligently</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        <div className="p-6 bg-white rounded shadow flex flex-col items-center">
          <div className="text-5xl mb-4">🤖</div>
          <h3 className="font-semibold text-xl mb-2">AI-Driven Reasoning</h3>
          <p>
            Our intelligent algorithms help your team make better decisions with less effort. HyperAgilERP analyzes patterns and suggests optimal paths forward.
          </p>
        </div>
        <div className="p-6 bg-white rounded shadow flex flex-col items-center">
          <div className="text-5xl mb-4">📊</div>
          <h3 className="font-semibold text-xl mb-2">Real-Time Data</h3>
          <p>
            See your business performance as it happens. No more waiting for reports - get instant insights that help you pivot quickly when opportunities arise.
          </p>
        </div>
        <div className="p-6 bg-white rounded shadow flex flex-col items-center">
          <div className="text-5xl mb-4">🧩</div>
          <h3 className="font-semibold text-xl mb-2">Modular Applications</h3>
          <p>
            Only pay for what you need today, add components as you grow. Our modular design means you&apos;re never locked into features you don&apos;t use.
          </p>
        </div>
      </div>
    </section>
  );
}
