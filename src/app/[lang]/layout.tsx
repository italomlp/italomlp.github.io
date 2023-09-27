import { Header } from '@/components/header';
import { TooltipProvider } from '@/components/ui';
import { ThemeProvider } from '@/providers/theme';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pt' }];
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body>
        <ThemeProvider attribute="class">
          <TooltipProvider>
            <div className="container px-8">
              <Header />
              {children}
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
