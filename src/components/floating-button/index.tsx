'use client';

import { useEffect, useRef, useState } from 'react';

import debounce from 'lodash.debounce';
import { ArrowUpIcon } from 'lucide-react';

import { Button } from '@/components/ui';
import { cn } from '@/helpers/utils';

type Props = {
  children: React.ReactNode;
};

export function FloatingButton({ children }: Props) {
  const [offset, setOffset] = useState(0);
  const height = useRef(1);

  useEffect(() => {
    height.current = window.innerHeight;

    const onScroll = debounce(() => setOffset(window.scrollY), 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const hide = offset < (height.current * 2) / 3;

  const onClick = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      onClick={onClick}
      variant="secondary"
      size="sm"
      className={cn(
        'fixed bottom-10 right-10 transition-all duration-300 ease-in-out flex flex-row gap-2',
        hide && 'opacity-0 h-0',
      )}
    >
      {children}
      <ArrowUpIcon size={16} />
    </Button>
  );
}
