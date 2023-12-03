"use client"

import Image from "next/image";
import Link from "next/link";
import { Menu, Select, Button, Form, InputNumber, message } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, FormEvent, useState, SetStateAction, JSX } from "react";
import subject from "@/config/course/subject.json";
import notFound from "@/public/syllabusNotFound.png";

function thaiSubj(subj: string) {
    let data: string = subj.slice(3);
    let dept: string = subj.slice(0, 3);
    switch(dept) {
        case 'sci':
            dept = 'ว';
            break;
        case 'mat':
            dept = 'ค';
            break;
        case 'eng':
            dept = 'อ';
            break;
        case 'chi':
            dept = 'จ';
            break;
        case 'jap':
            dept = 'ญ';
            break;
        case 'fra':
            dept = 'ฝ';
            break;
        case 'tha':
            dept = 'ท';
            break;
        case 'soc':
            dept = 'ส';
            break;
        case 'phy':
            dept = 'พ';
            break;
        case 'art':
            dept = 'ศ';
            break;
        case 'car':
            dept = 'ง';
            break;
        case 'is_':
            dept = 'I';
            break;
        case 'act':
            dept = 'ก';
    }
    return dept + data;
}

function engSubj(subj: string) {
    let data: string = subj.slice(1);
    let dept: string = subj.slice(0, 1);
    switch(dept) {
        case 'ว':
            dept = 'sci';
            break;
        case 'ค':
            dept = 'mat';
            break;
        case 'อ':
            dept = 'eng';
            break;
        case 'จ':
            dept = 'chi';
            break;
        case 'ญ':
            dept = 'jap';
            break;
        case 'ฝ':
            dept = 'fra';
            break;
        case 'ท':
            dept = 'tha';
            break;
        case 'ส':
            dept = 'soc';
            break;
        case 'พ':
            dept = 'phy';
            break;
        case 'ศ':
            dept = 'art';
            break;
        case 'ง':
            dept = 'car';
            break;
        case 'I':
            dept = 'is_';
            break;
        case 'ก':
            dept = 'act';
    }
    return dept + data;
}

export async function generateStaticParams() {
    return subject.map((item) => ({
       id: engSubj(item.code)
   }));
}

export default function Course({ params }: { params: { id: string }}) {
    const subj = subject.filter((item) => item.code.toString() == thaiSubj(params.id))[0]
    return (
        <main className="flex flex-col items-center justify-between top-0 pt-5 xxs:pt-0">
            <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center justify-center py-10 px-10 gap-4" id="content">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center">{subj.code}</h1>
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center">{subj.name}</h1>
                <p className="hidden sm:block text-center">ประมวลรายวิชา</p>
                { typeof(subj.file) === "undefined" ? <Image src={notFound} width={500} height={500} quality={100} alt={subj.name} /> : <iframe src={subj.file} width="100%" height="500px" /> }
            </div>
        </main>
    )
}

