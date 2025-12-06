import Link from 'next/link';

export default function Terms() {
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
            Terms of Service
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
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Agreement to Terms</h2>
                <p>
                  By accessing or using WorkVar&apos;s products, services, or website, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our services.
                </p>
                <p>
                  WorkVar (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) provides productivity tools and services designed to help you reclaim your focus and achieve meaningful work. These Terms govern your use of our products and services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Use of Our Services</h2>
                <h3 className="text-xl font-serif font-semibold text-stone-900 mb-3 mt-6">Eligibility</h3>
                <p>
                  You must be at least 13 years old to use our services. By using our services, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
                </p>

                <h3 className="text-xl font-serif font-semibold text-stone-900 mb-3 mt-6">Acceptable Use</h3>
                <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit any harmful, offensive, or illegal content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the operation of our services</li>
                  <li>Use our services to spam, harass, or harm others</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Intellectual Property</h2>
                <p>
                  All content, features, and functionality of our services, including but not limited to text, graphics, logos, software, and designs, are owned by WorkVar or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  Many of our products are open source and available under specific licenses. Please refer to the individual product documentation for licensing information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">User Accounts</h2>
                <p>
                  Some of our services may require you to create an account. You are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Providing accurate and complete information</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Product Availability</h2>
                <p>
                  Many of our products are provided free of charge. We reserve the right to modify, suspend, or discontinue any product or service at any time, with or without notice. We do not guarantee that our services will be available at all times or free from errors.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Disclaimer of Warranties</h2>
                <p>
                  Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not warrant that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Our services will be uninterrupted or error-free</li>
                  <li>Defects will be corrected</li>
                  <li>Our services are free of viruses or other harmful components</li>
                  <li>The results obtained from using our services will be accurate or reliable</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, WorkVar shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Indemnification</h2>
                <p>
                  You agree to indemnify and hold harmless WorkVar, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of or relating to your use of our services or violation of these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Termination</h2>
                <p>
                  We reserve the right to terminate or suspend your access to our services immediately, without prior notice, for any reason, including but not limited to a breach of these Terms.
                </p>
                <p>
                  You may stop using our services at any time. If you have an account, you may delete it through the account settings or by contacting us.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Changes to Terms</h2>
                <p>
                  We may modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on this page and updating the &quot;Last updated&quot; date. Your continued use of our services after such changes constitutes acceptance of the updated Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which WorkVar operates, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Contact Us</h2>
                <p>
                  If you have questions about these Terms, please contact us:
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

