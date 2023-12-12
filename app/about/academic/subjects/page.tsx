"use client"

import Image from "next/image";
import Link from "next/link";
import { Menu, Select, Button, Form, InputNumber, message } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, FormEvent, useState, SetStateAction, JSX } from "react";

export default function Course() {
    const router = useRouter();
    const handleSubmit = (term: string) => {
        router.push(`/about/academic/subjects/${term}`)
    }
    return (
        <main className="flex flex-col items-center justify-between top-0 pt-10 xxs:pt-0">
            <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center justify-center py-10 px-10 gap-2" id="content">
                <h1 className="text-xl font-black">ประมวลรายวิชา ปีการศึกษา 2566</h1>
                <Button onClick={() => handleSubmit("2")}>ภาคเรียนที่ 2</Button>
            </div>
        </main>
    )
}


