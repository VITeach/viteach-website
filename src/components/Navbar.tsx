import React from 'react';
import NavMenu from './NavMenu';
import { Button } from './ui/button';

// could just take into props like isMobile, and then return apt components

const Navbar = () => {
  return (
    <div className='mx-auto max-w-7xl'>
      <div className='flex justify-between items-center p-4'>
        {/* Logo */}
        <div>
          <h2 className='text-2xl font-extrabold'>VITeach</h2>
        </div>

        {/* Navigation Links */}
        <NavMenu isMobile={false} />

        {/* Buttons */}
        <div className='flex gap-x-2'>
          <Button variant="outline">Login</Button>
          <Button variant="default">Sign up</Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar