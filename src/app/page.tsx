import About from '@/components/page-components/Root/About';
import Essence from '@/components/page-components/Root/Essence';
import Hero from '@/components/page-components/Root/Hero';
import Latest from '@/components/page-components/Root/Latest';
import Showcase from '@/components/page-components/Root/Showcase';

// Well, respectfully, future me, REMEMBER THE FUCKING PADDING AND THE FUCKING 5PY PADDING

const Root = () => {
  return (
    <div>
      <div className="py-6 sm:py-8 lg:py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Hero />
        </div>
      </div>

      <div className="bg-red-50 py-8 sm:py-10 lg:py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <About />
        </div>
      </div>

      <div className="py-8 sm:py-10 lg:py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Essence />
        </div>
      </div>

      <div className="py-8 sm:py-10 lg:py-5 bg-red-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Showcase />
        </div>
      </div>

      <div className="py-8 sm:py-10 lg:py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Latest />
        </div>
      </div>
    </div>
  );
};

export default Root;
