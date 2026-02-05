export default function CalculatorPage() {
  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <p className="koboo-section-label">Calculator</p>
        <h1 className="koboo-section-heading">Koboo&apos;s calculator is almost here.</h1>
        <p className="koboo-prose">
          This page will host the full Nigerian PAYE calculator — monthly and annual views, clear
          band breakdowns, and deduction support. For now, use the landing page to understand the
          philosophy and watch this space.
        </p>
      </section>

      <section className="space-y-3 rounded-xl border border-black/5 bg-[color:var(--koboo-surface)] p-4 sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--koboo-muted)]">
          Preview layout
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <p className="text-xs font-medium text-[color:var(--koboo-muted)]">Income</p>
            <div className="flex gap-2">
              <input
                className="w-full rounded-full border border-black/10 bg-white px-4 py-2 text-sm outline-none placeholder:text-[color:var(--koboo-muted)] focus:border-[color:var(--koboo-accent)]"
                placeholder="₦ Monthly or annual amount"
                disabled
              />
              <select
                className="rounded-full border border-black/10 bg-white px-3 text-xs uppercase tracking-[0.16em] text-[color:var(--koboo-muted)] outline-none focus:border-[color:var(--koboo-accent)]"
                disabled
              >
                <option>Monthly</option>
                <option>Annual</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-medium text-[color:var(--koboo-muted)]">Quick outcome</p>
            <div className="rounded-xl border border-dashed border-black/15 px-4 py-3 text-xs text-[color:var(--koboo-muted)]">
              Tax and take‑home figures will appear here — sliced by band, shown per year and per
              month.
            </div>
          </div>
        </div>
        <p className="koboo-prose text-xs">
          We&apos;re validating the calculation model against real PAYE slips to make sure the
          numbers you see match what HR actually withholds.
        </p>
      </section>
    </div>
  );
}
