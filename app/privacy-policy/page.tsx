import Link from 'next/link';

export default function PrivacyPolicy() {
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
            Privacy Policy
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
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Introduction</h2>
                <p>
                  At WorkVar, we believe your attention is your most valuable resource. We&apos;re committed to protecting your privacy and ensuring that your personal information remains secure. This Privacy Policy explains how we collect, use, and protect your information when you use our products and services.
                </p>
                <p>
                  WorkVar (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is a productivity technology company that builds tools to help you reclaim your focus and achieve meaningful work. We are committed to transparency and want you to understand how we handle your data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Information We Collect</h2>
                <h3 className="text-xl font-serif font-semibold text-stone-900 mb-3 mt-6">Information You Provide</h3>
                <p>
                  When you use our services, you may provide us with information such as:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact information (name, email address) when you subscribe to our newsletter or contact us</li>
                  <li>Account information if you create an account with our products</li>
                  <li>Feedback, questions, or communications you send to us</li>
                </ul>

                <h3 className="text-xl font-serif font-semibold text-stone-900 mb-3 mt-6">Automatically Collected Information</h3>
                <p>
                  When you use our products, we may automatically collect certain information to improve product performance and provide recommendations:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Usage data and analytics to understand how our products are used</li>
                  <li>Performance metrics to identify and fix issues</li>
                  <li>Device information (browser type, operating system) for compatibility purposes</li>
                  <li>Cookies and similar tracking technologies (see our <Link href="/cookie-policy" className="text-forest-800 hover:underline">Cookie Policy</Link> for details)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Improve Product Performance:</strong> Analyze usage patterns to enhance functionality, fix bugs, and optimize user experience</li>
                  <li><strong>Provide Recommendations:</strong> Offer personalized suggestions and features that help you work more effectively</li>
                  <li><strong>Communicate with You:</strong> Respond to your inquiries, send important updates about our services, and provide customer support</li>
                  <li><strong>Ensure Security:</strong> Protect against fraud, abuse, and security threats</li>
                  <li><strong>Comply with Legal Obligations:</strong> Meet legal requirements and respond to lawful requests</li>
                </ul>
                <p className="mt-4">
                  <strong>We do not sell your personal information to third parties.</strong> Your data is used solely to improve our products and services, and we never share it with third-party vendors for their marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Data Storage and Security</h2>
                <p>
                  We take data security seriously. Many of our tools store data locally on your device, giving you full control over your information. When we do store data on our servers, we implement industry-standard security measures to protect it.
                </p>
                <p>
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Your Rights and Choices</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of certain data collection practices</li>
                  <li>Unsubscribe from marketing communications</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at <a href="mailto:contact@workvar.com" className="text-forest-800 hover:underline">contact@workvar.com</a>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Third-Party Services</h2>
                <p>
                  Our products may integrate with third-party services (such as analytics providers) to help us improve our services. These services have their own privacy policies, and we encourage you to review them. We only work with trusted partners who share our commitment to privacy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Children&apos;s Privacy</h2>
                <p>
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <p className="mt-4">
                  <strong>WorkVar Pvt. Ltd.</strong><br />
                  Email: <a href="mailto:contact@workvar.com" className="text-forest-800 hover:underline">contact@workvar.com</a><br />
                  Website: <Link href="/contact" className="text-forest-800 hover:underline">Contact Us</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

