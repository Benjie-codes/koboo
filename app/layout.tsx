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


import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Koboo — Nigerian Tax Clarity",
  description: "A focused Nigerian tax calculator that shows your real take-home pay with clarity and confidence.",
  icons: {
    icon: "/favicon.svg",
  },
};

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
          <Navbar />

          <main className="koboo-body flex-1 py-6 sm:py-10">{children}</main>

          <footer className="mt-16 border-t border-[color:var(--koboo-ink)]/5 pt-10 pb-10 px-6 sm:px-10 lg:px-20 sm:mt-20 sm:pt-14 sm:pb-14">
            <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-20">
              {/* Brand Column */}
              <div className="space-y-3 max-w-xs shrink-0">
                <Link href="/" className="flex items-center gap-2 group">
                  <div className="w-7 h-7 rounded-full bg-[color:var(--koboo-ink)] text-white flex items-center justify-center font-display text-sm font-bold group-hover:bg-[color:var(--koboo-secondary)] transition-colors">
                    K
                  </div>
                  <span className="font-display text-lg font-bold tracking-tight text-[color:var(--koboo-ink)] leading-none">
                    Koboo
                  </span>
                </Link>
                <p className="text-sm leading-relaxed text-[color:var(--koboo-muted)]">
                  Make your complicated<br />
                  tax math simple
                </p>
              </div>

              {/* Link Columns */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-14 text-sm">
                {/* Product */}
                <div className="space-y-4">
                  <h4 className="font-display font-semibold text-[color:var(--koboo-ink)] tracking-wide">
                    Product
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      { href: "/calculator", label: "Calculator" },
                      { href: "/how-it-works", label: "How It Works" },
                      { href: "/pricing", label: "Pricing" },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-[color:var(--koboo-muted)] hover:text-[color:var(--koboo-ink)] transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support */}
                <div className="space-y-4">
                  <h4 className="font-display font-semibold text-[color:var(--koboo-ink)] tracking-wide">
                    Support
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      { href: "/deductions", label: "Deductions Guide" },
                      { href: "/employers", label: "For Employers" },
                      { href: "/contact", label: "Contact" },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-[color:var(--koboo-muted)] hover:text-[color:var(--koboo-ink)] transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal */}
                <div className="space-y-4">
                  <h4 className="font-display font-semibold text-[color:var(--koboo-ink)] tracking-wide">
                    Legal
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      { href: "/privacy", label: "Privacy Policy" },
                      { href: "/terms", label: "Terms of Service" },
                      { href: "/disclaimer", label: "Disclaimer" },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-[color:var(--koboo-muted)] hover:text-[color:var(--koboo-ink)] transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom disclaimer */}
            <div className="mt-10 pt-6 border-t border-[color:var(--koboo-ink)]/5">
              <p className="text-xs text-[color:var(--koboo-muted)] max-w-xl leading-relaxed">
                Koboo provides estimation only and does not replace professional tax advice. Always confirm with a qualified tax practitioner or the FIRS.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
