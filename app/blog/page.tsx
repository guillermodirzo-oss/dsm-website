import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blogData";

export const metadata: Metadata = {
  title: "Cleaning Tips & Local Guides",
  description:
    "Cleaning tips, checklists, and local guides from DSM Cleaning Solutions — serving Plainfield, Romeoville, Naperville & the southwest Chicago suburbs.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/blog" },
  openGraph: {
    title: "Cleaning Tips & Local Guides | DSM Cleaning Solutions",
    description:
      "Cleaning tips, checklists, and local guides from DSM Cleaning Solutions — serving Plainfield, Romeoville, Naperville & the southwest Chicago suburbs.",
    url: "https://www.dsmcleaningsolutions.com/blog",
    siteName: "DSM Cleaning Solutions",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "DSM Cleaning Solutions Blog — Cleaning Tips & Local Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cleaning Tips & Local Guides | DSM Cleaning Solutions",
    description:
      "Cleaning tips, checklists, and local guides from DSM Cleaning Solutions — serving Plainfield, Romeoville, Naperville & the southwest Chicago suburbs.",
    images: ["/hero-image.png"],
  },
};

export default function BlogIndexPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Blog</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Cleaning Tips &amp; Local Guides
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl">
            Expert cleaning advice for Plainfield, Romeoville, Naperville &amp; the southwest suburbs.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-2">Latest Posts</h2>
          <p className="section-subheading text-center mb-12">
            Tips, checklists, and local insights from our cleaning experts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Orange top accent bar */}
                <div className="h-1.5 w-full bg-brand-green" />

                <div className="p-6">
                  {/* Date */}
                  <p className="text-xs text-gray-400 font-medium mb-3 uppercase tracking-wide">
                    {post.date}
                  </p>

                  {/* Title */}
                  <h3 className="font-bold text-xl text-gray-900 mb-3 leading-snug group-hover:text-brand-green transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read more */}
                  <span className="text-brand-green font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-green py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want a Spotless Home?
          </h2>
          <p className="text-white/85 text-lg mb-8">
            Book a cleaning or call <strong>(815) 246-2113</strong> for a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/book"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand-green font-bold px-8 py-3.5 rounded-full hover:bg-gray-50 transition-colors shadow-md"
            >
              Book Now
            </Link>
            <a
              href="tel:+18152462113"
              className="text-white font-semibold text-lg border-2 border-white/50 rounded-full px-8 py-3 hover:bg-white/10 transition-colors"
            >
              (815) 246-2113
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
