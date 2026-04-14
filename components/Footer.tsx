import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-green to-brand-green-dark rounded-xl flex items-center justify-center shadow-md">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/>
                </svg>
              </div>
              <span className="font-bold text-white text-base tracking-tight">DSM Cleaning Solutions</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">Family-owned, eco-friendly house cleaning serving the southwest Chicago suburbs.</p>
            <p className="text-sm mb-1 text-gray-500">Romeoville &amp; Plainfield, IL</p>
            <a href="tel:+18152462113" className="text-brand-green font-bold text-lg hover:text-orange-400 transition-colors block mt-3">
              (815) 246-2113
            </a>
            <p className="text-xs text-gray-600 mt-1">Free estimates available</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Services</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Deep Cleaning", href: "/deep-cleaning" },
                { label: "Move-Out / Move-In Cleaning", href: "/move-out-cleaning" },
                { label: "Recurring Maid Service", href: "/recurring-cleaning" },
                { label: "Standard House Cleaning", href: "https://dsmcleaningsolutions.com/booknow" },
                { label: "Eco-Friendly Green Cleaning", href: "https://dsmcleaningsolutions.com/booknow" },
                { label: "Apartment Cleaning", href: "https://dsmcleaningsolutions.com/booknow" },
                { label: "Post-Construction Cleaning", href: "https://dsmcleaningsolutions.com/booknow" },
                { label: "Airbnb / Short-Term Rental", href: "https://dsmcleaningsolutions.com/booknow" },
              ].map((item) => (
                <li key={item.label}><Link href={item.href} className="hover:text-white transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Service Areas</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Romeoville, IL", href: "/" },
                { label: "Plainfield, IL", href: "/plainfield-il" },
                { label: "Naperville, IL", href: "#" },
                { label: "Bolingbrook, IL", href: "#" },
                { label: "Joliet, IL", href: "#" },
                { label: "Westmont, IL", href: "#" },
              ].map((item) => (
                <li key={item.label}><Link href={item.href} className="hover:text-white transition-colors">{item.label}</Link></li>
              ))}
              <li className="text-gray-600 text-xs pt-1">& Surrounding Suburbs</li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Company</h3>
            <ul className="space-y-2.5 text-sm mb-7">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/#about" },
                { label: "Reviews", href: "/#reviews" },
                { label: "FAQ", href: "/#faq" },
                { label: "Book Online", href: "https://dsmcleaningsolutions.com/booknow" },
              ].map((item) => (
                <li key={item.label}><Link href={item.href} className="hover:text-white transition-colors">{item.label}</Link></li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {["Fully Insured", "Eco-Friendly", "Family Owned"].map((badge) => (
                <span key={badge} className="bg-gray-900 border border-gray-800 text-gray-400 text-xs px-3 py-1.5 rounded-full">{badge}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {currentYear} DSM Cleaning Solutions. All rights reserved. Romeoville, IL.</p>
          <div className="flex gap-4">
            <Link href="/sitemap.xml" className="hover:text-gray-400 transition-colors">Sitemap</Link>
            <span>·</span>
            <span>Licensed &amp; Insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
