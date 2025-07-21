import '../styles/globals.css';
import { NextIntlClientProvider } from 'next-intl';

export default function Nextra({ Component, pageProps, router }) {
  const locale = router.locale || 'en';
  const messages = require(`../messages/${locale}.json`);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}