import React from 'react';
import { Button } from './ui/button';
import { NavigationMenu, NavigationMenuLink, NavigationMenuItem, NavigationMenuList } from './ui/navigation-menu';
import Link from 'next/link';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Drawer, DrawerClose, DrawerContent, DrawerTitle, DrawerTrigger } from './ui/drawer';
import { CrossIcon, MenuIcon, XIcon } from 'lucide-react';

const Navbar = () => {

  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <div className='mx-auto max-w-7xl'>
        <div className='flex justify-between items-center p-4'>
          {/* Logo */}
          <div>
            <h2 className='text-2xl font-extrabold'>VITeach</h2>
          </div>

          {/* Navigation Links */}
          <div className='relative'>
            <NavigationMenu>
              <NavigationMenuList>
                {/* Blogs */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/blogs">Blogs</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Content */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/content">Content</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Our Story */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/story">
                      Our Story
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Tales */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/viteacher-tales">VITeacher Tales</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Buttons */}
          <div className='flex gap-x-2'>
            <Button variant="outline">Login</Button>
            <Button variant="default">Sign up</Button>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className='flex justify-between items-center p-4'>
        <div>
          <h2 className='text-2xl font-extrabold'>VITeach</h2>
        </div>
        
        <Drawer direction='right'>
          <DrawerTrigger>
            <MenuIcon/>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerClose className='absolute top-4 right-4' asChild>
              <XIcon />
            </DrawerClose>
            <DrawerTitle>
              <h2 className='text-2xl font-extrabold p-4'>Menu</h2>
            </DrawerTitle>
            <div className='flex flex-col gap-y-2 m-5 text-lg'>
              <Link href="/blogs">Blogs</Link>
              <Link href="/content">Content</Link>
              <Link href="/story">Our Story</Link>
              <Link href="/viteacher-tales">VITeacher Tales</Link>
              <Button variant="outline">Login</Button>
              <Button variant="default">Sign up</Button>
            </div>

          </DrawerContent>
        </Drawer>

      </div>
    )
  }


}

export default Navbar