import { Header } from '@/components/header';
import { ThemeProvider } from '@/providers/theme';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class">
      <div className="container px-8">
        <Header />
        {children}
      </div>
    </ThemeProvider>
  );
}
