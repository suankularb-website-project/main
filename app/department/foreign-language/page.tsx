import Image from "next/image";
import Link from "next/link";
import { Card, Row } from "antd";
import departments from "../../../config/departments/foreign.json";

export default function Department() {
    return (
        <main className="flex flex-col items-center justify-between top-0 pt-10 xxs:pt-0">
            <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center justify-center py-10 px-10 gap-2" id="content">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {departments.map((item, index) => (
                        <Card
                            key={index}
                            hoverable
                            className="w-full bg-transparent h-[15rem] lg:h-80"
                            cover={<div className="h-[10.75rem] lg:h-60 justify-center"><Image unoptimized alt={item.name} src={item.cover} width={900} height={200} className="w-auto h-full mx-auto" /></div>}
                            title={<div><h3>{item.name}</h3><p>{item.type}</p></div>}  
                        >
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    )
}
