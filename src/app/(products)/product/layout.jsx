"use client"
import Loading from '@/common/Loading'
import '../../globals.css'
import { Suspense } from 'react'
import { DarkModeProvider } from '@/context/DarkModeContext'
import { CartProvider } from '@/context/CartContext'
import { LanguageProvider } from '@/context/LanaguageContext'
import "../../../utils/i18n"

export default function RootLayout({ children }) {
    return (
        <html lang="en" class="dark-mode">
            <body>
                <LanguageProvider>
                    <CartProvider>
                        <Suspense fallback={<Loading />}>
                            <DarkModeProvider />
                        </Suspense>
                        <div className="w-[100vw] h-[100vh] bg-blue-500">
                            {children}
                        </div>
                    </CartProvider>
                </LanguageProvider>
            </body>
        </html>
    )
}
