import subject from "@/config/course/subject.json";
import parse from "html-react-parser";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Card } from "antd";

export async function generateStaticParams() {
    return ["1", "2"].map((item) => ({
        term: item
    }));
}

export default function Term({ params }: { params: { term: string }}) {
    let subjects = [];
    for (let i = 0; i < subject.length; i++) {
        for (let j = 0; j < subject[i].subjects.length; j++) {
            if (subject[i].subjects[j].term == params.term) {
                subjects.push(subject[i].subjects[j]);
            }
        }
    }
    return (
        <main className="flex flex-col items-center justify-between top-0 pt-0 xxs:pt-0">
            <h1 className="py-2 text-xl font-black text-center">ประมวลรายวิชา<br />ภาคเรียนที่ {params.term.substring(params.term.length - 1)} ปีการศึกษา 2566</h1>
            <div className="w-full px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {
                    subjects.map((item, index) => 
                        <Link href={`/about/academic/subjects/info/${item.code}`} key={item.code}>
                            <Card
                                hoverable
                                title={item.name}
                            >
                                <p className="text-gray-500">รหัสวิชา: {item.code}</p>
                                {
                                    item.code.startsWith("ก") ? <></> : <p className="text-gray-500">หน่วยกิต: {item.weight}</p>
                                }
                                <p className="text-gray-500">ห้องเรียน: {item.class}</p>
                            </Card>
                        </Link>
                    )
                }
            </div>
        </main>
    )
}


