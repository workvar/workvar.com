import Link from 'next/link';
import Image from 'next/image';

export default function MediaKit() {
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
            WorkVar brand resources and guidelines
          </h1>
          <p className="text-stone-500 font-serif text-lg leading-relaxed">
            Welcome to the WorkVar brand resource centre. WorkVar builds productivity tools and solutions like SileoTube and more. When referencing individual products, please follow their specific guidelines. For references to WorkVar, please follow the guidance on this page.
          </p>
          <p className="text-stone-400 font-serif text-sm mt-4 italic">
            Updated in 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none font-serif">
            <div className="space-y-12 text-stone-700 leading-relaxed">
              
              {/* The WorkVar logo */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
                  The WorkVar logo
                </h2>
                <p className="text-lg text-stone-600 mb-8">
                  High-level details on how to use the WorkVar logo in your marketing and media communications is included below. Please work closely with your WorkVar counterpart for detailed guidelines and approvals through the internal brand review process.
                </p>
                
                {/* Logo Display */}
                <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 mb-8">
                  <div className="flex items-center justify-center mb-6">
                    <Image 
                      src="https://ik.imagekit.io/canarygrapher/workvar/Brand%20Assets/Black-W%20Logo-Transparent_vpxZSMC3g.png" 
                      alt="WorkVar Logo" 
                      width={200} 
                      height={250}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">WorkVar</h3>
                    <div className="bg-stone-200 p-4 rounded-lg mb-4">
                      <label className="flex items-center justify-center cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm text-stone-700">I have read and accept the applicable guidelines and other terms for use.</span>
                      </label>
                    </div>
                    <button className="px-8 py-3 bg-forest-800 text-white font-serif rounded-lg hover:bg-forest-900 transition-colors">
                      Download
                    </button>
                  </div>
                </div>

                {/* When to use */}
                <div className="mt-10">
                  <h3 className="text-2xl font-serif font-semibold text-stone-900 mb-4">
                    When to use the WorkVar logo
                  </h3>
                  <ul className="list-disc pl-6 space-y-3 text-stone-600">
                    <li>Partnerships or sponsorships with a formal agreement in place with WorkVar</li>
                    <li>Newscasts and news programming</li>
                    <li>Editorials</li>
                    <li>Books, plays, talk shows, TV shows and film scripts</li>
                    <li>Print packaging</li>
                    <li>Marketing or advertising that appears on TV or online</li>
                  </ul>
                  <p className="mt-4 text-stone-600 italic">
                    Note: The WorkVar logo should not be used to represent individual products unless explicitly approved.
                  </p>
                </div>
              </div>

              {/* Colour */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
                  Colour
                </h2>
                <p className="text-lg text-stone-600 mb-6">
                  The WorkVar logo exists in multiple colour variations.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-stone-900 p-8 rounded-2xl">
                    <div className="flex items-center justify-center mb-4">
                      <Image 
                        src="https://ik.imagekit.io/canarygrapher/workvar/Brand%20Assets/Black-W%20Logo-Transparent_vpxZSMC3g.png" 
                        alt="WorkVar Logo - Black" 
                        width={150} 
                        height={188}
                        className="object-contain brightness-0 invert"
                      />
                    </div>
                    <h4 className="text-xl font-serif font-semibold text-white mb-2">Primary</h4>
                    <p className="text-stone-300 text-sm">Use a primary variation whenever possible.</p>
                  </div>
                  
                  <div className="bg-stone-100 p-8 rounded-2xl border border-stone-200">
                    <div className="flex items-center justify-center mb-4">
                      <Image 
                        src="https://ik.imagekit.io/canarygrapher/workvar/Brand%20Assets/Black-W%20Logo-Transparent_vpxZSMC3g.png" 
                        alt="WorkVar Logo - White" 
                        width={150} 
                        height={188}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="text-xl font-serif font-semibold text-stone-900 mb-2">Mono</h4>
                    <p className="text-stone-600 text-sm">Only use the mono variations in low reproduction environments when a primary variation cannot perform.</p>
                  </div>
                </div>
              </div>

              {/* Minimum size and clear space */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
                  Minimum size and clear space
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-stone-900 mb-4">
                      Minimum size
                    </h3>
                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                      <div className="flex items-center justify-center mb-4">
                        <Image 
                          src="https://ik.imagekit.io/canarygrapher/workvar/Brand%20Assets/Black-W%20Logo-Transparent_vpxZSMC3g.png" 
                          alt="WorkVar Logo - Minimum Size" 
                          width={60} 
                          height={75}
                          className="object-contain"
                        />
                      </div>
                      <p className="text-stone-600 text-center">
                        The minimum size of the WorkVar logo is defined by the height of the symbol and should never be used below <strong>12 px/5 mm</strong>.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-semibold text-stone-900 mb-4">
                      Clear space
                    </h3>
                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                      <div className="flex items-center justify-center mb-4">
                        <div className="relative">
                          <div className="absolute inset-0 border-2 border-dashed border-stone-400 rounded-lg" style={{ padding: '40px' }}></div>
                          <Image 
                            src="https://ik.imagekit.io/canarygrapher/workvar/Brand%20Assets/Black-W%20Logo-Transparent_vpxZSMC3g.png" 
                            alt="WorkVar Logo - Clear Space" 
                            width={100} 
                            height={125}
                            className="object-contain relative z-10"
                          />
                        </div>
                      </div>
                      <p className="text-stone-600 text-center">
                        The clear space of the WorkVar logo is defined by doubling the height of the symbol, which is applied equally around the edges of the logo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional brand assets */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
                  Additional brand assets
                </h2>
                <p className="text-lg text-stone-600">
                  Please visit the Newsroom for company information and approved imagery of WorkVar offices, executives and more.
                </p>
              </div>

              {/* Work with your WorkVar counterpart */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
                  Work with your WorkVar counterpart for approvals
                </h2>
                <p className="text-lg text-stone-600 mb-4">
                  All usage of the WorkVar logo requires approval. Please work closely with your WorkVar counterpart for detailed guidelines and submitting a brand review request on your behalf through the internal brand review process.
                </p>
                <p className="text-stone-600 italic">
                  Please note that we can only process requests made in English.
                </p>
                <p className="text-stone-600 mt-4">
                  Advertising appearing on our products will be reviewed by our ad policy team and does not require permission here.
                </p>
                <div className="mt-6">
                  <Link 
                    href="/contact" 
                    className="inline-block px-6 py-3 bg-forest-800 text-white font-serif rounded-lg hover:bg-forest-900 transition-colors"
                  >
                    Contact us
                  </Link>
                </div>
              </div>

              {/* Legal */}
              <div className="border-t border-stone-200 pt-8">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
                  Legal
                </h2>
                <div className="space-y-4 text-stone-600">
                  <p>
                    WorkVar dedicates substantial resources to the development and protection of its intellectual property. In addition to seeking registration of its trademarks and logos around the world, WorkVar enforces its rights against people who misuse its trademarks.
                  </p>
                  <p>
                    WorkVar&apos;s trademarks are owned by WorkVar and may only be used as provided in these guidelines or with WorkVar&apos;s permission. You may not use or register, or otherwise claim rights in any WorkVar trademark, including as or as part of any trademark, service mark, company name, trade name, username or domain registration. You should not use or claim rights in any trademark in a way that is confusingly similar to or dilutive of WorkVar&apos;s trademarks, including as, or as any part of, a trademark. Do not use WorkVar&apos;s trademarks for anything that would be inconsistent with WorkVar&apos;s Terms of Service or Community Standards.
                  </p>
                  <p>
                    We may revoke permission to use WorkVar&apos;s trademarks at any time. WorkVar reserves the right to withhold approval of content that it considers inconsistent with the WorkVar brand.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

