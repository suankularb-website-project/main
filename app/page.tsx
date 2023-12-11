"use client"

import Image from "next/image";
import Link from "next/link";
import background from "@/public/background.png";
import { Button, Form, InputNumber, Card, Carousel, message } from "antd";
import newsData from "@/config/news.json";
import TimetableForm from "@/components/timetableForm";

export default function Home() {
    const news = newsData.slice(0, 6)
    return (
        <main className="flex flex-col items-center justify-between top-0 pt-10 xxs:pt-0">
            <div className="hidden xxs:flex relative h-[calc(100vh-71px)] align-items-end justify-center bg-gradient-to-tl from-black via-[#000000ba] to-transparent">
                <Image
                    alt="Mountains"
                    src={background}
                    fill
                    placeholder="blur"
                    className="h-100 w-screen object-cover bg-gradient-to-r z-[-1]"
                    priority
                />
                <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg absolute flex flex-col h-full py-20 px-10 gap-2 items-end justify-center">
                    <h1 className="text-xl sm:text-2xl md:text-4xl text-white font-bold">ยินดีต้อนรับเข้าสู่เว็บไซต์</h1>
                    <h1 className="text-3xl xs:text-4xl md:text-5xl text-white font-bold">โรงเรียน<span className="text-pink-500">สวนกุหลาบ</span><span className="text-sky-500">วิทยาลัย</span></h1>
                    <h1 className="hidden sm:flex text-md md:text-xl lg:text-2xl text-gray-300 text-end">โรงเรียนสวนกุหลาบวิทยาลัยเป็นสถาบันการศึกษาชั้นนำในเวทีโลก<br />สร้างสุภาพบุรุษสวนกุหลาบที่มีความสุข บนพื้นฐานคุณธรรม และวิถีความเป็นไทย</h1>
                    <Link href="#content" className="hidden md:flex">
                        <Button size="large"><span className="font-bold">เข้าสู่เว็บไซต์</span></Button>
                    </Link>
                </div>
            </div>
            <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center justify-center py-10 px-10 gap-2" id="content">
                <h3 className="text-lg font-bold">ค้นหาตารางเรียน</h3>
                <TimetableForm />
            </div>
            <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center justify-center pt-4 pb-10 px-10 gap-2" id="content">
                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {news.map((item, index) => (
                            <Link href={`/news/${item.id}`} key={item.id}>
                                <Card
                                    hoverable
                                    className="w-full bg-transparent md:h-[21rem] lg:h-80"
                                    title={item.title}
                                    cover={<div className="md:h-[10.75rem] lg:h-40"><Image alt={item.title} src={item.cover} width={900} height={500} className="max-h-full max-w-full" /></div>}
                                >
                                    <p className="text-gray-500">{item.description}</p>
                                </Card>
                            </Link>
                        ))}
                    </div>
                    <Link href="/news" key="seemore">
                        <Button type="primary">ดูเพิ่มเติม</Button>
                    </Link>
                </div>
            </div>
            
        </main>
    )
}
