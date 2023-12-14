"use client"; // Table components require client due to stringify function not available in serverside rendering.

import { Table, Divider } from "antd";
import phone from "@/config/info/phone.json";

const { Column } = Table;

export default function General() {
    return (
        <main className="flex flex-col items-center justify-between top-0 pt-0">
            <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center justify-center py-10 px-10 gap-2" id="content">
                <h1 className="text-lg lg:text-2xl font-bold">หมายเลขโทรศัพท์ภายใน</h1>
                <h2 className="text-xl font-bold">หมายเลขโทรศัพท์สายตรง</h2>
                <Table dataSource={phone.direct}>
                    <Column title="โทรศัพท์สายตรง" dataIndex="name" key="name" />
                    <Column title="หมายเลข" dataIndex="tel" key="tel" />
                </Table>
                <Divider />
                <h2 className="text-xl font-bold">หมายเลขโทรศัพท์ภายใน</h2>
                <Table dataSource={phone.data}>
                    <Column title="อาคาร" dataIndex="building" key="building" />
                    <Column title="หน่วยงาน" dataIndex="name" key="name" />
                    <Column title="หมายเลข" dataIndex="tel" key="tel" />
                </Table>
            </div>
        </main>
    )
}