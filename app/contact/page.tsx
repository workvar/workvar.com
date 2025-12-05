import Section from '@/components/general/Section';
import ContactHeader from '@/components/Contact/ContactHeader';
import ContactForm from '@/components/Contact/ContactForm';

export default function Contact() {
  return (
    <>
      <ContactHeader />
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-stone-50 p-8 md:p-16 rounded-[2rem] shadow-xl shadow-stone-200/50 border border-stone-100 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage:
                  'url("https://www.transparenttextures.com/patterns/cream-paper.png")',
              }}
            ></div>
            <ContactForm />
          </div>

          <div className="mt-16 text-center text-stone-500 font-serif italic">
            <p>
              Or send a digital whisper to{' '}
              <a
                href="mailto:hello@workvar.com"
                className="text-forest-800 underline decoration-forest-200 underline-offset-4 hover:decoration-forest-800 transition-all"
              >
                hello@workvar.com
              </a>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}


