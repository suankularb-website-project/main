"use client"

import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import React, { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem("น่ารู้กับสวนกุหลาบ", "facts", null ,[
        getItem("ข้อมูลทั่วไป", "general-info"),
        getItem("โครงสร้างการบริหารโรงเรียน", "structure"),
        getItem("วิสัยทัศน์ และพันธกิจ", "vision"),
        getItem("อาคารสถานที่", "building"),
        getItem("หมายเลขโทรศัพท์ภายใน", "phone"),
        getItem("แผนที่และการเดินทาง", "map"),
    ]),
    getItem("ภูมิหลังและเกียรติภูมิ", "background", null, [
        getItem("ประวัติโรงเรียน", "history"),
        getItem("กิจกรรมและประเพณี", "activity"),
        getItem("สิ่งเคารพสักการะ", "worship"),
        getItem("เครื่องแบบนักเรียน", "uniform"),
        getItem("คุณสมบัติของนักเรียน", "property"),
        getItem("เกียรติภูมิ 8 นายกรัฐมนตรี ศิษย์เก่าเกียรติยศ", "hall-of-fame"),
        getItem("บทเพลง", "song"),
        getItem("กองลูกเสือโรงเรียนสวนกุหลาบวิทยาลัย", "scout"),
        getItem("นิทรรศการวิชาการ", "exhibition"),
        getItem("กิจกรรมชุมนุม", "club"),
    ]),
    getItem("วิชาการสวนกุหลาบฯ", "academic", null, [
        getItem("โครงสร้างแผนการเรียน", "course"),
        getItem("ประมวลรายวิชา", "subjects"),
        getItem("โครงการพิเศษ", "programs", null, [
            getItem("GATE Program", "gate"),
            getItem("EPLUS+ Program", "eplus"),
        ])
    ]),
    getItem("บุคลากร", "staff", null, [
        getItem("คณะผู้บริหาร", "executive"),
        getItem("คณะครูผู้สอน", "teacher"),
        getItem("คณะกรรมการระดับชั้น", "committee"),
    ]),
    getItem("องค์กร", "organization", null, [
        getItem("สมาคมศิษย์เก่าสวนกุหลาบวิทยาลัย ในพระบรมราชุปถัมถ์", "alumni"),
        getItem("สมาคมผู้ปกครองและครูสวนกุหลาบวิทยาลัย", "skpta"),
        getItem("มูลนิธิสวนกุหลาบวิทยาลัย", "foundation"),
        getItem("เครือข่ายผู้ปกครองโรงเรียนสวนกุหลาบวิทยาลัย", "parents"),
        getItem("คณะกรรมการสถานศึกษาขั้นพื้นฐาน", "institution-committee"),
    ])
]

const rootSubmenuKeys = ["facts", "background", "academic", "staff", "organization"];
const secondarySubmenuKeys = ["course", "subjects", "programs"];
const tertiarySubmenuKeys = ["middle", "high"];

const Sidebar: React.FC = () => {
    const router = useRouter();
    const [openKeys, setOpenKeys] = useState(['sub1']);

    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    const onClick: MenuProps['onClick'] = (key) => {
        const path = key.keyPath.filter(k => k !== "rc-menu-more").map((e, i, a) => a[(a.length - 1) - i]).join("/");
        router.push(`/about/${path}`);
    }
    
    return (
        <div className="flex float-left w-full sm:w-52 max-h-[calc(100vh-71px)] overflow-auto">
            <div className="hidden sm:block float-left">
                <Menu
                    mode="inline"
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                    onClick={onClick}
                    items={items}
                    inlineIndent={16}
                    style={{ overflow: "auto", height: "75vh", width: "200px" }}
                />
            </div>
            <div className="block sm:hidden float-left w-full">
                <Menu
                    mode="horizontal"
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                    onClick={onClick}
                    items={items}
                    inlineIndent={16}
                    theme="dark"
                    style={{ overflow: "auto", width: "100%" }}
                />
            </div>
        </div>
        
    )
}

export default Sidebar;