"use client"

import Image from "next/image";
import Link from "next/link";
import background from "@/public/background.png";
import { Button, Form, InputNumber, Card, Carousel } from "antd";
import newsData from "@/config/news.json";
import TimetableForm from "@/components/timetableForm";

export default function Home() {
    const [form] = Form.useForm();
    function Timetable() {
        const days: string[] = ["จันทร์", "อังคาร", "พุธ", "พฤหัสฯ", "ศุกร์"]
        let data: string = `
            <table id="timetable" style="border: 1px solid white; borderCollapse: collapse; width: 70vw;">
                <tbody>
                    <tr>
                        <th></th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th>10</th>
                    </tr>
                    <tr>
                        <th>เวลา</th>
                        <th>08:30-09:20</th>
                        <th>09:20-10:10</th>
                        <th>10:10-11:00</th>
                        <th>11:00-11:50</th>
                        <th>11:50-12:40</th>
                        <th>12:40-13:30</th>
                        <th>13:30-14:20</th>
                        <th>14:20-15:10</th>
                        <th>15:10-16:00</th>
                        <th>16:00-16:50</th>
                    </tr>
                    <tr>
                        <th>ร่นคาบ</th>
                        <th>08:30-09:10</th>
                        <th>09:10-09:50</th>
                        <th>09:50-10:30</th>
                        <th>10:30-11:10</th>
                        <th>11:10-11:50</th>
                        <th>11:50-12:30</th>
                        <th>12:30-13:10</th>
                        <th>13:10-13:50</th>
                        <th>13:50-14:30</th>
                        <th>14:30-15:10</th>
                    </tr>
        `
        days.map((item, index) => {
            data = data.concat(`
                <tr style="border: 1px solid white; borderCollapse: collapse;">
                    <td style="border: 1px solid white; borderCollapse: collapse; text-align: center;">${item}</td>
                    <td style="border: 1px solid white; borderCollapse: collapse; text-align: center;">ทดสอบ<br />ครู1<br />ห้อง1</td>
                    <td style="border: 1px solid white; borderCollapse: collapse; text-align: center;"><br /><br /></td>
                    <td style="border: 1px solid white; borderCollapse: collapse; text-align: center;"><br /><br /></td>
                    <td style="border: 1px solid white; borderCollapse: collapse; text-align: center;"><br /><br /></td>
                    <td style="border: 1px solid white; borderCollapse: collapse; text-align: center;"><br /><br /></td>
                    <td style="border: 1px solid white; borderCollapse: collapse; text-align: center;"><br /><br /></td>
                    <td style="border: 1px solid white; borderCollapse: collapse; text-align: center;"><br /><br /></td>
                    <td style="border: 1px solid white; borderCollapse: collapse; text-align: center;"><br /><br /></td>
                    <td style="border: 1px solid white; borderCollapse: collapse; text-align: center;"><br /><br /></td>
                    <td style="border: 1px solid white; borderCollapse: collapse; text-align: center;"><br /><br /></td>
                </tr>
            `)
        });
        let table = document.getElementById("timetable") as HTMLElement;
        table.innerHTML = data.concat("</tbody></table>")
    }
    const news = newsData.slice(0, 6)
    return (
        <main className="flex flex-col items-center justify-between top-0 pt-10 xxs:pt-0">
            <div className="hidden xxs:flex relative h-[calc(100vh-71px)] align-items-end justify-center bg-gradient-to-tl from-black via-[#000000ba] to-transparent">
                <Image
                    alt="Mountains"
                    src={background}
                    placeholder="blur"
                    quality={100}
                    className="h-100 w-screen object-cover bg-gradient-to-r z-[-1]"
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
