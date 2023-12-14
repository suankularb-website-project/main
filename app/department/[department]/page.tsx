import departments from "@/config/departments.json";
import news from "@/config/news.json"
import { Button, Card } from "antd";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
    return departments.map((item) => ({
        department: item.id
    }));
}

export default function Department( { params }: { params: { department: string }} ) {
    const dept = departments.filter((item) => item.id.toString() == params.department)[0]
    const deptNews: {title: string, description: string, cover: string, file?: string, id: number, dept?: string}[] = news.filter((item) => item.dept?.toString() == params.department)
    return (
        <main className="flex flex-col items-center justify-between top-0 pt-10 xxs:pt-0">
            <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center justify-center py-10 px-10 gap-2" id="content">
                <h1 className="text-3xl">{dept.name}</h1>
                <h1 className="text-2xl">ข่าวสาร</h1>
                <div className="flex flex-col items-center justify-center gap-2">
                    {deptNews.length > 0 ? (
                            <div className="w-full grid grid-cols-1 xxs:grid-cols-2 lg:grid-cols-3 gap-2">
                                {deptNews.map((item, index) => (
                                    <Link href={`/news/${item.id}`} key={item.id}>
                                        <Card
                                            hoverable
                                            className="w-full bg-transparent md:h-[21rem] lg:h-80"
                                            title={item.title}
                                            cover={<div className="md:h-[10.75rem] lg:h-40"><Image alt={item.title} src={item.cover} width={340} height={250} className="max-h-full max-w-full" /></div>}
                                        >
                                        <p className="text-gray-500">{item.description}</p>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500">ไม่พบข่าวสาร</p>
                    )}
                </div>
                <h1 className="text-2xl">บุคลากร</h1>
                <div>
                    <Button href={`/department/${dept.id}/staffs`}>บุคลากร {dept.name}</Button>
                </div>
            </div>
        </main>
    )
}