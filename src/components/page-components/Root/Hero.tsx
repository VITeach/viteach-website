import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import React from 'react'

// Prolly have the maine logo, Light a spark and ignite a fire

// Some sort of typewriter effect
// - We teach, inspire (prolly add something else as well)

// Right side pr we'll have a image of a book lover

// In mobile the image will be below the text

const Hero = () => {
  return (
    <div className='flex items-center justify-between p-20'>
      <div className='flex flex-col items-start justify-center gap-y-5'>
        <div className='text-4xl font-bold'>
          Light a <span className='px-2 py-1 rounded-md'>spark</span> and ignite a fire
        </div>
        <div className='text-2xl font-bold'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('We teach')
                .pauseFor(1000)
                .deleteAll()
                .typeString('We inspire')
                .pauseFor(1000)
                .deleteAll()
                .typeString('We change lives')
                .pauseFor(1000)
                .start()
            }}
            options={{
              loop: true,
              delay: 100,
              autoStart: true,
            }}
          />
        </div>
        <div>

        </div>
      </div>
      <div>
        <Image src="book-lover.svg" alt="Hero" width={250} height={250} />
      </div>
    </div>
  )
}

export default Hero