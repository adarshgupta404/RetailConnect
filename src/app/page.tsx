import { Header } from '@/components/Landing/header';
import { Hero } from '@/components/Landing/hero';
import { Features } from '@/components/Landing/features';
import { Benefits } from '@/components/Landing/benefits';
import { Testimonials } from '@/components/Landing/testimonials';
import { Cta } from '@/components/Landing/cta';
import { Footer } from '@/components/Landing/footer';

export default function LandingPage() {
  return (
    <div className='flex h-dvh flex-col overflow-y-auto dark:bg-gray-900 dark:text-gray-100'>
      <Header />
      <main className='flex-grow'>
        <Hero />
        <Features />
        <Benefits />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
