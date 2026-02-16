"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/constants";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[color:var(--koboo-bg)]/80 border-b border-[color:var(--koboo-ink)]/5">
            <div className="flex h-16 sm:h-20 items-center justify-between px-4 sm:px-0 max-w-7xl mx-auto">
                {/* Logo Area */}
                <Link href="/" className="flex items-center gap-2 group z-50 relative">
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

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="/calculator"
                        className="inline-flex h-10 items-center justify-center rounded-full bg-[color:var(--koboo-ink)] px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[color:var(--koboo-secondary)] hover:scale-105 active:scale-95"
                    >
                        Open Calculator
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden relative z-50 p-2 text-[color:var(--koboo-ink)]"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-0 left-0 w-full h-screen bg-[color:var(--koboo-bg)] backdrop-blur-xl md:hidden pt-24 px-4 flex flex-col gap-6 border-b border-[color:var(--koboo-ink)]/5"
                    >
                        <nav className="flex flex-col gap-6 items-center">
                            {navItems.map((item, idx) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 + 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-display font-medium text-[color:var(--koboo-ink)] hover:text-[color:var(--koboo-secondary)]"
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navItems.length * 0.05 + 0.1 }}
                                className="mt-4"
                            >
                                {/* <Link
                                    href="/calculator"
                                    onClick={() => setIsOpen(false)}
                                    className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[color:var(--koboo-ink)] px-8 text-base font-semibold text-white shadow-lg transition-all active:scale-95"
                                >
                                    Start Calculating
                                </Link> */}
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
