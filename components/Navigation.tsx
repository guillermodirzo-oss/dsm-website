"use client";

import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (["/spring-special", "/thank-you", "/quote-thank-you"].includes(pathname)) return null;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100" : "bg-white/95 backdrop-blur-xl border-b border-gray-100"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo.png"
              alt="DSM Cleaning Solutions — House Cleaning Plainfield IL"
              width={180}
              height={48}
              className="h-12 w-auto object-contain"
              priority
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
            <Link href="/contact" className="text-sm text-gray-600 hover:text-brand-green font-medium transition-colors">Contact</Link>
            <Link href="/blog" className="text-sm text-gray-600 hover:text-brand-green font-medium transition-colors">Blog</Link>
          </div>

          {/* CTA + Phone */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+18152462113" className="text-sm text-gray-600 font-semibold hover:text-brand-green transition-colors">
              (815) 246-2113
            </a>
            <Link
              href="https://dsmcleaningsolutions.bookingkoala.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 font-semibold hover:text-brand-green transition-colors flex items-center gap-1.5 border border-gray-200 rounded-full px-4 py-2 hover:border-brand-green"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Log In
            </Link>
            <Link href="https://dsmcleaningsolutions.bookingkoala.com/booknow" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
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
          <div className="md:hidden border-t border-gray-100 flex flex-col" style={{ maxHeight: "calc(100svh - 64px)", overflowY: "auto" }}>

            {/* Scrollable nav links */}
            <div className="py-3 space-y-1 flex-1">

              {/* Home */}
              <Link href="/" onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-green-50 hover:text-brand-green font-medium rounded-xl transition-colors">
                Home
              </Link>

              {/* Services — expandable */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-green-50 hover:text-brand-green font-medium rounded-xl transition-colors"
                >
                  <span>Services</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {mobileServicesOpen && (
                  <div className="mt-1 ml-3 border-l-2 border-brand-green-100 pl-3 space-y-0.5">
                    {/* Primary services */}
                    {[
                      { label: "🏠 Standard Cleaning", href: "/standard-cleaning" },
                      { label: "🧹 Deep Cleaning", href: "/deep-cleaning" },
                      { label: "📦 Move-Out / Move-In", href: "/move-out-cleaning" },
                      { label: "📅 Recurring Maid Service", href: "/recurring-cleaning" },
                    ].map((item) => (
                      <Link key={item.href} href={item.href}
                        onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-brand-green-50 hover:text-brand-green font-medium rounded-lg transition-colors">
                        {item.label}
                      </Link>
                    ))}

                    {/* More services divider */}
                    <p className="px-3 pt-2 pb-1 text-xs font-bold text-gray-400 uppercase tracking-widest">More Services</p>

                    {[
                      { label: "🌿 Eco-Friendly Cleaning", href: "/eco-friendly-cleaning" },
                      { label: "🏢 Apartment Cleaning", href: "/apartment-cleaning" },
                      { label: "🔨 Post-Construction", href: "/post-construction-cleaning" },
                      { label: "🛏️ Airbnb / Short-Term Rental", href: "/airbnb-cleaning" },
                      { label: "✨ One-Time Cleaning", href: "/one-time-cleaning" },
                    ].map((item) => (
                      <Link key={item.href} href={item.href}
                        onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-brand-green-50 hover:text-brand-green font-medium rounded-lg transition-colors">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Remaining top-level links */}
              {[
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "FAQ", href: "/#faq" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link key={item.href} href={item.href}
                  onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-green-50 hover:text-brand-green font-medium rounded-xl transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA buttons — always visible at bottom */}
            <div className="px-4 py-4 border-t border-gray-100 flex flex-col gap-2 bg-white">
              <Link href="https://dsmcleaningsolutions.bookingkoala.com/login"
                onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full text-sm font-semibold text-gray-700 border border-gray-200 rounded-full py-2.5 hover:border-brand-green hover:text-brand-green transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Log In
              </Link>
              <Link href="https://dsmcleaningsolutions.bookingkoala.com/booknow"
                onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                target="_blank" rel="noopener noreferrer"
                className="btn-primary w-full block text-center text-sm">
                Book Now
              </Link>
            </div>

          </div>
        )}
      </div>
    </nav>
  );
}
