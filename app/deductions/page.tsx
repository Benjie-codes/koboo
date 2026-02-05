export default function DeductionsPage() {
  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <p className="koboo-section-label">Deductions guide</p>
        <h1 className="koboo-section-heading">The common items that can legally reduce your bill.</h1>
        <p className="koboo-prose">
          This is not full tax advice, but a calm overview of deductions many Nigerians overlook
          when thinking about PAYE.
        </p>
      </section>

      <section className="space-y-4 text-sm">
        <div className="space-y-1">
          <h2 className="font-semibold">Pension contributions</h2>
          <p className="koboo-prose">
            Mandatory and voluntary pension contributions reduce your chargeable income. Koboo will
            let you model different contribution levels so you can see both tax impact and
            take‑home.
          </p>
        </div>
        <div className="space-y-1">
          <h2 className="font-semibold">Rent relief</h2>
          <p className="koboo-prose">
            A portion of your annual rent can qualify for relief, up to a capped amount. We&apos;ll
            show how this interacts with your tax bands and what documentation you should keep.
          </p>
        </div>
        <div className="space-y-1">
          <h2 className="font-semibold">NHF & health cover</h2>
          <p className="koboo-prose">
            Contributions towards housing funds and some health schemes may be recognised in tax
            calculations. Koboo will make these options explicit instead of hiding them in fine
            print.
          </p>
        </div>
      </section>
    </div>
  );
}
