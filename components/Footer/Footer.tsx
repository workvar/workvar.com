import FooterLinks from './FooterLinks';

export default function Footer() {
  const productLinks = [
    { label: 'SileoTube', href: '#', isExternal: true },
    { label: 'ProjeX', href: '#', isExternal: true },
    { label: 'DeepWriter', href: '#', isExternal: true },
    { label: 'Changelog', href: '#', isExternal: true },
  ];

  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Mission', href: '/about' },
    { label: 'Careers', href: '#', isExternal: true },
    { label: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#', isExternal: true },
    { label: 'Terms of Service', href: '#', isExternal: true },
    { label: 'Cookie Policy', href: '#', isExternal: true },
  ];

  return (
    <footer className="bg-stone-100 border-t border-stone-200 pb-12 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24">
          <div className="space-y-6">
            <span className="font-serif text-2xl font-bold text-forest-900">WorkVar.</span>
            <p className="text-stone-500 text-sm leading-relaxed">
              Reconnecting with what matters. Tools for deep work and sustainable productivity.
            </p>
          </div>

          <FooterLinks title="Product" links={productLinks} />
          <FooterLinks title="Company" links={companyLinks} />
          <FooterLinks title="Legal" links={legalLinks} />
        </div>

        <div className="mt-20 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center text-sm text-stone-400">
          <p>© 2024 WorkVar Inc. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-stone-600 transition-colors">Twitter</a>
            <a href="#" className="hover:text-stone-600 transition-colors">GitHub</a>
            <a href="#" className="hover:text-stone-600 transition-colors">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


