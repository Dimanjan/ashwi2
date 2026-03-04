function AboutPage() {
  return (
    <main className="w-[min(1240px,calc(100%-2rem))] mx-auto py-10 min-h-[60vh]">
      <div className="max-w-[800px] mx-auto bg-surface p-8 md:p-12 rounded-xl border border-line">
        <h1 className="mt-0 tracking-[0.01em] text-brand-deep font-serif text-[2.2rem] mb-5">About Ashwi Furniture</h1>
        <p className="text-[1.05rem] leading-[1.65] text-ink mb-4 font-sans">
          Ashwi Furniture has been crafting premium, durable furniture for modern Nepali homes since our inception. We believe in providing factory-direct value without compromising on quality or design.
        </p>
        <p className="text-[1.05rem] leading-[1.65] text-ink mb-4 font-sans">
          From compact mandirs to elegant living room sets, every piece is designed with care, using top-grade materials selected to last generations.
        </p>
        <div className="mt-8 bg-bg p-6 rounded-lg border border-line">
          <h2 className="mt-0 text-[1.4rem] font-serif text-brand mb-4">Why Choose Us?</h2>
          <ul className="m-0 pl-1 list-none flex flex-col gap-2.5">
            <li className="relative pl-[1.12rem] text-muted text-[1.02rem] before:content-['✓'] before:absolute before:left-0 before:text-success before:font-bold">✨ Factory Direct Pricing</li>
            <li className="relative pl-[1.12rem] text-muted text-[1.02rem] before:content-['✓'] before:absolute before:left-0 before:text-success before:font-bold">✨ Premium Craftsmanship</li>
            <li className="relative pl-[1.12rem] text-muted text-[1.02rem] before:content-['✓'] before:absolute before:left-0 before:text-success before:font-bold">✨ Custom Order Capabilities</li>
            <li className="relative pl-[1.12rem] text-muted text-[1.02rem] before:content-['✓'] before:absolute before:left-0 before:text-success before:font-bold">✨ Reliable Delivery Across Valley</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
