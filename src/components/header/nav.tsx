'use client';

import { Home } from 'lucide-react';
import Link from 'next/link';

import { useMobileSheet } from '@/components/header/mobile-sheet-context';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui';
import { cn } from '@/helpers/utils';

type Props = {
  links: {
    key: string;
    href: string;
    label: string;
  }[];
  vertical?: boolean;
};

export function Nav({ links, vertical }: Props) {
  const { close } = useMobileSheet();

  const onClickLink = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    const elem = document.querySelector(`#${targetId}`);

    close();
    setTimeout(() => {
      window.scrollTo({
        top: elem?.getBoundingClientRect()?.top,
        behavior: 'smooth',
      });
    }, 500);
  };

  return (
    <NavigationMenu
      className={cn(vertical ? 'w-full max-w-full [&>*]:w-full' : '')}
    >
      <NavigationMenuList
        className={cn(vertical ? 'flex-col justify-normal [&>*]:w-full' : '')}
      >
        <NavigationMenuItem onClick={close}>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
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
                onClick={onClickLink}
                className={cn(
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
