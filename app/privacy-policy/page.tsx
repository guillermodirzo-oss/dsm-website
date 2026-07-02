import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for DSM Cleaning Solutions. How we collect, use, and protect your information when you use our website or book our cleaning services.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/privacy-policy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy | DSM Cleaning Solutions",
    description:
      "Privacy Policy for DSM Cleaning Solutions. How we collect, use, and protect your information when you use our website or book our cleaning services.",
    url: "https://www.dsmcleaningsolutions.com/privacy-policy",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "DSM Cleaning Solutions — Privacy Policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | DSM Cleaning Solutions",
    description: "Privacy Policy for DSM Cleaning Solutions. Learn how we collect, use, and protect your personal information.",
    images: ["/hero-image.png"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Privacy Policy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-white/70 text-lg">Last updated: January 1, 2025</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">

            {/* Introduction */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                This website is committed to protecting &amp; respecting your privacy. Please read the following carefully to understand our views &amp; practices regarding your personal data and how we will treat it. This policy, together with our Terms and Conditions, sets out the core principles on which any personal data we collect from you — or that you provide to us — will be processed by us.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We keep certain information when you visit our website and recognise the importance of keeping that information secure and letting you know what we will do with it.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This policy only applies to our website. If you leave our website via a link or otherwise, you will be subject to the policy of that website provider. We have no control over the policy or terms of other websites. It is your responsibility to check those policies before continuing to access them.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* IP Addresses & Cookies */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">IP Addresses &amp; Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect information about your computer, including where available, your IP address, operating system, and browser type. We also collect data for statistical purposes and to report aggregate information.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                This is statistical data about our users&apos; browsing actions and patterns, and does not identify any individual or collect personal information about third-party advertisers.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You may refuse to accept cookies by activating the setting on your browser which allows you to refuse cookies. However, if you select this setting you may be unable to access certain parts of our website. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you log on to our website.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Information We May Collect */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We May Collect From You</h2>
              <p className="text-gray-600 leading-relaxed mb-4">We collect and process the following information:</p>
              <ul className="space-y-3 mb-4">
                {[
                  "Information that you provide by filling in forms on our site.",
                  "Information provided at the time of registering to use our website, subscribing to our services, or requesting further assistance.",
                  "The information you provide when reporting an issue with our website.",
                  "When you contact us, we keep that correspondence.",
                  "Completed surveys that we use for research purposes, although you are not required to respond to them.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed">
                By submitting your email and phone number on our site, you give consent to receiving occasional emails and SMS messages about special offers or other information from us.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Where We Store Your Personal Data */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Where We Store Your Personal Data</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Personally identifiable information collected by DSM Cleaning Solutions is securely stored and is not accessible to third parties or employees outside of DSM Cleaning Solutions. Any payment transactions made will be encrypted.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Where we have given you (or where you have chosen) a password which enables you to access certain parts of our site, you are responsible for keeping this password confidential. We ask you not to share the password with anyone.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Uses Made Of The Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Uses Made of the Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">We use the information about you in the following ways:</p>
              <ul className="space-y-3">
                {[
                  "To ensure that content from our website is presented in the most effective manner for you and for your computer.",
                  "To provide you with information, products, or services that you request from us, or which we think may interest you, where you have consented to be contacted for such purposes.",
                  "To carry out our obligations arising from any contracts entered into between you and us.",
                  "To allow you to participate in interactive features of our service when you choose to do so.",
                  "To notify you about changes to our service.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Your Rights */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the right to ask us not to process your personal data for marketing purposes. We will usually inform you before collecting your data if we intend to use it for such purposes, or if we intend to disclose your information to any third party for such purposes. You can exercise your right to prevent such processing by checking certain boxes on the forms we use to collect your data.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our site may, from time to time, contain links to and from the websites of our partner networks, advertisers, and affiliates. If you follow a link to one of those websites, please note that those websites have their own privacy policies and that we do not accept any responsibility or liability for those policies. Please check those policies before you submit any personal data to those websites.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Changes To Our Privacy Policy */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Our Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                Any changes we may make to our privacy policy in the future will be posted on this page and, when appropriate, notified to you by e-mail. We advise that you check this page regularly to keep up-to-date with any changes.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Your Consent */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Consent</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                By using our website, you indicate that you agree to our privacy policy and that you agree to abide by it. If you do not agree to our privacy policy, please refrain from using our website.
              </p>
              <p className="text-gray-600 leading-relaxed">
                All usage rights are owned, reserved, and controlled by DSM Cleaning Solutions.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Contact */}
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-2">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <p className="text-gray-600">
                <strong>DSM Cleaning Solutions</strong><br />
                Plainfield, IL<br />
                Phone: <a href="tel:+18152462113" className="text-orange-500 font-semibold hover:underline">(815) 246-2113</a><br />
                Website: <Link href="/" className="text-orange-500 font-semibold hover:underline">dsmcleaningsolutions.com</Link>
              </p>
            </div>

            <p className="text-sm text-gray-400 mt-8">© 2025 DSM Cleaning Solutions. All rights reserved.</p>

          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">Ready to book a cleaning with a company you can trust?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-primary">Back to Home</Link>
            <Link href="/terms-and-conditions" className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-2xl hover:border-orange-500 hover:text-orange-500 transition-colors">
              Read Our Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
