"use client";

import Link from "next/link";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100" : "bg-white/95 backdrop-blur-xl border-b border-gray-100"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Logo.png"
              alt="DSM Cleaning Solutions"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            <Link href="/" className="text-sm text-gray-600 hover:text-brand-green font-medium transition-colors">Home</Link>
            <div className="relative group">
              <button className="text-sm text-gray-600 hover:text-brand-green font-medium transition-colors flex items-center gap-1">
                Services
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                <div className="p-2">
                  {[
                    { label: "Standard Cleaning", href: "/standard-cleaning", icon: "🏠" },
                    { label: "Deep Cleaning", href: "/deep-cleaning", icon: "🧹" },
                    { label: "Move-Out / Move-In", href: "/move-out-cleaning", icon: "📦" },
                    { label: "Recurring Maid Service", href: "/recurring-cleaning", icon: "📅" },
                    { label: "Eco-Friendly Cleaning", href: "/eco-friendly-cleaning", icon: "🌿" },
                    { label: "Apartment Cleaning", href: "/apartment-cleaning", icon: "🏢" },
                    { label: "Post-Construction", href: "/post-construction-cleaning", icon: "🔨" },
                    { label: "Airbnb / Short-Term Rental", href: "/airbnb-cleaning", icon: "🛏️" },
                    { label: "One-Time Cleaning", href: "/one-time-cleaning", icon: "✨" },
                    { label: "Plainfield, IL", href: "/plainfield-il", icon: "📍" },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-brand-green-50 hover:text-brand-green rounded-xl transition-colors">
                      <span>{item.icon}</span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/#about" className="text-sm text-gray-600 hover:text-brand-green font-medium transition-colors">About</Link>
            <Link href="/#faq" className="text-sm text-gray-600 hover:text-brand-green font-medium transition-colors">FAQ</Link>
          </div>

          {/* CTA + Phone */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+18152462113" className="text-sm text-gray-600 font-semibold hover:text-brand-green transition-colors">
              (815) 246-2113
            </a>
            <Link href="https://dsmcleaningsolutions.com/booknow" className="btn-primary text-sm">
              Book Now
            </Link>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3">
            <a href="tel:+18152462113" className="text-brand-green font-bold text-sm">(815) 246-2113</a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors" aria-label="Toggle menu">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 space-y-1">
            {[
              { label: "Home", href: "/" },
              { label: "Standard Cleaning", href: "/standard-cleaning" },
              { label: "Deep Cleaning", href: "/deep-cleaning" },
              { label: "Move-Out / Move-In", href: "/move-out-cleaning" },
              { label: "Recurring Maid Service", href: "/recurring-cleaning" },
              { label: "Eco-Friendly Cleaning", href: "/eco-friendly-cleaning" },
              { label: "Apartment Cleaning", href: "/apartment-cleaning" },
              { label: "Post-Construction Cleaning", href: "/post-construction-cleaning" },
              { label: "Airbnb / Short-Term Rental", href: "/airbnb-cleaning" },
              { label: "One-Time Cleaning", href: "/one-time-cleaning" },
              { label: "Plainfield, IL", href: "/plainfield-il" },
              { label: "About Us", href: "/#about" },
              { label: "FAQ", href: "/#faq" },
            ].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-green-50 hover:text-brand-green font-medium rounded-xl transition-colors">
                {item.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link href="https://dsmcleaningsolutions.com/booknow" onClick={() => setMenuOpen(false)} className="btn-primary w-full block text-center text-sm">
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
