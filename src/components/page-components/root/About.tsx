import IconCard from '@/components/IconCard';
import { cardList } from '@/constants/card-list-data';
import * as motion from 'motion/react-client';
import React from 'react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center gap-y-6 sm:gap-y-8 py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-20"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-red-900 text-center">
        About
      </h2>
      <div className="text-center text-gray-800 text-sm sm:text-base max-w-4xl mx-auto px-4">
        VITeach is a non-profit organization founded and run by a group of
        motivated students from Vellore Institute of Technology, Chennai, who
        are driven by the passion for change. With an assortment of{' '}
        <span className="font-bold text-red-900">250+</span> active members, the
        club has been able to directly impact the lives of over{' '}
        <span className="font-bold text-red-900">5 lakh</span> students along
        the years.
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-x-10 lg:gap-y-5 w-full max-w-6xl">
        {cardList.map((card) => (
          <IconCard
            key={card.key}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default About;
