"use client"

import subject from "@/config/course/subject.json";
import parse from "html-react-parser";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function foreign(subj: string) {
    if (subj == 'อ' || subj == 'จ' || subj == 'ญ' || subj == 'ฝ') {
        return 'ต';
    } else {
        return subj;
    }
}

function getSubj(subj: string) {
    let data: string = "กลุ่มสาระการเรียนรู้";
    switch(subj) {
        case 'ว':
            data = data.concat("วิทยาศาสตร์และเทคโนโลยี");
            break;
        case 'ค':
            data = data.concat("คณิตศาสตร์");
            break;
        case 'ต':
            data = data.concat("ภาษาต่างประเทศ");
            break;
        case 'ท':
            data = data.concat("ภาษาไทย");
            break;
        case 'ส':
            data = data.concat("สังคมศึกษา ศาสนาและวัฒนธรรม");
            break;
        case 'พ':
            data = data.concat("สุขศึกษาและพลศึกษา");
            break;
        case 'ศ':
            data = data.concat("ศิลปะ");
            break;
        case 'ง':
            data = data.concat("การงานอาชีพ");
            break;
        case 'I':
            return ("การศึกษาค้นคว้าและสร้างองค์ความรู้");
        case 'ก':
            return ("กิจกรรมพัฒนาผู้เรียน");
    }
    return data;
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

function makeTable(term: string) {
    let subj: string = "";
    let data: string = "";
    subject.map((item, index) => {
        if (item.term[0] == term) {
            if (foreign(item.code[0]) != subj) {
                subj = foreign(item.code[0]);
                data = data.concat(`<tr><td colspan="4" style="text-align: center; border: 1px solid white; border-collapse: collapse;">${getSubj(subj)}</td></tr>`);
            }
            data = data.concat(`<tr id="${item.code}" class="add-click"><td>${item.code}</td><td>${item.name}</td>`)
            if (subj == 'ก') {
                data = data.concat(`<td colspan="2">${item.class}</td></tr>`)
            } else {
                data = data.concat(`<td>${item.class}</td><td>${item.weight}</td></tr>`)
            }
        }
    });
    return parse(data);
}

export default function Course({ params }: { params: { term: string }}) {
    let isStart: boolean = false;
    let router = useRouter();
    useEffect(() => {
        if (isStart) {
            let td = document.getElementsByClassName("add-click");
            Array.from(td).forEach((item) => {
                item.addEventListener('click', function() {router.push(`/about/academic/subjects/info/${engSubj(item.id)}`)}, false);
            })
            isStart = false;
        }
    }, [isStart]);
    return (
        <main className="flex flex-col items-center justify-between top-0 pt-10 xxs:pt-0">
            <h1 className="text-3xl">ประมวลรายวิชา ภาคเรียนที่ {params.term.substring(params.term.length - 1)} ปีการศึกษา 2566</h1>
            <table style={{border: "1px solid white", borderCollapse: "collapse"}}>
                <tbody>
                    <tr>
                        <th style={{width: "75px"}}>รหัสวิชา</th>
                        <th style={{width: "300px"}}>ชื่อวิชา</th>
                        <th style={{width: "150px"}}>ชั้นเรียน</th>
                        <th>นก.</th>
                    </tr>
                    {makeTable(params.term.substring(params.term.length - 1))}
                    {isStart = true}
                </tbody>
            </table>
        </main>
    )
}


