export default function HowItWorksPage() {
  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <p className="koboo-section-label">Method</p>
        <h1 className="koboo-section-heading">How Koboo thinks about Nigerian tax.</h1>
        <p className="koboo-prose">
          Koboo models Nigeria&apos;s personal income tax as a progressive ladder. Your income is
          not taxed at one flat rate — it fills each band in turn, with deductions removing some
          rungs along the way.
        </p>
      </section>

      <section className="space-y-4 text-sm">
        <div className="space-y-2">
          <h2 className="font-semibold">1. From gross to chargeable income</h2>
          <p className="koboo-prose">
            We start from the figure your employer quotes (or your own revenue if you&apos;re
            self‑employed), then subtract allowable items like pension, rent relief and other
            statutory deductions. The result is your chargeable income.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold">2. Filling the bands, slice by slice</h2>
          <p className="koboo-prose">
            Instead of applying one rate to everything, we move through the tax bands one after the
            other — filling 0% space first, then the next percentage, and so on. This mirrors how
            the law is written.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold">3. Returning what matters: take‑home</h2>
          <p className="koboo-prose">
            Finally, we subtract your annual tax from income and show both yearly and monthly
            figures. The interface will always keep those numbers front and centre, with the band
            breakdown available when you want detail.
          </p>
        </div>
      </section>
    </div>
  );
}
