import classes from "@/config/timetable/classes.json";
import timetable from "@/config/timetable.json"
import m1 from "@/config/committee/m1.json"
import m2 from "@/config/committee/m2.json"
import m3 from "@/config/committee/m3.json"
import m4 from "@/config/committee/m4.json"
import m5 from "@/config/committee/m5.json"
import m6 from "@/config/committee/m6.json"
import info from "@/config/info.json"
import React, { useEffect } from "react";
import parse from "html-react-parser";

export function generateStaticParams() {
    return Object.values(classes).flat().map((item: any, index: any) => ({
        class: item
    }));
}

export default function TimetablePage({ params }: { params: { class: string } }) {
    function Timetable(classr: string) {
        let list = 1;
        const days: string[] = ["จันทร์", "อังคาร", "พุธ", "พฤหัสฯ", "ศุกร์"]
        const period: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
        let data: string = `
            <table id="timetable" style="border: 1px solid white; borderCollapse: collapse; width: 70vw;">
                <tbody>
                    <tr style="font-size: 95%;">
                        <th></th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th>10</th>
                    </tr>
                    <tr style="font-size: 95%;">
                        <th>เวลา</th>
                        <th>08:30-09:20</th>
                        <th>09:20-10:10</th>
                        <th>10:10-11:00</th>
                        <th>11:00-11:50</th>
                        <th>11:50-12:40</th>
                        <th>12:40-13:30</th>
                        <th>13:30-14:20</th>
                        <th>14:20-15:10</th>
                        <th>15:10-16:00</th>
                        <th>16:00-16:50</th>
                    </tr>
                    <tr style="font-size: 95%; text-align: center;">
                        <td>ร่นคาบ</td>
                        <td>08:30-09:10</td>
                        <td>09:10-09:50</td>
                        <td>09:50-10:30</td>
                        <td>10:30-11:10</td>
                        <td>11:10-11:50</td>
                        <td>11:50-12:30</td>
                        <td>12:30-13:10</td>
                        <td>13:10-13:50</td>
                        <td>13:50-14:30</td>
                        <td>14:30-15:10</td>
                    </tr>
        `

        days.map((item, index) => {
            data = data.concat(`<tr style="border: 1px solid white; borderCollapse: collapse;"><td style="border: 1px solid white; borderCollapse: collapse; text-align: center;">${item}</td>`)
            period.map((pitem, pindex) => {
                let get: boolean = false;
                timetable.map((titem, tindex) => {
                    if (titem.day == list.toString() && titem.period == pitem && (titem.class == classr || titem.class == classr.toString()[0] )) {
                        let subj: string = titem.subject, teacher: string = titem.teacher, room: string = titem.room;
                        if (titem.subject[0] == '!') {
                            subj = titem.subject.slice(1).split(',')[0];
                        }
                        if (titem.teacher[0] == '!' || (titem.teacher[0] == '&' && titem.teacher.length == 4)) {
                            teacher = titem.teacher.slice(1);
                        } else if (titem.teacher[0] == '&') {
                            teacher = "คณะครู";
                        } else if (titem.teacher[0] == '*') {
                            teacher = "ครู" + titem.teacher.slice(1);
                        } else if (!(titem.teacher.length == 2 && titem.teacher[0] == 'T')) {
                            teacher = "ครู" + teacher;
                        }
                        if (titem.room[0] == '!') {
                            room = titem.room.slice(1);
                        }
                        data = data.concat(`<td width="9.5%" style="border: 1px solid white; borderCollapse: collapse; text-align: center;"><span style="font-size: 100%;">${subj}</span><span style="font-size: 90%;"><br />${teacher}<br />${room}</span></td>`)
                        get = true;
                    }
                })
                if (!get) {
                    data = data.concat(`<td width="9.5%" style="border: 1px solid white; borderCollapse: collapse; text-align: center; font-size: 90%;"><br /><br /></td>`)
                }
            })
            data = data.concat("</tr>")
            list++;
        });
        return parse(data + "</tbody></table>");
    }
    return (
        <main className="flex flex-col items-center justify-between top-0">
            <div id="timetable">
                {Timetable(params.class)}
            </div>
        </main>
    )
}