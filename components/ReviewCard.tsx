import Link from "next/link";

interface ReviewCardProps {
  name: string;
  /** Omitted when the reviewer's city is unknown. Google does not publish it. */
  location?: string;
  text: string;
  /** Omitted unless a date was visible and unambiguous on the source review. */
  date?: string;
}

/**
 * The card lifts and shadows on hover, which reads as clickable, so it is a
 * real link. Previously it was a bare div with the same hover treatment, which
 * made every review card a dead click. It points at /reviews, which was barely
 * linked from anywhere.
 */
export default function ReviewCard({ name, location, text, date }: ReviewCardProps) {
  return (
    <Link
      href="/reviews"
      className="block bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-orange-50 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <blockquote className="text-gray-600 mb-5 leading-relaxed text-sm">&ldquo;{text}&rdquo;</blockquote>
      <div className="flex items-center justify-between border-t border-gray-50 pt-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-brand-green to-brand-green-dark rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md shadow-orange-100">
            {name.charAt(0)}
          </div>
          <div>
            <p className="font-bold text-gray-900 text-sm">{name}</p>
            {location ? <p className="text-xs text-gray-400">{location}</p> : null}
          </div>
        </div>
        {date ? <p className="text-xs text-gray-300">{date}</p> : null}
      </div>
    </Link>
  );
}
