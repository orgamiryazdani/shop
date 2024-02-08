"use client"
import '../../globals.css'
import Features from '@/components/Features'
import Menu from '@/components/Menu'
import Providers from './../../Providers'
import { Toaster } from 'react-hot-toast'
import { DarkModeProvider } from '@/context/DarkModeContext'
import { CartProvider } from '@/context/CartContext'
import { LanguageProvider } from '@/context/LanaguageContext'
import "../../../utils/i18n.js"

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl" class="dark-mode">
      <body>
        <Providers>
          <LanguageProvider>
            <CartProvider>
              <DarkModeProvider>
                <Toaster />
                <div className="grid grid-cols-12 bg-secondary-100 text-white h-[100vh] grid-rows-8">
                  <div className="col-span-11 row-span-1">
                    سبد خرید
                  </div>
                  <div className="col-span-1 row-span-8">
                    <Features />
                  </div>
                  <div className="col-span-1 row-span-7 flex justify-center items-center">
                    <Menu />
                  </div>
                  <div className="col-span-10 row-span-7">
                    {children}
                  </div>
                </div>
              </DarkModeProvider>
            </CartProvider>
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  )
}