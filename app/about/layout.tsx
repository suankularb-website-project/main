import React, { useEffect } from "react";
import Sidebar from "@/components/about";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col items-center justify-between top-0 xxs:pt-0">
            <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center justify-start py-0 sm:py-10 gap-2 h-[calc(100vh-71px)]" id="content">
                <div className="flex flex-col sm:flex-row gap-2 w-full">
                    <Sidebar />
                    <div className="flex flex-col gap-2 max-w-full md:w-[calc(100%-13rem)] h-[calc(100vh-10rem)] lg:overflow-auto lg:whitespace-nowrap">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}