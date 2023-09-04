'use client';

import { ReactNode } from 'react';

import { Menu } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui';

export function MobileSheet({
  header,
  content,
}: {
  header: ReactNode;
  content: ReactNode;
}) {
  return (
    <Sheet>
      <SheetTrigger className="sm:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:w-[250px]">
        <SheetHeader className="pt-4">
          <SheetTitle>{header}</SheetTitle>
        </SheetHeader>
        <SheetDescription asChild>{content}</SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
