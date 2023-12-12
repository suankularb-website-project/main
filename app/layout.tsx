import React from 'react';
import { ConfigProvider, theme } from 'antd';

import StyledComponentsRegistry from '@/lib/AntdRegistry';
import Navbar from '@/components/header';
import Footer from '@/components/footer';
import './globals.css'
import themed from '@/theme/themeConfig';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { IBM_Plex_Sans_Thai } from "next/font/google";

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
    subsets: ["latin", "thai"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
    title: 'โรงเรียนสวนกุหลาบวิทยาลัย',
    description: 'Suankularb Wittayalai School',
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
    <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body className={`${ibmPlexSansThai.className} bg-black flex flex-col`}>
            <StyledComponentsRegistry>
                <ConfigProvider
                    theme={themed}
                >
                    <Navbar />
                    {children}
                    <Footer />
                </ConfigProvider>
            </StyledComponentsRegistry>
            <Analytics />
            <SpeedInsights />
        </body>
    </html>
);

export default RootLayout;