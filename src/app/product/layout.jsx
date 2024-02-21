import Providers from '../Providers'
import '../globals.css'

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark-mode">
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
