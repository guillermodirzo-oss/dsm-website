/**
 * Landing page layout — hides the global nav and footer injected by the
 * root layout so this Facebook Ad page has no navigation or footer links.
 * body > nav  = <Navigation /> (sticky top nav)
 * body > footer = <Footer />  (site-wide footer)
 * Both are direct children of <body> in the root layout, so the child
 * combinator selector is precise and won't affect anything inside <main>.
 */
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        body > nav    { display: none !important; }
        body > footer { display: none !important; }
      `}</style>
      {children}
    </>
  );
}
