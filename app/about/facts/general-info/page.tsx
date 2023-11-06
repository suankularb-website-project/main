"use client"

import Image from "next/image";
import Link from "next/link";
import { Table, Divider, Col } from "antd";
import studentData from "@/config/info/studentData.json";
import teacherData from "@/config/info/teacherData.json";

const { Column, ColumnGroup } = Table;
const processedStudentData = [
    ...studentData.data,
    {
        key: "total",
        level: "รวมทั้งสิ้น",
        column1: studentData.data.reduce((acc, cur) => acc + Number(cur.column1), 0).toString(),
        column2: studentData.data.reduce((acc, cur) => acc + Number(cur.column2), 0).toString(),
    },
    {
        key: "average",
        level: "จำนวนนักเรียนเฉลี่ยต่อห้อง",
        column1: (studentData.data.reduce((acc, cur) => acc + Number(cur.column1), 0) / studentData.data.length).toFixed(2).toString(),
        column2: (studentData.data.reduce((acc, cur) => acc + Number(cur.column2), 0) / studentData.data.length).toFixed(2).toString(),
    },
    {
        key: "ratio",
        level: "สัดส่วนครู : นักเรียน",
        column1: "ไม่มีข้อมูล",
        column2: `1 : ${(studentData.data.reduce((acc, cur) => acc + Number(cur.column2), 0) / Number(teacherData.data[1].column1)).toFixed(2)}`,
    }
]
const processedTeacherData = [
    ...teacherData.data,
    {
        key: "total",
        type: "รวมทั้งสิ้น",
        column1: teacherData.data.reduce((acc, cur) => acc + Number(cur.column1), 0).toString(),
    }
]

export default function General() {
    return (
        <main className="flex flex-col items-center justify-between top-0 pt-10 xxs:pt-0">
            <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center justify-center py-10 px-10 gap-2" id="content">
                <h1 className="text-3xl font-bold">ข้อมูลทั่วไป</h1>
                <Divider />
                <h2 className="text-xl font-bold">จำนวนนักเรียน</h2>
                <p className="text-lg text-gray-400">ข้อมูลจากงานสารสนเทศ กลุ่มพัฒนาคุณภาพการศึกษา ณ วันที่ {studentData.updatedAt}</p>
                <p className="text-lg">จำนวนนักเรียนทั้งหมด {studentData.data.reduce((acc, cur) => acc + Number(cur.column2), 0).toString()} คน แบ่งออกเป็นระดับชั้นที่เปิดสอน ดังนี้</p>
                <Table dataSource={processedStudentData}>
                    <Column title="ระดับชั้น" dataIndex="level" key="level" />
                    <ColumnGroup title={`จำนวนนักเรียนในระยะ ${studentData.years.length}`}>
                        {
                            studentData.years.map((item, index) => (
                                <Column title={item} dataIndex={`column${index + 1}`} key={`column${index + 1}`} />
                            ))
                        }
                    </ColumnGroup>
                </Table>
                <Divider />
                <h2 className="text-xl font-bold">จำนวนบุคลากร</h2>
                <p className="text-lg text-gray-400">ข้อมูลจากงานสารสนเทศ กลุ่มพัฒนาคุณภาพการศึกษา ณ วันที่ {teacherData.updatedAt}</p>
                <p className="text-lg">จำนวนบุคลากรทั้งหมด {teacherData.data.reduce((acc, cur) => acc + Number(cur.column1), 0).toString()} คน แบ่งออกตามประเภท ดังนี้</p>
                <Table dataSource={processedTeacherData}>
                    <Column title="ประเภทบุคลากร" dataIndex="type" key="type" />
                    <ColumnGroup title="ปีการศึกษา">
                        {
                            teacherData.years.map((item, index) => (
                                <Column title={item} dataIndex={`column${index + 1}`} key={`column${index + 1}`} />
                            ))
                        }
                    </ColumnGroup>
                </Table>
            </div>
        </main>
    )
}