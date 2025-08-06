import React from 'react';
import SlidingImg from '@/components/SlidingImg';
import { images } from '@/constants/essence-images';

const Essence = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-8 py-6 px-4 sm:py-10 sm:px-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-red-900 text-center">
        Our Essence
      </h2>
      <div className="w-full">
        <SlidingImg images={images} />
      </div>
      <div className="px-4 text-center text-gray-800">
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
