// middleware.js
import { NextResponse } from 'next/server';

const locales = ['en', 'zh-CN', 'zh-TW']; // Your supported locales
const defaultLocale = 'en'; // Your default locale

export function middleware(request) {
  const { pathname, search, hash } = request.nextUrl;

  // Skip API routes, _next, and static files
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.match(/\.(.*)$/)
  ) {
    return NextResponse.next();
  }

  // Determine the current locale from the pathname or default to the default locale
  let locale = locales.find((loc) => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`) || defaultLocale;

  return NextResponse.next(); // Proceed if the path already has a locale
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // Match all paths except excluded ones
};