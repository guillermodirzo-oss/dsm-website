import ReviewCard from "@/components/ReviewCard";
import { pickReviews, reviewAttribution, REAL_REVIEWS } from "@/lib/realReviews";

interface RealReviewGridProps {
  /** How many reviews to show. Clamped to how many real reviews exist. */
  count?: number;
  /** Shifts which review the grid starts on, so pages do not all lead alike. */
  offset?: number;
  /** Tailwind grid classes, so callers keep their existing layout. */
  className?: string;
}

/**
 * Renders real Google reviews and nothing else.
 *
 * Review text lives only in lib/realReviews.ts. Never inline testimonial copy
 * into a page: fabricated testimonials breach the FTC Rule on the Use of
 * Consumer Reviews and Testimonials.
 *
 * Reviewer cities are unknown (Google does not publish them), so no location
 * line is rendered. The same real review may appear on more than one page,
 * which is honest; it must never appear twice within one page, which the
 * clamping in pickReviews guarantees.
 */
export default function RealReviewGrid({
  count = 3,
  offset = 0,
  className = "grid grid-cols-1 md:grid-cols-3 gap-6",
}: RealReviewGridProps) {
  const reviews = pickReviews(count, offset);
  if (reviews.length === 0) return null;

  return (
    <div className={className}>
      {reviews.map((review) => (
        <ReviewCard
          key={review.name}
          name={reviewAttribution(review)}
          text={review.text}
        />
      ))}
    </div>
  );
}

/** Total number of real reviews available, for callers that need to clamp. */
export const REAL_REVIEW_TOTAL = REAL_REVIEWS.length;
