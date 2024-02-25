import Providers from '../Providers'
import '../globals.css'

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark-mode">
            <head>
                <link rel="icon" href="/images/logo.png" type="image/png" sizes="32x32" />
            </head>
            <body className="bg-secondary-100 flex justify-center">
                <Providers>
                    <div className="w-[100vw] h-[100vh] max-w-[1400px]">
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    )
}
