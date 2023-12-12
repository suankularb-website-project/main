"use client"

import Image from "next/image";
import Link from "next/link";
import { Menu } from "antd";
import structure from "@/public/structure.jpg";


export default function Structure() {
    return (
        <main className="flex flex-col items-center justify-between top-0 pt-10 xxs:pt-0">
            <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center justify-center py-10 px-10 gap-2" id="content">
                <h1 className="text-lg lg:text-2xl font-bold">โครงสร้างการบริหารโรงเรียน</h1>
                <Image src={structure} quality={100} alt={"โครงสร้างการบริหารฯ"}/>
            </div>
        </main>
    )
}
