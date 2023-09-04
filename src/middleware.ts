import { createI18nMiddleware } from 'next-international/middleware';
import { NextRequest } from 'next/server';

const locales = ['en', 'pt'] as const;
const defaultLocale = 'en';
//
// // Get the preferred locale, similar to above or using a library
// function getLocale(request: NextRequest) {
//   const { headers } = request;
//   const languages = new Negotiator({
//     headers: Object.fromEntries(headers.entries()),
//   }).languages();
//
//   return match(languages, locales, defaultLocale);
// }
//
// export function middleware(request: NextRequest) {
//   // Check if there is any supported locale in the pathname
//   const pathname = request.nextUrl.pathname;
//   const pathnameIsMissingLocale = locales.every(
//     locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
//   );
//
//   // Redirect if there is no locale
//   if (pathnameIsMissingLocale) {
//     const locale = getLocale(request);
//
//     // e.g. incoming request is /products
//     // The new URL is now /en-US/products
//     return NextResponse.redirect(
//       new URL(`/${locale}/${pathname}`, request.url),
//     );
//   }
// }

// export const config = {
//   matcher: [
//     // Skip all internal paths (_next)
//     '/((?!_next).*)',
//     // Optional: only run on root (/) URL
//     // '/'
//   ],
// };

const I18nMiddleware = createI18nMiddleware(locales, defaultLocale);

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
};
