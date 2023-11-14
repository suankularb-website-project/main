"use client"

import classes from "@/config/timetable/classes.json";
import { Space, Select, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type classId = keyof typeof classes;

const levels = ["1", "2", "3", "4", "5", "6"] as classId[];

const TimetableForm: React.FC = () => {
    const router = useRouter();

    const [level, setLevel] = useState(classes[levels[0] as classId]);
    const [currentClass, setCurrentClass] = useState(classes[levels[0] as classId][0]);

    const handleLevelChange = (value: classId) => {
        setLevel(classes[value]);
        setCurrentClass(classes[value][0]);
    }

    const handleClassChange = (value: classId | string) => {
        setCurrentClass(value as classId);
    }

    const handleSubmit = () => {
        router.push(`/timetable/${currentClass}`)
    }
    return (
        <Space wrap>
            <p className="pt-1">มัธยมศึกษาปีที่</p>
            <Select defaultValue={levels[0]} onChange={handleLevelChange} options={levels.map((level) => ({ label: level, value: level }))} />
            <p className="pt-1">ห้องเรียน</p>
            <Select value={currentClass} onChange={handleClassChange} options={level.map((level) => ({ label: level, value: level }))} />
            <Button type="primary" onClick={() => handleSubmit()}>ค้นหา</Button>
        </Space>
            
    )
}

export default TimetableForm;