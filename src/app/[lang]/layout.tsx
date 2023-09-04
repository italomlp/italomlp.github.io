import { Header } from '@/components/header';
import { ThemeProvider } from '@/providers/theme';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class">
      <Header />
      {children}
    </ThemeProvider>
  );
}
