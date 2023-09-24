'use client';
import { twMerge } from 'tailwind-merge';

import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui';
import { useChangeLocale } from '@/locales/client';

type Props = {
  currentLocale: string;
  changeLanguageLabel: string;
};

type LanguageButtonProps = {
  language: string;
  currentLocale: string;
  changeLanguageLabel: string;
} & Omit<React.ComponentProps<typeof Button>, 'onClick' | 'children'>;

function LanguageButton({
  className,
  language,
  currentLocale,
  changeLanguageLabel,
  ...props
}: LanguageButtonProps) {
  const changeLocale = useChangeLocale();

  if (currentLocale === language) {
    return null;
  }

  return (
    <Tooltip delayDuration={300}>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={twMerge('self-center opacity-90', className)}
          onClick={() => {
            changeLocale(language as 'en' | 'pt');
          }}
          {...props}
        >
          {language.toUpperCase()}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">{changeLanguageLabel}</TooltipContent>
    </Tooltip>
  );
}

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
