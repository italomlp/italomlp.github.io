import { Metadata } from 'next';

import { ThemeSwitcher } from '@/components/theme-switcher';

export const metadata: Metadata = {
  title: 'Query GraphQL',
};

export default function Home() {
  return (
    <div>
      <h1 className="text-5xl font-bold underline">Hello world!</h1>
      <ThemeSwitcher />
    </div>
  );
}
