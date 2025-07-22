'use client';
import Navbar from '@/components/Navbar';
import About from '@/components/page-components/Root/About';
import Essence from '@/components/page-components/Root/Essence';
import Hero from '@/components/page-components/Root/Hero';

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-red-50 pt-20">
        <div className="mx-auto max-w-6xl">
          <Hero />
        </div>
      </div>

      <About />

      <Essence />
    </div>
  );
};

export default Root;
