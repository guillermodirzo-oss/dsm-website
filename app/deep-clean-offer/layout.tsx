/**
 * Landing page layout — hides the global nav and footer injected by the
 * root layout so this Facebook Ad page has no navigation or footer links.
 * body > nav  = <Navigation /> (sticky top nav)
 * body > footer = <Footer />  (site-wide footer)
 * Both are direct children of <body> in the root layout, so the child
 * combinator selector is precise and won't affect anything inside <main>.
 *
 * The CSS goes in through dangerouslySetInnerHTML on purpose. As a text child,
 * React escapes ">" to "&gt;", and a <style> tag never unescapes it: the
 * browser got "body &gt; nav", an invalid rule, so the nav and footer showed
 * until hydration failed on the mismatch and the whole page re-rendered.
 */
const HIDE_SITE_NAV_AND_FOOTER = `
  body > nav    { display: none !important; }
  body > footer { display: none !important; }
`;

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: HIDE_SITE_NAV_AND_FOOTER }} />
      {children}
    </>
  );
}
