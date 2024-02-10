"use client"
import Providers from '@/app/Providers'
import '../../globals.css'
import { DarkModeProvider } from '@/context/DarkModeContext'
import { Toaster } from 'react-hot-toast'
import { LanguageProvider } from '@/context/LanguageContext'
import "../../../utils/i18n"

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl" class="dark-mode">
      <body>
        <LanguageProvider>
          <DarkModeProvider>
            <Providers>
              <Toaster />
              {children}
            </Providers>
          </DarkModeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
