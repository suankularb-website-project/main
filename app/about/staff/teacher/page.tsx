import Image from "next/image";
import Link from "next/link";
import { Card } from "antd";
import departments from "@/config/departments.json";

export default function Department() {
    return (
        <main className="flex flex-col items-center justify-between top-0 pt-10 xxs:pt-0">
            <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center justify-center py-10 px-10 gap-2" id="content">
                <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
                    {departments.map((item, index) => (
                        <Link href={`/department/${item.id}/staffs`} key={item.id}>
                            <Card
                                hoverable
                                className="w-full bg-transparent h-[15rem] lg:h-80"
                                title={item.name}
                                cover={<div className="h-[10.75rem] lg:h-60 justify-center"><Image alt={item.name} src={item.cover} width={900} height={200} className="w-auto h-full mx-auto" /></div>}
                            ></Card>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}
