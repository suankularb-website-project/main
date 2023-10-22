"use client"

import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="relative w-full bg-gray-700 bottom-0 inset-x-0 end-0 justify-center">
            <div className="container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col sm:flex-row px-5 md:px-20 py-10">
                <div className="float-left">
                    <h1 className="text-xl xxs:text-2xl md:text-3xl font-bold">โรงเรียนสวนกุหลาบวิทยาลัย</h1>
                    <h1 className="text-md xxs:text-lg md:text-xl text-gray-300">เลขที่ 88 ถนนตรีเพชร แขวงวังบูรพาภิรมย์ เขตพระนคร<br />กรุงเทพมหานคร 10200</h1>
                </div>
                <div className="flex-auto"></div>
                <div className="text-lg md:text-xl float-right text-end flex flex-col">
                    <Link href="/">หน้าหลัก</Link>
                    <Link href="/news">ข่าวสาร</Link>
                    <Link href="/gallery">คลังรูปภาพ</Link>
                    <Link href="/downloads">ดาวน์โหลด</Link>
                    <Link href="/links">ลิงก์</Link>
                    <Link href="/about">เกี่ยวกับโรงเรียน</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;