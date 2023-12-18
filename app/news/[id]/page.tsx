import Image from "next/image";
import newsData from "@/config/news.json";
import { Card } from "antd";

export function generateStaticParams() {
    return newsData.map((item: any, index: any) => ({
        id: item.id.toString()
    }));
}

export default function News({ params }: { params: { id: string } }) {
    const { id } = params;
    const news = newsData.filter((item) => item.id.toString() == id)[0];
    return (
        <main className="flex flex-col items-center justify-between top-0 pt-5 xxs:pt-0">
            <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center justify-center py-10 px-10 gap-4" id="content">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center">{news.title}</h1>
                <p className="hidden sm:block text-gray-500 text-center">{news.description}</p>
                { typeof(news.file) === "undefined" ? <Image src={news.cover} width={500} height={500} quality={100} alt={news.title} priority /> : <iframe src={news.file} width="100%" height="500px" /> }
            </div>
        </main>
    )
}
