'use client';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import * as motion from 'motion/react-client';

// TODO: Make this responsive
// JUST REMEMBER THE FUCK THAT I HAVE TO PUT FUCKING 20PX PADDING AND 10PY PADDING

const Hero = () => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between px-20 pb-10 pt-20"
    >
      <div className="flex flex-col items-start justify-center gap-y-5">
        <motion.div
          className="text-4xl font-extrabold exrabold text-red-900"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Light a spark, ignite a fire.
        </motion.div>
        <div className="text-2xl flex items-center gap-x-2">
          <span className="font-light">We</span>
          <span className="text-2xl font-bold text-red-900">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('teach!')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('inspire!')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('change lives!')
                  .pauseFor(1000)
                  .start();
              }}
              options={{
                loop: true,
                delay: 100,
                autoStart: true,
              }}
            />
          </span>
        </div>
        <div className="max-w-md text-gray-800">
          Celebrating 10+ years of inspiring students, sharing knowledge, and
          making learning fun. Dive into stories, meet our mentors, and be part
          of our legacy.
        </div>

        <div className="flex items-center gap-x-2">
          <div>
            <Button
              variant="outline"
              onClick={() => {
                router.push('/story');
              }}
            >
              Digital Library
            </Button>
          </div>

          <div>
            <Button
              onClick={() => {
                router.push('/story');
              }}
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: 'spring',
          stiffness: 5, // adjust as needed
          damping: 10, // adjust as needed
        }}
        whileHover={{ scale: 1.2 }}
        className="p-20 rounded-full"
      >
        <Image src="book-lover.svg" alt="Hero" width={250} height={250} />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
