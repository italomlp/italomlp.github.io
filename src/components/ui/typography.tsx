'use client';

import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/helpers/utils';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      paragraph: 'leading-7',
      blockquote: 'border-l-2 pl-6 italic',
      link: 'leading-7 underline decoration-accent underline-offset-4 hover:italic hover:opacity-75',
      muted: 'text-sm text-muted-foreground',
    },
    fontStyle: {
      normal: '',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      semibold: 'font-semibold',
      italic: 'italic',
      boldItalic: 'font-bold italic',
      underline: 'underline',
      underlineItalic: 'underline italic',
      boldUnderline: 'font-bold underline',
      boldUnderlineItalic: 'font-bold underline italic',
      strikethrough: 'line-through',
      strikethroughItalic: 'line-through italic',
      boldStrikethrough: 'font-bold line-through',
      boldStrikethroughItalic: 'font-bold line-through italic',
    },
  },
  defaultVariants: {
    variant: 'paragraph',
    fontStyle: 'normal',
  },
});

type TypographyVariants = VariantProps<typeof typographyVariants>;

export interface TypographyProps
  extends React.ButtonHTMLAttributes<HTMLParagraphElement>,
    TypographyVariants {
  asChild?: boolean;
}

type RequiredVariants = Omit<TypographyVariants, 'variant'> &
  Required<Pick<TypographyVariants, 'variant'>>;

const variantElement: Record<
  Exclude<RequiredVariants['variant'], null>,
  React.ElementType
> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  paragraph: 'p',
  blockquote: 'p',
  link: 'p',
  muted: 'span',
};

const Typography = React.forwardRef<HTMLButtonElement, TypographyProps>(
  ({ className, variant, fontStyle, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : variantElement[variant ?? 'paragraph'];
    return (
      <Comp
        className={cn(typographyVariants({ variant, className, fontStyle }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Typography.displayName = 'Typography';

export { Typography, typographyVariants };
