import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import About from '@/components/page-components/Root/About';
import Essence from '@/components/page-components/Root/Essence';
import Hero from '@/components/page-components/Root/Hero';
import Showcase from '@/components/page-components/Root/Showcase';

// Well, respectfully, future me, REMEMBER THE FUCKING PADDING AND THE FUCKING 5PY PADDING

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="py-5">
        <div className="mx-auto max-w-6xl">
          <Hero />
        </div>
      </div>

      <div className="bg-red-50 py-5">
        <div className="mx-auto max-w-6xl">
          <About />
        </div>
      </div>

      <div className="py-5">
        <div className="mx-auto max-w-6xl">
          <Essence />
        </div>
      </div>

      <div className="py-5 bg-red-50">
        <div className="mx-auto max-w-6xl">
          <Showcase />
        </div>
      </div>

      <div className="py-5">
        <div className="mx-auto max-w-6xl">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Root;
