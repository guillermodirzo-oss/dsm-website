"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-brand-green rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
            </div>
            <div>
              <span className="font-bold text-brand-green text-lg leading-tight block">DSM Cleaning</span>
              <span className="text-xs text-gray-500 leading-tight block -mt-0.5">Solutions</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-brand-green font-medium transition-colors">Home</Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-brand-green font-medium transition-colors flex items-center gap-1">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/deep-cleaning" className="block px-4 py-2.5 text-gray-700 hover:bg-brand-green-50 hover:text-brand-green text-sm">Deep Cleaning</Link>
                <Link href="/move-out-cleaning" className="block px-4 py-2.5 text-gray-700 hover:bg-brand-green-50 hover:text-brand-green text-sm">Move-Out / Move-In Cleaning</Link>
                <Link href="/recurring-cleaning" className="block px-4 py-2.5 text-gray-700 hover:bg-brand-green-50 hover:text-brand-green text-sm">Recurring Maid Service</Link>
                <Link href="/plainfield-il" className="block px-4 py-2.5 text-gray-700 hover:bg-brand-green-50 hover:text-brand-green text-sm">Plainfield, IL</Link>
              </div>
            </div>
            <Link href="/#about" className="text-gray-700 hover:text-brand-green font-medium transition-colors">About</Link>
            <Link href="/#faq" className="text-gray-700 hover:text-brand-green font-medium transition-colors">FAQ</Link>
          </div>

          {/* CTA + Phone */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+16302484536" className="text-brand-green font-bold hover:text-brand-green-dark transition-colors">
              (630) 248-4536
            </a>
            <Link href="/#contact" className="btn-primary">
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <a href="tel:+16302484536" className="text-brand-green font-bold text-sm">
              (630) 248-4536
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-brand-green"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 space-y-1">
            <Link href="/" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 text-gray-700 hover:bg-brand-green-50 hover:text-brand-green font-medium rounded-md">Home</Link>
            <Link href="/deep-cleaning" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 text-gray-700 hover:bg-brand-green-50 hover:text-brand-green font-medium rounded-md">Deep Cleaning</Link>
            <Link href="/move-out-cleaning" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 text-gray-700 hover:bg-brand-green-50 hover:text-brand-green font-medium rounded-md">Move-Out / Move-In Cleaning</Link>
            <Link href="/recurring-cleaning" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 text-gray-700 hover:bg-brand-green-50 hover:text-brand-green font-medium rounded-md">Recurring Maid Service</Link>
            <Link href="/plainfield-il" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 text-gray-700 hover:bg-brand-green-50 hover:text-brand-green font-medium rounded-md">Plainfield, IL</Link>
            <Link href="/#about" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 text-gray-700 hover:bg-brand-green-50 hover:text-brand-green font-medium rounded-md">About Us</Link>
            <Link href="/#faq" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 text-gray-700 hover:bg-brand-green-50 hover:text-brand-green font-medium rounded-md">FAQ</Link>
            <div className="px-4 pt-2">
              <Link href="/#contact" onClick={() => setMenuOpen(false)} className="btn-primary w-full block text-center">
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
