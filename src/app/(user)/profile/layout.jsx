"use client"
import Providers from '@/app/Providers'
import '../../globals.css'
import { Toaster } from 'react-hot-toast'
import { useTranslation } from 'react-i18next';

export default function RootLayout({ children }) {
  const { t } = useTranslation();

  return (
    <html className="dark-mode">
      <head>
        <title>{t('profile')}</title>
        <link rel="icon" href="/images/logo.png" type="image/png" sizes="32x32" />
      </head>
      <body>
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  )
}
