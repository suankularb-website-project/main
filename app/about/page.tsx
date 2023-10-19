"use client"

import Image from "next/image";
import Link from "next/link";
import { Menu } from "antd";
import { useRouter, usePathname } from "next/navigation";

export default function About() {
    const router = useRouter();
    router.replace("/about/facts/general-info")
    return (
        <main className="flex flex-col items-center justify-between top-0 pt-10 xxs:pt-0">
            <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center justify-center py-10 px-10 gap-2" id="content">
                
            </div>
        </main>
    )
}
