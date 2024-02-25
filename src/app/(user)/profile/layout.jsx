"use client"
import Providers from '@/app/Providers'
import '../../globals.css'
import { Toaster } from 'react-hot-toast'
import { useTranslation } from 'react-i18next';

export default function RootLayout({ children }) {
  const { t } = useTranslation();
  
  return (
    <html className="dark-mode">
      <title>{t('profile')}</title>
      <body>
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  )
}
