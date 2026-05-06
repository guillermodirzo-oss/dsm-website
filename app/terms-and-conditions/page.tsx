import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions for DSM Cleaning Solutions. Please read our service policies including booking, payments, cancellations, and satisfaction guarantee before booking.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/terms-and-conditions" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms and Conditions | DSM Cleaning Solutions",
    description:
      "Terms and Conditions for DSM Cleaning Solutions. Please read our service policies including booking, payments, cancellations, and satisfaction guarantee before booking.",
    url: "https://www.dsmcleaningsolutions.com/terms-and-conditions",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "DSM Cleaning Solutions — Terms and Conditions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | DSM Cleaning Solutions",
    description: "Terms and Conditions for DSM Cleaning Solutions. Read our service policies on booking, payments, and cancellations.",
    images: ["/hero-image.png"],
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Terms and Conditions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">Terms and Conditions</h1>
          <p className="text-white/70 text-lg">Last updated: January 1, 2025</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">

            {/* Intro */}
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">DSM Cleaning Solutions Terms &amp; Conditions</h2>
              <p className="text-gray-700 leading-relaxed">
                By using this website to book service, you agree to comply with and be bound by these Terms &amp; Conditions. If you do not agree to these terms and conditions, do not book service with us.
              </p>
            </div>

            {/* Booking Confirmation */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmation</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Booking service online does not guarantee you a spot for that date and time. You will be contacted by email or phone with a confirmation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                In order to reserve your cleaning date and time, a deposit of <strong>$70</strong> will be applied. This fee is <strong>NON-REFUNDABLE</strong>, but is deductible from the total cleaning price.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Cleaning Crew */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cleaning Crew</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We always work with teams of two; occasionally more cleaners may be needed due to the complexity of work or a busy schedule. We do our best to limit the number of cleaners in your home while still providing sufficient crew for cleaning scheduling.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our employees have been rigorously background screened and drug tested prior to working with us. You can rest assured all our staff have integrity and are held accountable.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Right to Refuse Service */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Right to Refuse Service</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We reserve the right to refuse and/or terminate service because of safety concerns, inappropriate or uncomfortable situations, weapons on premises, aggressive pets, or for any other reason.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our employees have the choice to leave if the home is in an extremely unsanitary condition or they feel unsafe or threatened. If you book a cleaning that is unreasonable, the cleaners may refuse service on the spot and you will be charged the cancellation fee.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Cleaning Day Preparation */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cleaning Day Preparation</h2>
              <p className="text-gray-600 leading-relaxed">
                Your price for cleaning is based on our cleaners focusing all of their time on cleaning. We ask that you take a few minutes to tidy up to allow the cleaners easy access to the areas and surfaces to be cleaned — floors, counter tops, tabletops, etc. If you would like our cleaners to do these tasks for you, please call the office in advance so your cleaning fee can be adjusted for the additional time.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Add-On Services */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Add-On Services</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The following services are available for an additional charge:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Clean Interior Windows & Slits",
                  "Detail Blinds",
                  "Detail Baseboards",
                  "Dishes",
                  "Clean Inside Kitchen Cabinets",
                  "Clean Inside Oven",
                  "Clean Inside Fridge",
                  "Sweep Inside Garage",
                  "Patio Cleaning",
                  "Carpet Vacuuming",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                    <svg className="w-4 h-4 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Pets */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pets</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We will gladly work around pets. We ask that indoor activity is limited during the cleaning for efficiency and safety reasons. If your pet becomes vicious or poses a safety risk, DSM Cleaning Solutions will not be held liable for any damages or theft to the client&apos;s home.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our employees are instructed not to enter a house if they believe an animal is a threat. Pets may behave differently when a family member is not present. If the removal of our cleaning technician is due to aggressive pets, our cancellation policy will apply.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Service Fees */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Fees</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Please remember that we provide instant prices based on years of experience, but we may adjust the price based on the actual condition of the home. If we do need to adjust the price upon arrival, we will notify you before starting. If we are unable to reach you, the crew will have to leave and you will be charged the cancellation fee.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to reevaluate rates at any time based on the time it takes to perform our service to meet the client&apos;s standards. DSM Cleaning Solutions will contact the client to discuss price or service revisions if the cleaning time differs drastically from the original bid.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Payments */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payments</h2>
              <p className="text-gray-600 leading-relaxed">
                In order to reserve your cleaning date and time, a deposit of <strong>$70</strong> will be applied. We accept payment by check, cash, or credit card. The remaining balance is due on the day of cleaning.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Refund Policy */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not offer refunds. We have built our business by providing our clients with the best possible service available. However, we realize that we are human and things may occasionally get missed. Should this happen, email or call us <strong>within 48 hours</strong> and we will return to fix the issue at no charge.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Recurring Service Discount */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Recurring Service Discount</h2>
              <p className="text-gray-600 leading-relaxed">
                Recurring discounts start <strong>after</strong> the first cleaning service. If you skip cleanings so that your cleaning frequency drops lower than what you were originally set up for, your price will be increased to the pricing level for the lower frequency.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Rate Increases */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Rate Increases</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Client cleaning rate adjustments may be made at any time during the year should there be changes to the frequency of the client&apos;s established service schedule, or changes to the home or living situation — including remodels, change of address, number of people living in the home, or a significant change in the condition of the home.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Customer rates shall be increased annually by an amount not to exceed <strong>10%</strong> of the client&apos;s current rate.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Cleaning Crew Access */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cleaning Crew Access</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The client shall make the service location accessible to DSM Cleaning Solutions personnel on the scheduled service day. If the team is locked out of the client&apos;s home, every effort will be made to establish contact with the client to arrange for entry.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If contact is not made within 30 minutes of the cleaning team&apos;s arrival, the scheduled cleaning will be skipped and you will be charged a <strong>$70 late cancellation fee</strong>. To avoid this fee, please provide us with a key or access code to gain entry to your home.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Rescheduling & Cancellations */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Rescheduling &amp; Cancellations</h2>
              <p className="text-gray-600 leading-relaxed">
                Service reliability is extremely important. We reserve a time especially for you, and we request that you give us a minimum of <strong>48 hours&apos; notice</strong> if you need to cancel or reschedule for any reason in order to avoid incurring a <strong>$70 cancellation fee</strong>.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Alarm */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Alarm Systems</h2>
              <p className="text-gray-600 leading-relaxed">
                If your home is equipped with a security system, please ensure that it is in the off position or call our office with the code and proper directions for use. If the code should change, please let us know so we do not incur a lockout charge.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Use of Homeowner's Vacuum */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Homeowner&apos;s Vacuum</h2>
              <p className="text-gray-600 leading-relaxed">
                If you request that we use your vacuum, we will not assume or accept any liability for damage to the unit. Since we are not responsible for the maintenance of the vacuum, we will not be responsible for any repairs. If the vacuum is not in working order and is unable to clean your home, we will not be responsible for repairing or replacing it.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Items We Cannot Clean */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Items We Cannot Clean</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Mold removal is a specialty service — we cannot be liable for any mold-related risks in clients&apos; homes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We cannot clean areas containing any animal or human bodily fluids, blood, feces, vomit, cat litter boxes, bird cages, urine, or other excretions.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Unreachable Areas & Heavy Items */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Unreachable Areas &amp; Heavy Items</h2>
              <p className="text-gray-600 leading-relaxed">
                For safety and liability reasons, our employees cannot climb higher than a step stool or work outside of your home. Cleaners cannot move objects over <strong>35 pounds</strong>. If you would like cleaning behind heavy objects, please make this arrangement prior to your cleaning day.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Breakage/Damage & Loss Policy */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Breakage, Damage &amp; Loss Policy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                While occurrences are rare, the possibility of breakage or damage is present while we clean. Our cleaners exercise reasonable care when cleaning your home, and we carry insurance to cover damage to property.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Items that are antique, collectible, irreplaceable, or family heirlooms should be pointed out to us prior to cleaning so we can take special precautions or avoid handling them entirely.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Notification of any breakage or loss must be made <strong>within 48 hours</strong> of the cleaning. Identical replacement is always attempted but not guaranteed.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Cleaners Arrival Window */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cleaners Arrival Window</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We schedule our routes to minimize drive time in an effort to maintain low prices and avoid trip fees. If you require a specific time, we will make every effort to accommodate your request. However, no specific arrival times are guaranteed.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Due to the unpredictable nature of our business and unforeseen circumstances such as traffic and weather, please allow flexibility for scheduling between <strong>8:00 am and 4:00 pm</strong>.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We generally do not run more than 30 minutes early or late. If we are running late, we will call and/or text you.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Holidays */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Holidays</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                DSM Cleaning Solutions does not offer cleaning visits on holidays. If your scheduled day falls on a holiday, we will contact you to reschedule. The following holidays are observed:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Independence Day",
                  "Thanksgiving",
                  "Black Friday",
                  "Christmas Eve",
                  "Christmas Day",
                  "New Year's Eve",
                  "New Year's Day",
                ].map((holiday) => (
                  <div key={holiday} className="flex items-center gap-2 text-gray-600 text-sm">
                    <span className="text-orange-500">🗓</span>
                    {holiday}
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Inclement Weather */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Inclement Weather</h2>
              <p className="text-gray-600 leading-relaxed">
                DSM Cleaning Solutions may suspend service during severe weather conditions that make travel unsafe in the greater Plainfield, Romeoville, and surrounding Illinois service area. We will contact you as early as possible to reschedule any affected appointments at no charge.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Key Release */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Release</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Client keys are stored and secured inside a locked cabinet to which only the managers of DSM Cleaning Solutions have access.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                In the event the client chooses to leave a door unlocked or place a key under a mat or any other unsecured location, DSM Cleaning Solutions will not be held liable for any damages or theft to the client&apos;s home.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At termination of services, or upon request, DSM Cleaning Solutions shall return any client key(s) in its possession no later than <strong>48 hours</strong> after termination of services or the next business day.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Non-Solicitation */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Non-Solicitation of DSM Cleaning Solutions Employees</h2>
              <p className="text-gray-600 leading-relaxed">
                As our customer, we ask that you agree not to solicit or hire any of our cleaning employees to work directly for you. Our professional cleaners are background checked, their references verified, and they have completed comprehensive cleaning training. Significant time, resources, and investment go into each team member before we allow them to enter our customers&apos; homes.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            {/* Governing Law */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Any claim relating to DSM Cleaning Solutions and its website shall be governed by the laws of the <strong>State of Illinois</strong> without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We have taken every effort to design our website to be useful, informative, helpful, and honest. If you would like to see improvements or changes, please contact us — we welcome your feedback.
              </p>
              <p className="text-gray-600 leading-relaxed">
                DSM Cleaning Solutions reserves the right to change these Terms &amp; Conditions at any time without prior notice.
              </p>
            </div>

            <p className="text-sm text-gray-400 mt-8">© 2025 DSM Cleaning Solutions. All rights reserved.</p>

          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">Questions about our policies? Give us a call — we&apos;re happy to help.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+18152462113" className="btn-primary">(815) 246-2113</a>
            <Link href="/privacy-policy" className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-2xl hover:border-orange-500 hover:text-orange-500 transition-colors">
              Read Our Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
