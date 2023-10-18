import { LanguageButton } from '@/components/header/language-button';

type Props = {
  currentLocale: string;
  changeLanguageLabel: string;
};

export function LocaleSwitcher({ currentLocale, changeLanguageLabel }: Props) {
  return (
    <div className="flex justify-between gap-2">
      <LanguageButton
        changeLanguageLabel={changeLanguageLabel}
        language="en"
        currentLocale={currentLocale}
      />
      <LanguageButton
        changeLanguageLabel={changeLanguageLabel}
        language="pt"
        currentLocale={currentLocale}
      />
    </div>
  );
}
