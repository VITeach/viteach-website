"use client"
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import * as motion from "motion/react-client";
import React from 'react'

const Root = () => {
  return (
    <div>
      <Navbar />
    <div className='flex flex-col items-center justify-center'>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='m-10 flex flex-col items-center justify-center gap-y-2'>
          Can you click on this button ?
          <Button onClick={() => {
            alert("You clicked the button")
          }}>Click me</Button>
        </div>
      </motion.div>
    </div>
    </div>
  )
}

export default Root