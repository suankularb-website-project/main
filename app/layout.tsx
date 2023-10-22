import React from 'react';
import { ConfigProvider, theme } from 'antd';

import StyledComponentsRegistry from '../lib/AntdRegistry';
import Navbar from '../components/header';
import Footer from '../components/footer';
import './globals.css'

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
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"></link>
        </head>
        <body className="bg-black flex flex-col">
            <StyledComponentsRegistry>
                <ConfigProvider
                    theme={{
                        algorithm: theme.darkAlgorithm,
                        components: {
                            Card: {
                                headerBg: "#101010",
                                colorBgContainer: "#101010",
                                colorTextHeading: "#ffffff"
                            },
                            Pagination: {
                                colorText: "#ffffff",
                                colorTextDisabled: "#ffffff"
                            },
                            Input: {
                                colorBgContainer: "#000000",
                                colorBorder: "#ffffff",
                                colorText: "#ffffff",
                                colorTextPlaceholder: "#909090"
                            },
                            Menu: {
                                itemBg: "#000000",
                                itemActiveBg: "#101010",
                                itemColor: "#ffffff",
                                itemHoverColor: "#f5f5f5",
                                subMenuItemBg: "#101010",
                                popupBg: "#000000",
                                darkSubMenuItemBg: "#101010",
                                darkItemBg: "#000000",
                                darkItemColor: "#ffffff",
                            }
                        },
                    }}
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