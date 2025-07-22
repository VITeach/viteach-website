import React from 'react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu';
import Link from 'next/link';

const NavMenu = () => {
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