"use client"

import Image from "next/image";
import Link from "next/link";
import { Menu, Select, Button, Form, InputNumber, message } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, FormEvent, useState, SetStateAction, JSX } from "react";
import subject from "@/config/course/subject.json";

function list(subj: String) {
    if (subj == 'อ' || subj == 'จ' || subj == 'ญ' || subj == 'ฝ') {
        return 'ต';
    } else {
        return subj;
    }
}

function getSubj(subj: String) {
    let data: String = "กลุ่มสาระการเรียนรู้";
    switch(subj) {
        case 'ว':
            data.concat("วิทยาศาสตร์และเทคโนโลยี");
            break;
        case 'ค':
            data.concat("คณิตศาสตร์");
            break;
        case 'ต':
            data.concat("ภาษาต่างประเทศ");
            break;
        case 'ท':
            data.concat("ภาษาไทย");
            break;
        case 'ส':
            data.concat("สังคมศึกษา ศาสนาและวัฒนธรรม");
            break;
        case 'พ':
            data.concat("พลศึกษาและสุขศึกษา");
            break;
        case 'ศ':
            data.concat("ศิลปะ");
            break;
        case 'ง':
            data.concat("การงานอาชีพ");
            break;
        case 'I':
            return ("การศึกษาค้นคว้าและสร้างองค์ความรู้");
        case 'ก':
            return ("กิจกรรมพัฒนาผู้เรียน");
    }
    return data;
}

export default function Course() {
    let subj: String = "";
    return (
        <main className="flex flex-col items-center justify-between top-0 pt-10 xxs:pt-0">
            <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center justify-center py-10 px-10 gap-2" id="content">
                <h1 className="text-3xl">ประมวลรายวิชา ภาคเรียนที่ 2 ปีการศึกษา 2566</h1>
                <table style={{border: "1px solid white", borderCollapse: "collapse", width: "70vw"}}>
                    
                </table>
            </div>
        </main>
    )
}


