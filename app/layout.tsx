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
          <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[color:var(--koboo-bg)]/80 border-b border-[color:var(--koboo-ink)]/5">
            <div className="flex h-16 sm:h-20 items-center justify-between px-4 sm:px-0">
              {/* Logo Area */}
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-full bg-[color:var(--koboo-ink)] text-white flex items-center justify-center font-display text-lg font-bold group-hover:bg-[color:var(--koboo-secondary)] transition-colors">
                  K
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-xl font-bold tracking-tight text-[color:var(--koboo-ink)] leading-none">Koboo</span>
                  <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[color:var(--koboo-secondary)] leading-none mt-0.5">
                    Tax Check
                  </span>
                </div>
              </Link>

              {/* Desktop Nav - Centered/Right */}
              <nav className="hidden md:flex items-center gap-8">
                {navItems.filter(i => i.href !== '/calculator').map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-[color:var(--koboo-muted)] hover:text-[color:var(--koboo-ink)] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[color:var(--koboo-secondary)] after:transition-all hover:after:w-full py-1"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Calculator CTA - Desktop & Mobile */}
              <div className="flex items-center gap-4">
                <Link
                  href="/calculator"
                  className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-[color:var(--koboo-ink)] px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[color:var(--koboo-secondary)] hover:scale-105 active:scale-95"
                >
                  Open Calculator
                </Link>
                <Link
                  href="/calculator"
                  className="sm:hidden inline-flex h-9 items-center justify-center rounded-full bg-[color:var(--koboo-ink)] px-4 text-xs font-semibold text-white"
                >
                  Calc
                </Link>
              </div>
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
