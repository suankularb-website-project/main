import exe from "@/config/executive.json";
import { Card } from "antd";
import Image from "next/image";

export default function Executive() {
    let head = exe.staffs[0];
    return (
        <main className="flex flex-col items-center justify-between top-0 pt-10 xxs:pt-0">
            <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center justify-center py-10 px-10 gap-2" id="content">
                <div className="w-full">
                    <center>
                        <Card
                            key={0}
                            hoverable
                            className="bg-transparent h-[15rem] lg:h-80"
                            cover={<div className="h-[10.75rem] lg:h-60 justify-center"><Image alt={head.name} src={head.cover} width={900} height={200} className="w-auto h-full mx-auto" /></div>}
                            title={<div><h3>{head.name}</h3><p>{head.type}</p></div>}  
                        />
                    </center>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                    {exe.staffs.slice(1).map((item: any, index: any) => (
                        <center key={index}>
                            <Card
                                key={index}
                                hoverable
                                className="w-full bg-transparent h-[15rem] lg:h-80"
                                cover={<div className="h-[10.75rem] lg:h-60 justify-center"><Image alt={item.name} src={item.cover} width={900} height={200} className="w-auto h-full mx-auto" /></div>}
                                title={<div><h3>{item.name}</h3><p>{item.type}</p></div>}  
                            />
                        </center>
                    ))}
                </div>
            </div>
        </main>
    )
}