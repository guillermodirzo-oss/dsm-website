import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Business Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">DSM Cleaning Solutions</h3>
            <p className="text-sm mb-3">Family-owned, eco-friendly house cleaning serving the southwest Chicago suburbs.</p>
            <p className="text-sm mb-1">Romeoville & Plainfield, IL</p>
            <a href="tel:+18152462113" className="text-brand-green-light font-bold text-lg hover:text-white transition-colors block mt-3">
              (815) 246-2113
            </a>
            <p className="text-sm mt-1">Free estimates available</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/deep-cleaning" className="hover:text-white transition-colors">Deep Cleaning</Link></li>
              <li><Link href="/move-out-cleaning" className="hover:text-white transition-colors">Move-Out / Move-In Cleaning</Link></li>
              <li><Link href="/recurring-cleaning" className="hover:text-white transition-colors">Recurring Maid Service</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Standard House Cleaning</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Eco-Friendly Green Cleaning</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Apartment Cleaning</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Post-Construction Cleaning</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Airbnb / Short-Term Rental Cleaning</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Romeoville, IL</Link></li>
              <li><Link href="/plainfield-il" className="hover:text-white transition-colors">Plainfield, IL</Link></li>
              <li><span className="hover:text-white transition-colors">Naperville, IL</span></li>
              <li><span className="hover:text-white transition-colors">Bolingbrook, IL</span></li>
              <li><span className="hover:text-white transition-colors">Joliet, IL</span></li>
              <li><span className="hover:text-white transition-colors">Westmont, IL</span></li>
              <li><span className="text-gray-500 text-xs">& Surrounding Suburbs</span></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#reviews" className="hover:text-white transition-colors">Reviews</Link></li>
              <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="https://dsmcleaningsolutions.com/booknow" className="hover:text-white transition-colors">Contact / Book Now</Link></li>
            </ul>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-sm">5-Star Rated</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-2 text-xs">
              <span className="bg-gray-800 px-2 py-1 rounded">Fully Insured</span>
              <span className="bg-gray-800 px-2 py-1 rounded">Eco-Friendly</span>
              <span className="bg-gray-800 px-2 py-1 rounded">Family Owned</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {currentYear} DSM Cleaning Solutions. All rights reserved. Romeoville, IL.</p>
          <div className="flex gap-4">
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
            <span className="text-gray-600">|</span>
            <span>Licensed &amp; Insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
