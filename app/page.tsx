"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, LayoutTemplate, Calculator, CheckCircle2 } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function HomePage() {
  return (
    <div className="space-y-24 sm:space-y-32">
      {/* Hero Section */}
      <section className="relative pt-5 sm:pt-10 flex flex-col items-center text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-4 max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.div variants={item} className="space-y-6 flex flex-col items-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color:var(--koboo-secondary)]/10 text-[color:var(--koboo-secondary)] text-xs font-semibold uppercase tracking-wider border border-[color:var(--koboo-secondary)]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--koboo-secondary)] animate-pulse" />
              Nigerian PAYE 2026 Ready
            </span>

            <h1 className="font-display text-6xl sm:text-8xl leading-[0.95] tracking-tight text-[color:var(--koboo-ink)]">
              No guesswork. <br className="hidden sm:block" />
              <span className="text-[color:var(--koboo-secondary)]/80 italic font-serif">Just accurate tax.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[color:var(--koboo-muted)] leading-relaxed max-w-lg mx-auto">
              Koboo reads the latest Nigerian tax bands and turns them into a clear, honest view of what actually lands in your account each month.
            </p>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/calculator"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white transition-all bg-[color:var(--koboo-ink)] rounded-full hover:bg-[color:var(--koboo-secondary)] hover:scale-105 active:scale-95 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)]"
            >
              Start Calculating
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-[color:var(--koboo-ink)] transition-all bg-white/50 border border-[color:var(--koboo-ink)]/10 rounded-full hover:bg-white hover:border-[color:var(--koboo-ink)]/20 hover:scale-105 active:scale-95 backdrop-blur-sm"
            >
              How it works
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Bento Grid Feature Section */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid gap-4 sm:grid-cols-3 sm:gap-6 auto-rows-[minmax(200px,auto)]"
        >
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/60 to-white/30 border border-white/50 p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Shield className="w-24 h-24 rotate-12" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="w-10 h-10 rounded-full bg-[color:var(--koboo-secondary)]/10 flex items-center justify-center text-[color:var(--koboo-secondary)]">
                <LayoutTemplate className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl text-[color:var(--koboo-ink)]">Built for Nigerians</h3>
              <p className="text-sm text-[color:var(--koboo-muted)] leading-relaxed">
                Koboo understands the 2026 Nigerian tax changes, including new bands and reliefs — no foreign assumptions.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-3xl bg-[color:var(--koboo-ink)] text-white p-8 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 sm:col-span-2">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-start sm:items-center h-full">
              <div className="space-y-4 flex-1">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl">Clarity first</h3>
                <p className="text-sm text-white/70 leading-relaxed max-w-sm">
                  See how each slice of your income is taxed so progressive bands finally make sense. No more spreadsheet headaches.
                </p>
              </div>
              <div className="flex-1 w-full bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                <div className="space-y-2">
                  <div className="h-2 bg-white/20 rounded-full w-3/4"></div>
                  <div className="h-2 bg-white/10 rounded-full w-full"></div>
                  <div className="h-2 bg-white/10 rounded-full w-5/6"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--koboo-secondary)] to-[#3A3C2B] text-white p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 sm:col-span-2">
            <div className="relative z-10 flex flex-col sm:flex-row-reverse gap-8 items-start sm:items-center h-full">
              <div className="space-y-4 flex-1">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl">Private by design</h3>
                <p className="text-sm text-white/80 leading-relaxed max-w-sm">
                  Calculations run in your browser. We don&apos;t see, store, or share your salary data. Your financial privacy is paramount.
                </p>
              </div>
              <div className="flex-1 flex justify-center items-center">
                <div className="relative w-24 h-32 bg-white/10 rounded-lg border border-white/20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-white/5 blur-xl rounded-full"></div>
                  <Shield className="w-12 h-12 text-white/80 relative z-10" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/60 to-white/30 border border-white/50 p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
            <div className="relative z-10 space-y-4">
              <div className="w-10 h-10 rounded-full bg-[color:var(--koboo-secondary)]/10 flex items-center justify-center text-[color:var(--koboo-secondary)]">
                <Calculator className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl text-[color:var(--koboo-ink)]">Precise Math</h3>
              <p className="text-sm text-[color:var(--koboo-muted)] leading-relaxed">
                We track the latest PAYE rules and apply them correctly, band by band.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why Koboo */}
      <section className="grid sm:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl text-[color:var(--koboo-ink)]">
            A calm, exact view of your PAYE — without spreadsheets.
          </h2>
          <p className="text-[color:var(--koboo-muted)] leading-relaxed">
            Tax explanations are often dense, scattered, or tuned for accountants. Koboo is for
            people who just want to understand what happens between HR&apos;s offer letter and
            their bank alert.
          </p>
          <ul className="space-y-4 pt-4">
            {[
              "New law aware: We track the latest PAYE rules.",
              "Deductions, not guesswork: See how pension & rent relief work.",
              "For salary and side-hustle: Designed for modern income streams."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[color:var(--koboo-ink)] font-medium">
                <CheckCircle2 className="w-5 h-5 text-[color:var(--koboo-secondary)] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden bg-[color:var(--koboo-secondary)]/5 border border-[color:var(--koboo-secondary)]/10">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          {/* Abstract UI representation */}
          <div className="absolute inset-x-8 top-12 bottom-0 bg-white rounded-t-2xl shadow-2xl border border-black/5 p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-black/5 pb-4">
              <div className="w-24 h-4 bg-gray-100 rounded-full animate-pulse"></div>
              <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
            </div>
            <div className="space-y-3">
              <div className="h-12 w-full bg-[color:var(--koboo-secondary)]/5 rounded-lg border border-[color:var(--koboo-secondary)]/10 flex items-center px-4">
                <div className="w-full h-2 bg-[color:var(--koboo-secondary)]/20 rounded-full"></div>
              </div>
              <div className="h-12 w-full bg-gray-50 rounded-lg border border-gray-100 flex items-center px-4">
                <div className="w-2/3 h-2 bg-gray-200 rounded-full"></div>
              </div>
              <div className="h-12 w-full bg-gray-50 rounded-lg border border-gray-100 flex items-center px-4">
                <div className="w-1/2 h-2 bg-gray-200 rounded-full"></div>
              </div>
            </div>
            <div className="pt-4">
              <div className="h-24 w-full bg-[color:var(--koboo-ink)] rounded-xl flex items-center justify-center p-6">
                <div className="text-center space-y-2">
                  <div className="h-2 w-16 bg-white/20 rounded-full mx-auto"></div>
                  <div className="h-6 w-32 bg-white/90 rounded-full mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="space-y-12 border-t border-[color:var(--koboo-ink)]/5 pt-16 sm:pt-24">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[color:var(--koboo-secondary)]">Simplicity</p>
          <h2 className="font-display text-3xl sm:text-4xl text-[color:var(--koboo-ink)]">Three small inputs. One honest number.</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {[
            { step: "01", title: "Tell us your income", desc: "Enter a monthly or annual figure, the way HR shares it. We'll convert and normalise for you." },
            { step: "02", title: "Add deductions", desc: "Pension, rent, NHF, health cover — we show what's allowable and how it feeds into chargeable income." },
            { step: "03", title: "See real take-home", desc: "We apply Nigeria's bands slice by slice and return annual and monthly tax — and what actually hits your account." }
          ].map((s, i) => (
            <div key={i} className="relative p-6 rounded-2xl bg-white/40 border border-white/60 hover:bg-white/60 transition-colors">
              <span className="text-6xl font-display text-[color:var(--koboo-ink)]/5 absolute top-4 right-4">{s.step}</span>
              <div className="relative space-y-3 pt-4">
                <div className="w-8 h-8 rounded-full bg-[color:var(--koboo-ink)] text-white flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <h3 className="font-display text-xl">{s.title}</h3>
                <p className="text-sm text-[color:var(--koboo-muted)] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="pb-12 text-center">
        <div className="relative py-20 px-6 rounded-3xl bg-[color:var(--koboo-ink)] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-[color:var(--koboo-secondary)] rounded-full blur-[100px] opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[color:var(--koboo-secondary)] rounded-full blur-[100px] opacity-30 translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 space-y-8 max-w-xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl">Ready to clarify your pay?</h2>
            <p className="text-white/70">No sign-up required. Private calculations. Updated for 2026.</p>
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-[color:var(--koboo-ink)] transition-all bg-white rounded-full hover:bg-gray-100 hover:scale-105 active:scale-95 shadow-xl"
            >
              Start Calculator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
