import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google'
import NavbarDefault from '../components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Suankularb Wittayalai',
    description: 'Made with Next.js, React and Bootstrap.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="utf-8" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"></link>
            </head>
            <body className={inter.className}>
                <NavbarDefault />{children}
            </body>
        </html>
    )
}