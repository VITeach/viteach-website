import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import React from 'react'
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import * as motion from "motion/react-client";

// TODO: Make this responsive

const Hero = () => {
  const router = useRouter()
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='flex items-center justify-between p-20'>
      <div className='flex flex-col items-start justify-center gap-y-5'>
        <div className='text-4xl font-bold text-red-900'>
          Light a spark and ignite a fire
        </div>
        <div className='text-2xl flex items-center gap-x-2'>
          <span className='font-light'>We</span>
          <span className='text-2xl font-bold text-red-900'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('teach')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('inspire')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('change lives')
                  .pauseFor(1000)
                  .start()
              }}
              options={{
                loop: true,
                delay: 100,
                autoStart: true,
              }}
            />
          </span>
        </div>
        <div className='max-w-md text-gray-800'>
          Celebrating 10+ years of inspiring students, sharing knowledge, and making learning fun. Dive into stories, meet our mentors, and be part of our legacy.
        </div>
        <div>
          <Button onClick={() => {
            router.push('/story')
          }}>
            Learn more
          </Button>
        </div>
      </div>
      <div className='p-20 rounded-full'>
        <Image src="book-lover.svg" alt="Hero" width={250} height={250} />
      </div>

    </motion.div>
  )
}

export default Hero