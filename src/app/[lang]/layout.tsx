import { ThemeProvider } from '@/providers/theme';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
