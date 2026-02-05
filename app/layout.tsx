import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Koboo — Nigerian Tax Clarity",
  description: "A focused Nigerian tax calculator that shows your real take-home pay with clarity and confidence.",
  icons: {
    icon: "/favicon.svg",
  },
};

const navItems = [
  { href: "/calculator", label: "Calculator" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/deductions", label: "Deductions Guide" },
  { href: "/employers", label: "For Employers" },
  { href: "/pricing", label: "Pricing" }
];

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerifDisplay.variable}`}>
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        <div className="koboo-grid-lines" aria-hidden="true" />
        <div className="koboo-shell">
          <header className="flex items-center justify-between gap-4 border-b border-black/5 pb-4 sm:pb-6">
            <Link href="/" className="flex items-baseline gap-1">
              <span className="font-display text-xl tracking-tight">Koboo</span>
              <span className="text-xs font-medium uppercase tracking-[0.26em] text-[color:var(--koboo-muted)]">
                Tax
              </span>
            </Link>
            <nav className="hidden items-center gap-6 text-xs font-medium uppercase tracking-[0.2em] sm:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[color:var(--koboo-muted)] transition-colors hover:text-[color:var(--koboo-ink)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3 sm:hidden">
              <Link href="/calculator" className="koboo-button-primary text-[0.65rem] px-4 py-2">
                Open Calculator
              </Link>
            </div>
          </header>

          <main className="flex-1 py-6 sm:py-10">{children}</main>

          <footer className="mt-8 border-t border-black/5 pt-4 text-xs sm:mt-10 sm:pt-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <p className="font-medium tracking-[0.18em] uppercase text-[color:var(--koboo-muted)]">
                  Koboo Tax
                </p>
                <p className="koboo-prose max-w-md">
                  Koboo provides estimation only and does not replace professional tax advice. Always
                  confirm with a qualified tax practitioner or the FIRS.
                </p>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {navItems.map((item) => (
                  <Link
                    key={`footer-${item.href}`}
                    href={item.href}
                    className="koboo-link text-[0.7rem]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
