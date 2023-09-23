import { createI18nMiddleware } from 'next-international/middleware';
import { NextRequest } from 'next/server';

const locales = ['en', 'pt'] as const;
const defaultLocale = 'en';

const I18nMiddleware = createI18nMiddleware(locales, defaultLocale);

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: [
    '/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt|cms-studio).*)',
  ],
};
