import Link from "next/link";
import type { ClientStory as Story } from "@/lib/localProof";

/**
 * The "One of Our {City} Clients" section: a real client story, the price of
 * a home like theirs, and a link to the service the story is about. Copy and
 * prices come from lib/localProof.ts; nothing is typed here.
 *
 * `background` is the section behind the card, so it can sit between either
 * kind of neighbor. `showLinks={false}` is for the page a link would point
 * back to.
 */
export default function ClientStory({
  story,
  title,
  background = "gray",
  showLinks = true,
}: {
  story: Story;
  title?: string;
  background?: "gray" | "white";
  showLinks?: boolean;
}) {
  const onGray = background === "gray";
  return (
    <section className={`py-14 ${onGray ? "bg-gray-50" : "bg-white"}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-center">{title ?? `One of Our ${story.city} Clients`}</h2>
        <div className={`rounded-2xl p-7 border ${onGray ? "bg-white border-gray-200" : "bg-gray-50 border-gray-200"}`}>
          <p className="text-gray-700 leading-relaxed">{story.story}</p>
          <p className="text-sm text-gray-600 mt-4">{story.priceLine}</p>
          {showLinks && (
            <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {story.links.map((link) => (
                <Link key={link.href} href={link.href} className="text-brand-green font-semibold text-sm hover:underline">
                  {link.label}
                </Link>
              ))}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
