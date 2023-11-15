import React from 'react';
import { ConfigProvider, theme } from 'antd';

import StyledComponentsRegistry from '@/lib/AntdRegistry';
import Navbar from '@/components/header';
import Footer from '@/components/footer';
import './globals.css'
import themed from '@/theme/themeConfig';

export const metadata = {
    title: 'โรงเรียนสวนกุหลาบวิทยาลัย',
    description: 'Suankularb Wittayalai School',
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
    <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="utf-8" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
            <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body className="bg-black flex flex-col">
            <StyledComponentsRegistry>
                <ConfigProvider
                    theme={themed}
                >
                    <Navbar />
                    {children}
                    <Footer />
                </ConfigProvider>
            </StyledComponentsRegistry>
        </body>
    </html>
);

export default RootLayout;