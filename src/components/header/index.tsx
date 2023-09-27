import { MobileSheetProvider } from '@/components/header/mobile-sheet-context';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { Separator } from '@/components/ui';
import { getCurrentLocale, getScopedI18n } from '@/locales/server';

import { LocaleSwitcher } from './locale-switcher';
import { MobileSheet } from './mobile-sheet';
import { Nav } from './nav';

const LINKS = [
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'portfolio', href: '#portfolio' },
] as const;

export async function Header() {
  const scopedT = await getScopedI18n('header');
  const links = LINKS.map(link => ({ ...link, label: scopedT(link.key) }));
  const locale = getCurrentLocale();

  const switcherButtons = (
    <div className="flex content-center gap-2 justify-end">
      <LocaleSwitcher
        currentLocale={locale}
        changeLanguageLabel={scopedT('changeLang')}
      />
      <ThemeSwitcher />
    </div>
  );

  const navLinks = (isVertical?: boolean) => (
    <Nav links={links} vertical={isVertical} />
  );

  return (
    <MobileSheetProvider>
      <div className="py-4">
        <div className="justify-between hidden sm:flex">
          {navLinks()}
          {switcherButtons}
        </div>
        <MobileSheet
          openMenuTextSR={scopedT('openMenuTextSR')}
          closeMenuTextSR={scopedT('closeMenuTextSR')}
          header={switcherButtons}
          content={navLinks(true)}
        ></MobileSheet>
      </div>
      <Separator className="hidden sm:block" />
    </MobileSheetProvider>
  );
}
