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

  // Check if the path already starts with a locale
  if (locales.some((loc) => pathname.startsWith(`/${loc}/`))) {
    return NextResponse.next(); // Let Nextra handle the route
  }
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // Match all paths except excluded ones
};