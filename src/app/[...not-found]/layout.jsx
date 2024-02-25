"use client"
import { useTranslation } from 'react-i18next';
import Providers from '../Providers'
import '../globals.css'
import { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <html lang="en" className="dark-mode">
      <title>{isClient ? t('notFoundTitle') : ""}</title>
      <body className='w-full h-full flex items-center justify-center bg-secondary-100'>
        <Providers>
          {isClient ? children : null}
        </Providers>
      </body>
    </html>
  )
}
