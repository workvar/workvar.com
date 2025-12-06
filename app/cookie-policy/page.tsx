import Link from 'next/link';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="w-full pt-32 pb-12 bg-stone-50 border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-stone-600 hover:text-stone-900 mb-8 transition-colors text-sm font-serif"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
            Cookie Policy
          </h1>
          <p className="text-stone-500 font-serif italic">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none font-serif">
            <div className="space-y-8 text-stone-700 leading-relaxed">
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">What Are Cookies?</h2>
                <p>
                  Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
                <p>
                  At WorkVar, we use cookies and similar technologies to improve your experience, understand how our products are used, and enhance product performance. We are committed to transparency about our use of these technologies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">How We Use Cookies</h2>
                <p>We use cookies for the following purposes:</p>

                <h3 className="text-xl font-serif font-semibold text-stone-900 mb-3 mt-6">Essential Cookies</h3>
                <p>
                  These cookies are necessary for our website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies as they are essential for the website to work.
                </p>

                <h3 className="text-xl font-serif font-semibold text-stone-900 mb-3 mt-6">Analytics and Performance Cookies</h3>
                <p>
                  We use these cookies to understand how visitors interact with our website and products. This helps us:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Identify and fix technical issues</li>
                  <li>Improve product performance and user experience</li>
                  <li>Understand which features are most useful</li>
                  <li>Optimize our website&apos;s functionality</li>
                </ul>
                <p className="mt-4">
                  <strong>We use this data solely to improve our products and services. We do not sell this information to third parties.</strong>
                </p>

                <h3 className="text-xl font-serif font-semibold text-stone-900 mb-3 mt-6">Preference Cookies</h3>
                <p>
                  These cookies allow our website to remember information about your preferences (such as language settings) to provide you with a more personalized experience.
                </p>

                <h3 className="text-xl font-serif font-semibold text-stone-900 mb-3 mt-6">Recommendation Cookies</h3>
                <p>
                  We use cookies to provide personalized recommendations and suggestions that help you work more effectively. This includes suggesting features, content, or tools that may be relevant to your workflow.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Third-Party Cookies</h2>
                <p>
                  Some cookies are placed by third-party services that appear on our website. These may include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Analytics Providers:</strong> We may use analytics services to understand how our website is used. These services use cookies to collect information about your use of our website.</li>
                  <li><strong>Content Delivery Networks:</strong> To ensure fast loading times, we may use content delivery networks that set cookies.</li>
                </ul>
                <p className="mt-4">
                  We carefully select third-party partners who share our commitment to privacy. We do not allow third parties to use cookies for advertising or marketing purposes unrelated to improving our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Managing Cookies</h2>
                <p>
                  You have control over cookies. Most web browsers allow you to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>See what cookies you have and delete them individually</li>
                  <li>Block third-party cookies</li>
                  <li>Block cookies from particular sites</li>
                  <li>Block all cookies</li>
                  <li>Delete all cookies when you close your browser</li>
                </ul>
                <p className="mt-4">
                  Please note that if you choose to block or delete cookies, some features of our website may not function properly.
                </p>
                <p className="mt-4">
                  For more information about managing cookies in your browser, please visit:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-forest-800 hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-forest-800 hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-forest-800 hover:underline">Safari</a></li>
                  <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-forest-800 hover:underline">Microsoft Edge</a></li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Do Not Track Signals</h2>
                <p>
                  Some browsers include a &quot;Do Not Track&quot; (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, there is no standard for how DNT signals should be interpreted. We do not currently respond to DNT signals, but we respect your privacy choices through our cookie management options.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Local Storage and Similar Technologies</h2>
                <p>
                  In addition to cookies, we may use other local storage technologies such as:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Local Storage:</strong> Stored on your device to remember preferences and settings</li>
                  <li><strong>Session Storage:</strong> Temporary storage that is cleared when you close your browser</li>
                  <li><strong>Web Beacons:</strong> Small images embedded in web pages or emails to track engagement</li>
                </ul>
                <p className="mt-4">
                  These technologies serve similar purposes to cookies and are used to improve your experience and our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Our Commitment</h2>
                <p>
                  At WorkVar, we believe your attention is your most valuable resource. We use cookies and similar technologies to improve our products and provide you with better recommendations, but we never sell your data to third parties. Your privacy and control over your information are fundamental to our mission.
                </p>
                <p>
                  Many of our products are designed to store data locally on your device, giving you complete control. When we do use cookies or collect data, it&apos;s always with the goal of making our products better for you.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Changes to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Contact Us</h2>
                <p>
                  If you have questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <p className="mt-4">
                  <strong>WorkVar Pvt. Ltd.</strong><br />
                  Email: <a href="mailto:contact@workvar.com" className="text-forest-800 hover:underline">contact@workvar.com</a><br />
                  Website: <Link href="/contact" className="text-forest-800 hover:underline">Contact Us</Link>
                </p>
                <p className="mt-4">
                  For more information about our data practices, please see our <Link href="/privacy-policy" className="text-forest-800 hover:underline">Privacy Policy</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

