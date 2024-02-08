"use client"
import Providers from '@/app/Providers'
import '../../globals.css'
import { DarkModeProvider } from '@/context/DarkModeContext'
import { Toaster } from 'react-hot-toast'
import { LanguageProvider } from '@/context/LanaguageContext'
import "../../../utils/i18n"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
