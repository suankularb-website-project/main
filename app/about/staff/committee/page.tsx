"use client";

import Image from "next/image";
import Link from "next/link";
import { Alert, Menu, Space, Table, Tag, Divider } from "antd";
import type { ColumnsType } from "antd/es/table";
import m1 from "@/config/committee/m1.json"
import m2 from "@/config/committee/m2.json"
import m3 from "@/config/committee/m3.json"
import m4 from "@/config/committee/m4.json"
import m5 from "@/config/committee/m5.json"
import m6 from "@/config/committee/m6.json"
import leaders from "@/config/committee/leader.json"
import React, { Component } from "react";

const classes = [m1, m2, m3, m4, m5, m6]

const leaderColumns: ColumnsType<any> = [
    {
        title: "ชื่อ",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "ตำแหน่ง",
        dataIndex: "type",
        key: "type",
    },
];

const classColumns: ColumnsType<any> = [
    {
        title: "ชั้นเรียน",
        dataIndex: "classroom",
        key: "classroom"
    },
    {
        title: "ครูที่ปรึกษา",
        dataIndex: "teacher",
        key: "teacher",
        render: (text: any, record: any, index: any) => (
            <span>{record.teacher1} | {record.teacher2}</span>
        )
    },
    {
        title: "ห้องเรียนประจำ",
        dataIndex: "homeroom",
        key: "homeroom"
    }
]

export default function Committee() {
    return (
        <main className="flex flex-col items-center justify-between top-0 pt-10 xxs:pt-0">
            <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center justify-center py-10 px-10 gap-2" id="content">
                <div className="flex flex-col gap-2 w-full">
                    {
                        leaders.map((item, index) => (
                            <div className="flex flex-col gap-2 w-full" key={index}>
                                <h1 className="text-3xl font-black">มัธยมศึกษาปีที่ {index + 1}</h1>
                                <h2 className="text-2xl font-medium">คณะกรรมการระดับชั้น มัธยมศึกษาปีที่ {index + 1}</h2>
                                <Table columns={leaderColumns} dataSource={item}></Table>
                                <h2 className="text-2xl font-bold">ห้องเรียนประจำ</h2>
                                <Table columns={classColumns} dataSource={classes[index]} className="overflow-auto w-full"></Table>
                                {index < leaders.length ? <Divider /> : null}
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}