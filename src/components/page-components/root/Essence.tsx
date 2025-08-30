import React from 'react';
import SlidingImg from '@/components/SlidingImg';
import { images } from '@/constants/essence-images';

const Essence = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-6 sm:gap-y-8 lg:gap-y-12 py-6 px-4 sm:py-10 sm:px-8 md:px-16 lg:px-20 xl:px-24">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-900 text-center px-2 sm:px-4">
        Our Essence
      </h2>
      <div className="w-full max-w-7xl">
        <SlidingImg images={images} />
      </div>
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 text-center text-gray-800 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed">
        At VITeach, our essence lies in the belief that education is the
        foundation for true empowerment — not just academic learning, but the
        growth of confident, compassionate individuals. Since 2013, we&apos;ve
        evolved from teaching conversational English in a single school to
        driving interactive learning and digital outreach across communities.
        United by a shared vision of equal opportunity, our diverse team —
        spanning engineering, law, management, and more — works to bridge gaps
        in access, nurture young minds, and create an environment where every
        child can grow freely, like a seed given the right light, water, love,
        and care. We teach to inspire, connect to uplift, and spread love to
        remind every child that they are seen, heard, and capable of shaping
        their world.
      </div>
    </div>
  );
};

export default Essence;
