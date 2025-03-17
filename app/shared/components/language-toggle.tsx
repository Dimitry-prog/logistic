'use client';

import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Button } from '@ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@ui/dropdown-menu';

export function LanguageToggle() {
  const { i18n, t } = useTranslation();

  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{t('language.toggle')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage('en')}>{t('language.en')}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('ru')}>{t('language.ru')}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
