import Link from "next/link";
import type { ReactNode } from "react";

/**
 * The star rating line for heroes that sit on the orange brand gradient.
 *
 * White text straight on that gradient is 2.3:1 to 3.6:1, short of the 4.5:1
 * WCAG AA needs for small text, and the old peach (#FFA869) was lower still.
 * So the line sits on the darkest brand orange (brand-green-darker, #C2410C):
 * white on it is 5.2:1 and the star yellow (amber-400) is 3.1:1, wherever on
 * the gradient the line lands.
 *
 * `children` is the text after the stars, for example
 * "5.0 · 46 Google Reviews". Pass `href` to make the whole line a link.
 */
export default function HeroRating({
  children,
  href,
  className = "mb-4",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  const pill = "inline-block rounded-full bg-brand-green-darker px-3 py-1 text-white";
  const line = (
    <>
      <span className="text-amber-400">★★★★★</span> {children}
    </>
  );
  return (
    <p className={`text-sm font-semibold ${className}`}>
      {href ? (
        <Link href={href} className={`${pill} hover:underline`}>
          {line}
        </Link>
      ) : (
        <span className={pill}>{line}</span>
      )}
    </p>
  );
}
