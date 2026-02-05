export default function PricingPage() {
  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <p className="koboo-section-label">Pricing</p>
        <h1 className="koboo-section-heading">Free while we learn with you.</h1>
        <p className="koboo-prose">
          During the early Koboo beta, the calculator and guides will be free for individual users.
          We&apos;d rather earn your trust first, then explore fair pricing for advanced planning
          and employer tools.
        </p>
      </section>

      <section className="space-y-3 rounded-xl border border-black/5 bg-[color:var(--koboo-surface)] p-4 sm:p-5 text-sm">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--koboo-muted)]">
              Individual
            </p>
            <p className="mt-1 text-2xl font-display">₦0</p>
          </div>
          <p className="koboo-prose max-w-xs">
            Unlimited personal calculations, guides and updates while we refine Koboo with real
            feedback.
          </p>
        </div>
        <p className="koboo-prose text-xs">
          Future paid plans will be transparent and optional, focused on deeper planning, multi‑
          income scenarios and employer‑grade tooling.
        </p>
      </section>
    </div>
  );
}
