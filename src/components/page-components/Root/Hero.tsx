import Image from 'next/image';
import React from 'react';
import * as motion from 'motion/react-client';
import CustomButton from '@/components/CustomButton';
import CustomTypewriter from '@/components/CustomTypewriter';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col lg:flex-row items-center justify-between px-5 sm:px-10 lg:px-20 xl:pb-10 pt-20 gap-8 lg:gap-0"
    >
      <div className="flex flex-col items-center lg:items-start justify-center gap-y-5 text-center lg:text-left">
        <motion.div
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-red-900"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Light a spark, ignite a fire.
        </motion.div>
        <div className="text-xl sm:text-2xl flex items-center gap-x-2 justify-center lg:justify-start">
          <span className="font-light">We</span>
          <span className="text-xl sm:text-2xl font-bold text-red-900">
            <CustomTypewriter
              strings={['teach!', 'inspire!', 'change lives!']}
            />
          </span>
        </div>

        <Image
          src="book-lover.svg"
          alt="Hero"
          width={200}
          height={200}
          className="w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 lg:hidden"
        />

        <div className="max-w-md text-gray-800 text-sm sm:text-base">
          Celebrating 10+ years of inspiring students, sharing knowledge, and
          making learning fun. Dive into stories, meet our mentors, and be part
          of our legacy.
        </div>

        <div className="flex flex-row items-center gap-y-2 sm:gap-y-0 gap-x-2">
          <CustomButton
            text="Digital Library"
            onClickRoute="/story"
            variant="outline"
            className="w-full sm:w-auto"
          />

          <CustomButton
            text="Learn more"
            onClickRoute="/story"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: 'spring',
          stiffness: 5,
          damping: 10,
        }}
        whileHover={{ scale: 1.2 }}
        className="p-10 sm:p-16 lg:p-20 rounded-full"
      >
        <Image
          src="book-lover.svg"
          alt="Hero"
          width={200}
          height={200}
          className="w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 max-lg:hidden"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
