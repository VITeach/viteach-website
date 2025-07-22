"use client"
import Navbar from '@/components/Navbar'
import About from '@/components/page-components/Root/About';
import Essence from '@/components/page-components/Root/Essence';
import Hero from '@/components/page-components/Root/Hero';

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className='mx-auto max-w-6xl'>
        <Hero />

        <About />

        <Essence />

      </div>
    </div>
  )
}

export default Root