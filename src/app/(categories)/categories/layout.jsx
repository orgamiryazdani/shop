"use client"
import '../../globals.css'
import Features from '@/components/Features'
import Menu from '@/components/Menu'
import Providers from './../../Providers'
import { Toaster } from 'react-hot-toast'
import { DarkModeProvider } from '@/context/DarkModeContext'
import { Suspense } from 'react'
import Loading from '@/common/Loading'
import { CartProvider } from '@/context/CartContext'
import { LanguageProvider } from '@/context/LanguageContext'
import "../../../utils/i18n"
import logo from "../../../../public/images/logo.png"
import Image from "next/image";

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl" class="dark-mode">
      <body>
        <Providers>
          <LanguageProvider>
            <Toaster />
            <div className="grid grid-cols-12 bg-secondary-100 text-white h-[100vh] grid-rows-8">
              <Suspense fallback={<Loading />}>
                <DarkModeProvider>
                  <CartProvider>
                    <div className="col-span-11 row-span-1 flex items-center justify-start">
                      <div className="w-44 h-20 pt-5 pr-9 flex items-center justify-center">
                        <Image src={logo} width={115} />
                      </div>
                      <span className='w-full h-full pt-4 text-xl flex items-center justify-center'>
                        دسته بندی مورد نظر خود را انتخاب کنید
                      </span>
                    </div>
                    <div className="col-span-1 row-span-8">
                      <Features />
                    </div>
                    <div className="col-span-1 row-span-7 flex justify-center items-center">
                      <Menu />
                    </div>
                  </CartProvider>
                </DarkModeProvider>
              </Suspense>
              <div className="col-span-10 row-span-7 pt-5">
                {children}
              </div>
            </div>
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  )
}