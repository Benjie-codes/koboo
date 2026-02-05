export default function EmployersPage() {
  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <p className="koboo-section-label">For employers</p>
        <h1 className="koboo-section-heading">A quieter way to check PAYE for your team.</h1>
        <p className="koboo-prose">
          Koboo will include a simple employer view so HR and payroll teams can sanity‑check PAYE
          for offers, reviews and one‑off bonuses — without firing up a spreadsheet.
        </p>
      </section>

      <section className="space-y-3 text-sm">
        <p className="koboo-prose">
          Early versions will focus on one‑off checks: salary in, tax + take‑home out, clearly
          explained. Over time, we plan to add lightweight tools for bulk checks, exports and
          documentation.
        </p>
      </section>
    </div>
  );
}
