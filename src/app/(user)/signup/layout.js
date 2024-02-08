"use client"
import Image from 'next/image'
import '../../globals.css'
import image from "../../../../public/images/loginImg.png"
import { FaArrowRightLong } from 'react-icons/fa6'
import Link from 'next/link'
import Providers from '@/app/Providers'
import { Toaster } from 'react-hot-toast'
import { DarkModeProvider } from '@/context/DarkModeContext'
import { LanguageProvider } from '@/context/LanaguageContext'
import "../../../utils/i18n"
import { useTranslation } from 'react-i18next'

export default function RootLayout({ children }) {
  const { t } = useTranslation();

  return (
    <html lang="en" class="dark-mode">
      <body>
        <LanguageProvider>
          <DarkModeProvider>
            <Providers>
              <Toaster />
              <div className='flex w-full h-full bg-secondary-200'>
                <div className='w-2/6 flex items-center flex-col'>
                  <div className='w-full h-48 flex items-start justify-around flex-col px-5'>
                    <Link href='/products'>
                      <FaArrowRightLong className='text-secondary-0 text-2xl' />
                    </Link>
                    <div className='w-full flex flex-col items-center'>
                      <p className='text-5xl text-secondary-0 font-bold'>{t('loginPage.welcome')}</p>
                      <p className='text-secondary-700 mt-2'>{t('loginPage.enterInfo')}</p>
                    </div>
                  </div>
                  {children}
                </div>
                <div className='w-4/6 flex justify-end'>
                  <Image src={image} width={855} height={300} alt='test' />
                </div>
              </div>
            </Providers>
          </DarkModeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
