"use client"

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "antd";
import {
    MenuOutlined
} from "@ant-design/icons"

const Navbar = () => {
    const pathname = usePathname();
    const [toggle, setToggle] = useState(false)
    return (
        <div className="relative w-full backdrop-blur-md bg-black/30 border-b drop-shadow-md top-0 sticky z-20">
            <nav className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg justify-center md:justify-start mx-auto sticky top-0 flex flex-row flex-wrap p-5 pb-4">
                <Link href="/" className="flex-none text-xl sm:text-2xl font-bold">โรงเรียนสวนกุหลาบวิทยาลัย</Link>
                <div className="flex-auto"></div>
                <div className={toggle ? "flex-none inline-flex grid-rows-2 float-end gap-4 mt-0.5 -ml-20 text-lg sm:text-xl text-gray-200" : "flex-none inline-flex grid-rows-2 float-end gap-4 mt-0.5 text-xl sm:text-xl text-gray-200"}>
                    <div className={toggle ? "flex flex-col lg:inline-flex grid-rows-2 text-end float-end pt-10 -mr-12 md:-mr-32": "hidden lg:flex flex-none flex lg:inline-flex grid-rows-2 float-end gap-4"}>
                        <Link href="/news?page=1" className={pathname.indexOf("/news") >= 0 ? "text-white" : "hover:text-white focus:text-white transition"}>ข่าวสาร</Link>
                        <Link href="/gallery" className={pathname.indexOf("/gallery") >= 0 ? "text-white" : "hover:text-white focus:text-white transition"}>คลังรูปภาพ</Link>
                        <Link href="/downloads" className={pathname.indexOf("/downloads") >= 0 ? "text-white" : "hover:text-white focus:text-white transition"}>ดาวน์โหลด</Link>
                        <Link href="/links" className={pathname.indexOf("/links") >= 0 ? "text-white" : "hover:text-white focus:text-white transition"}>ลิงก์</Link>
                        <Link href="/about" className={pathname.indexOf("/about") >= 0 ? "text-white" : "hover:text-white focus:text-white transition"}>เกี่ยวกับโรงเรียน</Link>
                    </div>
                    <Link href="/contact" className="hidden md:flex">
                        <Button type="primary" size="large" className="-mt-2">ติดต่อ</Button>
                    </Link>
                    <div className="hidden sm:flex lg:hidden">
                        <Button size="large" className="-mt-2" icon={<MenuOutlined />} onClick={() => setToggle(!toggle)}></Button>
                    </div>
                    <div className="flex sm:hidden">
                        <Button className="-mt-2" icon={<MenuOutlined />} onClick={() => setToggle(!toggle)}></Button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;