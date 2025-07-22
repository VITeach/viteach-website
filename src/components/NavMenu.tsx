import React from 'react';
import { 
  NavigationMenu, 
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink 
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

// Will add maybe something related to varient here as well

const NavMenu = ({ isMobile }: { isMobile: boolean }) => {

  if (isMobile) {
    return (
      <div className='flex flex-col gap-y-2'>
        <Link href="/blogs">Blogs</Link>
        <Link href="/content">Content</Link>
        <Link href="/story">Our Story</Link>
        <Link href="/viteacher-tales">VITeacher Tales</Link>
      </div>
    )
  }
  return (
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
  )
}

export default NavMenu