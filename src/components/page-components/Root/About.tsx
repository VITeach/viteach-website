import React from 'react'
import { Carousel } from '@/components/ui/carousel';
const About = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-y-5 p-20'>
      <h2 className='text-3xl font-bold text-red-900 text-center'>About</h2>
      <div className='text-center text-gray-800'>
        VITeach is a non-profit organization founded and run by a group of motivated students from Vellore Institute of Technology, Chennai, who are driven by the passion for change. With an assortment of 161 active members, the club has been able to directly impact the lives of over 4,83,400 students along the years.
      </div>
      <Carousel>
        {/* TODO: Add the carousel items */}
      </Carousel>
    </div>
  )
}

export default About