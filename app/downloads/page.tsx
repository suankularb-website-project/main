import Image from "next/image";
import Link from "next/link";
import background from "../public/background.png";
import { Button, Card, Carousel } from "antd";
import downloads from "../../config/downloads.json";

export default function Links() {
    return (
        <main className="flex flex-col items-center justify-between top-0 pt-10 xxs:pt-0">
            <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center justify-center py-10 px-10 gap-2" id="content">
                <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-3xl font-bold text-start">ลิงก์</h1>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {downloads.map((item, index) => (
                            <Link href={item.url} key={item.id}>
                                <Card
                                    hoverable
                                    className="w-full bg-transparent md:h-[21rem] lg:h-60"
                                    title={item.title}
                                    cover={<div className="md:h-[10.75rem] lg:h-40 inline-block align-middle"><Image alt={item.title} src={item.cover} width={900} height={500} /></div>}
                                ></Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
