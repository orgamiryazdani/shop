"use client"
import Header from '@/components/Header'
import '../../globals.css'
import Features from '@/components/Features'
import Menu from '@/components/Menu'
import Providers from './../../Providers'
import { Toaster } from 'react-hot-toast'
import { DarkModeProvider } from '@/context/DarkModeContext'
import { Suspense } from 'react'
import Loading from '@/common/Loading'

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl" class="dark-mode">
      <body>
        <Providers>
          <Toaster />
          <div className="grid grid-cols-12 bg-secondary-100 text-white h-[100vh] grid-rows-8">
            <Suspense fallback={<Loading />}>
              <DarkModeProvider>
                <div className="col-span-11 row-span-1">
                    دسته بندی مورد نظر خود را انتخاب کنید
                </div>
                <div className="col-span-1 row-span-8">
                  <Features />
                </div>
                <div className="col-span-1 row-span-7 flex justify-center items-center">
                  <Menu />
                </div>
              </DarkModeProvider>
            </Suspense>
            <div className="col-span-10 row-span-7">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}