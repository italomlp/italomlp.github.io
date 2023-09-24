import { Header } from '@/components/header';
import { TooltipProvider } from '@/components/ui';
import { ThemeProvider } from '@/providers/theme';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class">
      <TooltipProvider>
        <div className="container px-8">
          <Header />
          {children}
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}
