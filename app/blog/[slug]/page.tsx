import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://www.dsmcleaningsolutions.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://www.dsmcleaningsolutions.com/blog/${post.slug}`,
      siteName: "DSM Cleaning Solutions",
      type: "article",
      images: [
        {
          url: "/hero-image.png",
          width: 1200,
          height: 630,
          alt: `DSM Cleaning Solutions — ${post.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: ["/hero-image.png"],
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  // IMPORTANT: This schema must NOT include aggregateRating or a LocalBusiness type.
  // The root layout (app/layout.tsx) already injects LocalBusiness + aggregateRating globally.
  // Adding it again here — or linking author/publisher back to the same entity via url —
  // causes Google to detect "Review has multiple aggregate ratings" in Search Console.
  // author uses Organization with name only (no url) to avoid entity-linking to the LocalBusiness.
  // publisher uses Organization with url + logo but NO aggregateRating.
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: {
      "@type": "Organization",
      name: "DSM Cleaning Solutions",
    },
    publisher: {
      "@type": "Organization",
      name: "DSM Cleaning Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://www.dsmcleaningsolutions.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.dsmcleaningsolutions.com/blog/${post.slug}`,
    },
  };

  const truncatedTitle =
    post.title.length > 50 ? post.title.slice(0, 50) + "…" : post.title;

  return (
    <main>
      {/* JSON-LD: BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* JSON-LD: FAQPage (per-post, optional) */}
      {post.faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(post.faqSchema) }}
        />
      )}

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light text-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{truncatedTitle}</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
            {post.title}
          </h1>

          <p className="text-white/75 text-sm">
            {post.date} &nbsp;·&nbsp; By {post.author}
          </p>
        </div>
      </section>

      {/* Article */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back to blog */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-brand-green font-semibold text-sm mb-10 hover:underline"
        >
          ← Back to Blog
        </Link>

        {/* Blog content */}
        <style>{`
          .blog-content h2 { font-size: 1.5rem; font-weight: 700; color: #111827; margin-top: 2rem; margin-bottom: 0.75rem; }
          .blog-content h3 { font-size: 1.25rem; font-weight: 600; color: #1f2937; margin-top: 1.5rem; margin-bottom: 0.5rem; }
          .blog-content p { color: #4b5563; line-height: 1.75; margin-bottom: 1rem; }
          .blog-content ul { list-style: none; padding: 0; margin-bottom: 1rem; }
          .blog-content ul li { display: flex; align-items: flex-start; gap: 0.5rem; color: #4b5563; margin-bottom: 0.5rem; font-size: 0.9375rem; }
          .blog-content ul li::before { content: "✓"; color: #f97316; font-weight: 700; flex-shrink: 0; margin-top: 0.1rem; }
          .blog-content a { color: #f97316; font-weight: 600; }
          .blog-content a:hover { text-decoration: underline; }
        `}</style>

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Related Services */}
        <div className="mt-16 border-t border-gray-100 pt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Related Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Deep Cleaning", href: "/deep-cleaning", icon: "🧹" },
              {
                label: "Move-Out Cleaning",
                href: "/move-out-cleaning",
                icon: "📦",
              },
              {
                label: "Eco-Friendly Cleaning",
                href: "/eco-friendly-cleaning",
                icon: "🌿",
              },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="flex items-center gap-3 bg-gray-50 hover:bg-brand-green-50 border border-gray-100 hover:border-brand-green-100 rounded-xl px-4 py-3.5 transition-colors group"
              >
                <span className="text-xl">{service.icon}</span>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-green transition-colors">
                  {service.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-brand-green py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for a Professionally Clean Home?
          </h2>
          <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto">
            DSM Cleaning Solutions serves Plainfield, Romeoville, Naperville, Bolingbrook, and the entire southwest Chicago suburbs. Get a free estimate today.
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
