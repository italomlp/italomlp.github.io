'use client';

import { Home } from 'lucide-react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui';

type Props = {
  links: {
    key: string;
    href: string;
    label: string;
  }[];
  vertical?: boolean;
};

export function Nav({ links, vertical }: Props) {
  return (
    <NavigationMenu
      className={twMerge(vertical ? 'w-full max-w-full [&>*]:w-full' : '')}
    >
      <NavigationMenuList
        className={twMerge(
          vertical ? 'flex-col justify-normal [&>*]:w-full' : '',
        )}
      >
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={twMerge(
                navigationMenuTriggerStyle(),
                'w-full justify-start',
              )}
            >
              <Home size={15} />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {links.map(link => (
          <NavigationMenuItem key={link.key}>
            <Link href={link.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={twMerge(
                  navigationMenuTriggerStyle(),
                  'w-full justify-start',
                )}
              >
                {link.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
