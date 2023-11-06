"use client"

import Image from "next/image";
import Link from "next/link";
import { Menu, Select, Button, Form, InputNumber, message } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, FormEvent, useState, SetStateAction, JSX } from "react";
import room from "@/config/course/room.json"
import course from "@/config/course/course.json"
import subject from "@/config/course/subject.json"
import select from "@/config/course/select.json"

interface select {
    stitle: string;
    sshow: string;
    srow: string;
    s1t1code: string;
    s2t1code: string;
    s3t1code: string;
    s4t1code: string;
    s5t1code: string;
    s6t1code: string;
    s7t1code: string;
    s8t1code: string;
    s9t1code: string;
    s10t1code: string;
    s1t2code: string;
    s2t2code: string;
    s3t2code: string;
    s4t2code: string;
    s5t2code: string;
    s6t2code: string;
    s7t2code: string;
    s8t2code: string;
    s9t2code: string;
    s10t2code: string;
}

const selectDef : select = {
    stitle: "",
    sshow: "",
    srow: "",
    s1t1code: "",
    s2t1code: "",
    s3t1code: "",
    s4t1code: "",
    s5t1code: "",
    s6t1code: "",
    s7t1code: "",
    s8t1code: "",
    s9t1code: "",
    s10t1code: "",
    s1t2code: "",
    s2t2code: "",
    s3t2code: "",
    s4t2code: "",
    s5t2code: "",
    s6t2code: "",
    s7t2code: "",
    s8t2code: "",
    s9t2code: "",
    s10t2code: ""
}

function getHour (weight : string) {
    return(parseInt((parseFloat(weight) * 40).toString()))
}

function insertTable (div : HTMLElement) {
    div.innerHTML = `
        <table id="data" style="border: 1px solid white; borderCollapse: collapse;">
            <tbody>
                <tr id="nd1" style="border: 1px solid white; borderCollapse: collapse;">
                    <th style="border: 1px solid white; borderCollapse: collapse;" colSpan=4>ภาคเรียนที่ 1</th>
                    <th style="border: 1px solid white; borderCollapse: collapse;" colSpan=4>ภาคเรียนที่ 2</th>
                </tr>
                <tr id="nd2" style="border: 1px solid white; borderCollapse: collapse;">
                    <th style="border: 1px solid white; borderCollapse: collapse; width: 5vw;">รหัสวิชา</th>
                    <th style="border: 1px solid white; borderCollapse: collapse; width: 40vw;">ชื่อวิชา</th>
                    <th style="border: 1px solid white; borderCollapse: collapse; width: 2.5vw;">นก.</th>
                    <th style="border: 1px solid white; borderCollapse: collapse; width: 2.5vw;">ชม.</th>
                    <th style="border: 1px solid white; borderCollapse: collapse; width: 5vw;">รหัสวิชา</th>
                    <th style="border: 1px solid white; borderCollapse: collapse; width: 40vw;">ชื่อวิชา</th>
                    <th style="border: 1px solid white; borderCollapse: collapse; width: 2.5vw;">นก.</th>
                    <th style="border: 1px solid white; borderCollapse: collapse; width: 2.5vw;">ชม.</th>
                </tr>
                <tr id="nd3" style="border: 1px solid white; borderCollapse: collapse;">
                    <th colSpan=2 style="border: 1px solid white; borderCollapse: collapse;">รายวิชาพื้นฐาน</th>
                    <th id="bt1weight" style="border: 1px solid white; borderCollapse: collapse;"></th>
                    <th id="bt1hour" style="border: 1px solid white; borderCollapse: collapse;"></th>
                    <th colSpan=2 style="border: 1px solid white; borderCollapse: collapse;">รายวิชาพื้นฐาน</th>
                    <th id="bt2weight" style="border: 1px solid white; borderCollapse: collapse;"></th>
                    <th id="bt2hour" style="border: 1px solid white; borderCollapse: collapse;"></th>
                </tr>
                <tr id="nd4">
                    <th colSpan=2 style="border: 1px solid white; borderCollapse: collapse;">รายวิชาเพิ่มเติม</th>
                    <th id="at1weight" style="border: 1px solid white; borderCollapse: collapse;"></th>
                    <th id="at1hour" style="border: 1px solid white; borderCollapse: collapse;"></th>
                    <th colSpan=2 style="border: 1px solid white; borderCollapse: collapse;">รายวิชาเพิ่มเติม</th>
                    <th id="at2weight" style="border: 1px solid white; borderCollapse: collapse;"></th>
                    <th id="at2hour" style="border: 1px solid white; borderCollapse: collapse;"></th>
                </tr>
                <tr id="nd5">
                    <th colSpan=2 style="border: 1px solid white; borderCollapse: collapse;">กิจกรรมพัฒนาผู้เรียน</th>
                    <th style="border: 1px solid white; borderCollapse: collapse;"></th>
                    <th id="gt1hour" style="border: 1px solid white; borderCollapse: collapse;"></th>
                    <th colSpan=2 style="border: 1px solid white; borderCollapse: collapse;">กิจกรรมพัฒนาผู้เรียน</th>
                    <th style="border: 1px solid white; borderCollapse: collapse;"></th>
                    <th id="gt2hour" style="border: 1px solid white; borderCollapse: collapse;"></th>
                </tr>
                <tr id="nd6">
                    <th colSpan=2 style="border: 1px solid white; borderCollapse: collapse;">รวมเวลาเรียนทั้งหมด</th>
                    <th id="tt1weight" style="border: 1px solid white; borderCollapse: collapse;"></th>
                    <th id="tt1hour" style="border: 1px solid white; borderCollapse: collapse;"></th>
                    <th colSpan=2 style="border: 1px solid white; borderCollapse: collapse;">รวมเวลาเรียนทั้งหมด</th>
                    <th id="tt2weight" style="border: 1px solid white; borderCollapse: collapse;"></th>
                    <th id="tt2hour" style="border: 1px solid white; borderCollapse: collapse;"></th>
                </tr>
            </tbody>
        </table>
    `
}

function insertSelectTable (div: HTMLElement, i: string) {
    div.innerHTML = `
        <table id="s${i}table" style="border: 1px solid white; borderCollapse: collapse;">
            <tbody>
                <tr id="nd1" style="border: 1px solid white; borderCollapse: collapse;">
                    <th style="border: 1px solid white; borderCollapse: collapse;" colSpan=2>ภาคเรียนที่ 1</th>
                    <th style="border: 1px solid white; borderCollapse: collapse;" colSpan=2>ภาคเรียนที่ 2</th>
                </tr>
                <tr id="nd2" style="border: 1px solid white; borderCollapse: collapse;">
                    <th style="border: 1px solid white; borderCollapse: collapse; width: 5vw;">รหัสวิชา</th>
                    <th style="border: 1px solid white; borderCollapse: collapse; width: 40vw;">ชื่อวิชา</th>
                    <th style="border: 1px solid white; borderCollapse: collapse; width: 5vw;">รหัสวิชา</th>
                    <th style="border: 1px solid white; borderCollapse: collapse; width: 40vw;">ชื่อวิชา</th>
                </tr>
            </tbody>
        </table>
    `
}

function insertSelect1Table (div: HTMLElement, i: string, term: string) {
    div.innerHTML = `
                <table id="s${i}table" style="border: 1px solid white; borderCollapse: collapse;>
                    <tbody>
                        <tr id="nd1" style="border: 1px solid white; borderCollapse: collapse;">
                            <th style="border: 1px solid white; borderCollapse: collapse;" colSpan=2>ภาคเรียนที่ ${term}</th>
                        </tr>
                        <tr id="nd2" style="border: 1px solid white; borderCollapse: collapse;">
                            <th style="border: 1px solid white; borderCollapse: collapse; width: 5vw;">รหัสวิชา</th>
                            <th style="border: 1px solid white; borderCollapse: collapse; width: 20vw;">ชื่อวิชา</th>
                        </tr>
                    </tbody>
                </table>
    `
}

function writeTable(code: string, cell2: HTMLTableCellElement, cell3: HTMLTableCellElement, cell4: HTMLTableCellElement) {
    let weight: number = 0;
    subject.map((item, index) => {
        if (item.code == code) {
            cell2.innerHTML = item.name;
            weight = parseFloat(item.weight);
            cell3.innerHTML = item.weight;
            if (item.weight != "") {
                cell4.innerHTML = getHour(item.weight).toString();
            }
        }
    })
    return weight;
}

function writeTableGuide(code: string, cell2: HTMLTableCellElement, cell3: HTMLTableCellElement, cell4: HTMLTableCellElement) {
    let hour: number = 0;
    subject.map((item, index) => {
        if (item.code == code) {
            cell2.innerHTML = item.name;
            cell3.innerHTML = "";
            if (item.weight.slice(-1) != "*") {
                hour = parseFloat(item.weight);
            }
            cell4.innerHTML = item.weight;
        }
    })
    return hour;
}

function getName (code: string, cell2: HTMLTableCellElement) {
    subject.map((item, index) => {
        if (item.code == code) {
            cell2.innerHTML = item.name;
        }
    })
}

export default function Course() {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    function roomFinish() {
        let div = document.getElementById('datadiv') as HTMLElement;
        insertTable(div);
        let table = document.getElementById('data') as HTMLTableElement;
        const roomVal = form.getFieldValue('room')
        let s1 = document.getElementById('s1div') as HTMLElement;
        let s1title = document.getElementById('s1') as HTMLElement;
        let s2 = document.getElementById('s2div') as HTMLElement;
        let s2title = document.getElementById('s2') as HTMLElement;
        let title = document.getElementById('title') as HTMLElement;
        let classr = document.getElementById('class') as HTMLElement;
        let blank = [div, s1, s1title, s2, s2title, title, classr];
        let type: string = "";
        room.map((item, index) => {
            if (item.name == roomVal) {
                type = item.type;
            }
        })
        if (type == "") {
            messageApi.open({
                type: 'error',
                content: 'ไม่พบชั้นเรียน'
            });
            messageApi.open({
                type: 'warning',
                content: 'กรุณากรอกชั้นเรียน ม.101-113, 201-213, 301-313, 401-415, 501-515, 601-614'
            });
            blank.map((it, i) => {
                it.innerHTML = "";
            })
        }
        course.map((item, index) => {
            if (item.name == type) {
                let title = document.getElementById('title') as HTMLElement;
                let classr = document.getElementById('class') as HTMLElement;
                title.innerHTML = item.full;
                classr.innerHTML = `ชั้นมัธยมศึกษาปีที่ ${item.class} ห้อง ${item.room}`;
                let bt1code = [item.b1t1code, item.b2t1code, item.b3t1code, item.b4t1code, item.b5t1code, item.b6t1code, item.b7t1code, item.b8t1code, item.b9t1code, item.b10t1code, item.b11t1code, item.b12t1code, item.b13t1code, item.b14t1code, item.b15t1code, item.b16t1code, item.b17t1code, item.b18t1code, item.b19t1code, item.b20t1code];
                let bt2code = [item.b1t2code, item.b2t2code, item.b3t2code, item.b4t2code, item.b5t2code, item.b6t2code, item.b7t2code, item.b8t2code, item.b9t2code, item.b10t2code, item.b11t2code, item.b12t2code, item.b13t2code, item.b14t2code, item.b15t2code, item.b16t2code, item.b17t2code, item.b18t2code, item.b19t2code, item.b20t2code];
                let at1code = [item.a1t1code, item.a2t1code, item.a3t1code, item.a4t1code, item.a5t1code, item.a6t1code, item.a7t1code, item.a8t1code, item.a9t1code, item.a10t1code, item.a11t1code, item.a12t1code, item.a13t1code, item.a14t1code, item.a15t1code, item.a16t1code, item.a17t1code, item.a18t1code, item.a19t1code, item.a20t1code];
                let at2code = [item.a1t2code, item.a2t2code, item.a3t2code, item.a4t2code, item.a5t2code, item.a6t2code, item.a7t2code, item.a8t2code, item.a9t2code, item.a10t2code, item.a11t2code, item.a12t2code, item.a13t2code, item.a14t2code, item.a15t2code, item.a16t2code, item.a17t2code, item.a18t2code, item.a19t2code, item.a20t2code];
                let gt1code = [item.g1t1code, item.g2t1code, item.g3t1code, item.g4t1code, item.g5t1code];
                let gt2code = [item.g1t2code, item.g2t2code, item.g3t2code, item.g4t2code, item.g5t2code];
                let bt1weight = 0, bt2weight = 0;
                for (let i = 0; i < parseInt(item.basicrow); i++) {
                    var row = table.insertRow(table.rows.length - 3);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                    var cell6 = row.insertCell(5);
                    var cell7 = row.insertCell(6);
                    var cell8 = row.insertCell(7);
                    cell1.innerHTML = bt1code[i];
                    let weight1 = writeTable(bt1code[i], cell2, cell3, cell4);
                    bt1weight += weight1;
                    cell5.innerHTML = bt2code[i];
                    let weight2 = writeTable(bt2code[i], cell6, cell7, cell8);
                    bt2weight += weight2;
                }
                let bt1weightdata = document.getElementById('bt1weight') as HTMLElement;
                let bt1hour = document.getElementById('bt1hour') as HTMLElement;
                let bt2weightdata = document.getElementById('bt2weight') as HTMLElement;
                let bt2hour = document.getElementById('bt2hour') as HTMLElement;
                bt1weightdata.innerHTML = bt1weight.toFixed(1);
                bt1hour.innerHTML = getHour(bt1weight.toString()).toString();
                bt2weightdata.innerHTML = bt2weight.toFixed(1);
                bt2hour.innerHTML = getHour(bt2weight.toString()).toString();
                let at1weight = 0, at2weight = 0
                let sel1: select = selectDef, sel2: select = selectDef;
                select.map((sitem, sindex) => {
                    if (sitem.stitle == item.s1title) {
                        sel1 = sitem;
                    }
                    if (sitem.stitle == item.s2title) {
                        sel2 = sitem;
                    }
                })
                for (let i = 0; i < parseInt(item.addrow); i++) {
                    var row = table.insertRow(table.rows.length - 2);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                    var cell6 = row.insertCell(5);
                    var cell7 = row.insertCell(6);
                    var cell8 = row.insertCell(7);
                    if (at1code[i] == "วิชาเลือก") {
                        let weight1 = writeTable(sel1.s1t1code, cell2, cell3, cell4);
                        cell2.innerHTML = sel1.sshow;
                        at1weight += weight1;
                    } else if (at1code[i] == "วิชาเลือก2") {
                        let weight1 = writeTable(sel2.s1t1code, cell2, cell3, cell4);
                        cell2.innerHTML = sel2.sshow;
                        at1weight += weight1;
                    } else {
                        cell1.innerHTML = at1code[i];
                        let weight1 = writeTable(at1code[i], cell2, cell3, cell4);
                        at1weight += weight1;
                    }
                    if (at2code[i] == "วิชาเลือก") {
                        let weight2 = writeTable(sel1.s1t2code, cell6, cell7, cell8);
                        cell6.innerHTML = sel1.sshow;
                        at2weight += weight2;
                    } else if (at2code[i] == "วิชาเลือก2") {
                        let weight2 = writeTable(sel2.s1t2code, cell6, cell7, cell8);
                        cell6.innerHTML = sel2.sshow;
                        at2weight += weight2;
                    } else {
                        cell5.innerHTML = at2code[i];
                        let weight2 = writeTable(at2code[i], cell6, cell7, cell8);
                        at2weight += weight2;
                    }
                }
                let at1weightdata = document.getElementById('at1weight') as HTMLElement;
                let at1hour = document.getElementById('at1hour') as HTMLElement;
                let at2weightdata = document.getElementById('at2weight') as HTMLElement;
                let at2hour = document.getElementById('at2hour') as HTMLElement;
                at1weightdata.innerHTML = at1weight.toFixed(1);
                at1hour.innerHTML = getHour(at1weight.toString()).toString();
                at2weightdata.innerHTML = at2weight.toFixed(1);
                at2hour.innerHTML = getHour(at2weight.toString()).toString();
                let gt1hour = 0, gt2hour = 0;
                for (let i = 0; i < parseInt(item.guiderow); i++) {
                    var row = table.insertRow(table.rows.length - 1);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                    var cell6 = row.insertCell(5);
                    var cell7 = row.insertCell(6);
                    var cell8 = row.insertCell(7);
                    cell1.innerHTML = gt1code[i];
                    gt1hour += writeTableGuide(gt1code[i], cell2, cell3, cell4);
                    cell5.innerHTML = gt2code[i];
                    gt2hour += writeTableGuide(gt2code[i], cell6, cell7, cell8);
                }
                let gt1hourdata = document.getElementById('gt1hour') as HTMLElement;
                let gt2hourdata = document.getElementById('gt2hour') as HTMLElement;
                gt1hourdata.innerHTML = parseInt(gt1hour.toString()).toString();
                gt2hourdata.innerHTML = parseInt(gt2hour.toString()).toString();
                let tt1weight = document.getElementById('tt1weight') as HTMLElement;
                let tt1hour = document.getElementById('tt1hour') as HTMLElement;
                let tt2weight = document.getElementById('tt2weight') as HTMLElement;
                let tt2hour = document.getElementById('tt2hour') as HTMLElement;
                tt1weight.innerHTML = (bt1weight + at1weight).toFixed(1);
                tt1hour.innerHTML = (getHour((bt1weight + at1weight).toFixed(1)) + parseInt(gt1hour.toString())).toString();
                tt2weight.innerHTML = (bt2weight + at2weight).toFixed(1);
                tt2hour.innerHTML = (getHour((bt2weight + at2weight).toFixed(1)) + parseInt(gt2hour.toString())).toString();
                let s1t1 = [sel1.s1t1code, sel1.s2t1code, sel1.s3t1code, sel1.s4t1code, sel1.s5t1code, sel1.s6t1code, sel1.s7t1code, sel1.s8t1code, sel1.s9t1code, sel1.s10t1code]
                let s1t2 = [sel1.s1t2code, sel1.s2t2code, sel1.s3t2code, sel1.s4t2code, sel1.s5t2code, sel1.s6t2code, sel1.s7t2code, sel1.s8t2code, sel1.s9t2code, sel1.s10t2code]
                let s2t1 = [sel2.s1t1code, sel2.s2t1code, sel2.s3t1code, sel2.s4t1code, sel2.s5t1code, sel2.s6t1code, sel2.s7t1code, sel2.s8t1code, sel2.s9t1code, sel2.s10t1code]
                let s2t2 = [sel2.s1t2code, sel2.s2t2code, sel2.s3t2code, sel2.s4t2code, sel2.s5t2code, sel2.s6t2code, sel2.s7t2code, sel2.s8t2code, sel2.s9t2code, sel2.s10t2code]
                let s1 = document.getElementById('s1div') as HTMLElement;
                let s1title = document.getElementById('s1') as HTMLElement;
                let s2 = document.getElementById('s2div') as HTMLElement;
                let s2title = document.getElementById('s2') as HTMLElement;
                if (item.s1title != "") {
                    if (sel1.s1t1code == "") {
                        insertSelect1Table(s1, "1", "2")
                    } else if (sel1.s1t2code == "") {
                        insertSelect1Table(s1, "1", "1")
                    } else {
                        insertSelectTable(s1, "1");
                    }
                    let table = document.getElementById('s1table') as HTMLTableElement;
                    s1title.innerHTML = sel1.sshow;
                    for (let i = 0; i < parseInt(sel1.srow); i++) {
                        var row = table.insertRow(table.rows.length);
                        var cell1 = row.insertCell(0);
                        var cell2 = row.insertCell(1);
                        if (sel1.s1t1code == "") {
                            cell1.innerHTML = s1t2[i];
                            getName(s1t2[i], cell2);
                        } else {
                            cell1.innerHTML = s1t1[i];
                            getName(s1t1[i], cell2);
                            if (sel1.s1t2code != "") {
                                var cell3 = row.insertCell(2);
                                var cell4 = row.insertCell(3);
                                cell3.innerHTML = s1t2[i];
                                getName(s1t2[i], cell4);
                            }
                        }
                    }
                } else {
                    s1.innerHTML = "";
                    s1title.innerHTML = ""
                }
                if (item.s2title != "") {
                    if (sel2.s1t1code == "") {
                        insertSelect1Table(s2, "2", "2")
                    } else if (sel2.s1t2code == "") {
                        insertSelect1Table(s2, "2", "1")
                    } else {
                        insertSelectTable(s2, "2");
                    }
                    let table = document.getElementById('s2table') as HTMLTableElement;
                    s2title.innerHTML = sel2.sshow;
                    for (let i = 0; i < parseInt(sel2.srow); i++) {
                        var row = table.insertRow(table.rows.length);
                        var cell1 = row.insertCell(0);
                        var cell2 = row.insertCell(1);
                        if (sel2.s1t1code == "") {
                            cell1.innerHTML = s2t2[i];
                            getName(s2t2[i], cell2);
                        } else {
                            cell1.innerHTML = s2t1[i];
                            getName(s2t1[i], cell2);
                            if (sel2.s1t2code != "") {
                                var cell3 = row.insertCell(2);
                                var cell4 = row.insertCell(3);
                                cell3.innerHTML = s2t2[i];
                                getName(s2t2[i], cell4);
                            }
                        }
                    }
                } else {
                    s2.innerHTML = "";
                    s2title.innerHTML = "";
                }
            }
        })
    }
    return (
        <main className="flex flex-col items-center justify-between top-0">
            <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center justify-center py-10 px-10 gap-2" id="content">
                {contextHolder}
                <h1 className="text-3xl font-black">โครงสร้างแผนการเรียน</h1>
                <Form form={form} onFinish={roomFinish}>
                    <Form.Item name="room" label="ระดับชั้น">
                        <InputNumber />
                    </Form.Item>
                    <Form.Item className="-mt-5">
                        <Button htmlType="submit" type="primary" block>ค้นหา</Button>
                    </Form.Item>
                </Form>
                <h1 id="title" className="text-2xl"></h1>
                <h1 id="class" className="text-2xl"></h1>
                <div id="datadiv"></div>
                <h1 id="s1" className="text-2xl"></h1>
                <div id="s1div"></div>
                <h1 id="s2" className="text-2xl"></h1>
                <div id="s2div"></div>
            </div>
        </main>
    )
}


