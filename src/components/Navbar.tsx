import React from 'react';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuList,
} from './ui/navigation-menu';
import Link from 'next/link';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer';
import { MenuIcon, XIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="mx-auto max-w-7xl max-md:hidden">
        <div className="flex justify-between items-center p-4">
          {/* Logo */}
          <div>
            <Link href="/">
              <h2 className="text-2xl font-extrabold text-red-900">VITeach</h2>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="relative">
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
                    <Link href="/story">Our Story</Link>
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
          <div className="flex gap-x-2">
            <Button variant="outline">Login</Button>
            <Button variant="default">Join our community</Button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center p-4 border-b border-gray-200 md:hidden">
        <div>
          <h2 className="text-2xl font-extrabold text-red-900">VITeach</h2>
        </div>

        <Drawer direction="right">
          <DrawerTrigger>
            <MenuIcon />
          </DrawerTrigger>
          <DrawerContent className="bg-white/80 backdrop-blur-md">
            <div className="flex justify-between items-center p-4">
              <DrawerClose className="absolute top-4 right-4" asChild>
                <XIcon />
              </DrawerClose>
              <DrawerTitle className="text-2xl font-extrabold">
                Menu
              </DrawerTitle>
            </div>
            <div className="flex flex-col gap-y-2 m-5 text-lg">
              <Link href="/blogs">Blogs</Link>
              <Link href="/content">Content</Link>
              <Link href="/story">Our Story</Link>
              <Link href="/viteacher-tales">VITeacher Tales</Link>
              <Button variant="outline">Login</Button>
              <Button variant="default">Join our community</Button>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
