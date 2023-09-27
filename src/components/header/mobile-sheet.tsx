'use client';

import { ReactNode } from 'react';

import * as SheetPrimitive from '@radix-ui/react-dialog';
import { Menu, X } from 'lucide-react';

import { useMobileSheet } from '@/components/header/mobile-sheet-context';
import {
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui';

type Props = {
  header: ReactNode;
  content: ReactNode;
  openMenuTextSR: string;
  closeMenuTextSR: string;
};

export function MobileSheet({
  header,
  content,
  openMenuTextSR,
  closeMenuTextSR,
}: Props) {
  const { isOpen, open, close } = useMobileSheet();

  return (
    <Sheet modal open={isOpen}>
      <SheetTrigger onClick={open} className="sm:hidden">
        <Menu />
        <span className="sr-only">{openMenuTextSR}</span>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:w-[250px]">
        <SheetHeader className="mt-6">
          <SheetTitle>{header}</SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        <SheetDescription asChild>{content}</SheetDescription>
        <SheetPrimitive.Close
          onClick={close}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">{closeMenuTextSR}</span>
        </SheetPrimitive.Close>
      </SheetContent>
    </Sheet>
  );
}
