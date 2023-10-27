"use client";

import Image from "next/image";
import Link from "next/link";
import { Alert, Menu, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import m1 from "../../../../config/committee/m1.json"
import m2 from "../../../../config/committee/m2.json"
import m3 from "../../../../config/committee/m3.json"
import m4 from "../../../../config/committee/m4.json"
import m5 from "../../../../config/committee/m5.json"
import m6 from "../../../../config/committee/m6.json"
import leader from "../../../../config/committee/leader.json"
import React, { Component } from "react";


export class General extends Component {
    render() {
        return (
                <main className="flex flex-col items-center justify-between top-0 pt-10 xxs:pt-0">
                    <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center justify-center py-10 px-10 gap-2" id="content">
                        <h1 style={{fontSize:"5vh"}}>คณะกรรมการระดับชั้น</h1>
                        <center>
                            <Alert
                                message={
                                    <table style={{width: "30vw"}}>
                                        <tbody>
                                            <tr>
                                                <th colSpan={2}>คณะกรรมการระดับชั้น มัธยมศึกษาปีที่ 1</th>
                                            </tr>
                                            {leader.map((item, i) => {
                                                if (i < 5) {
                                                    return (
                                                        <tr key={i}>
                                                            <td style={{textAlign: "left"}}>{item.name}</td>
                                                            <td style={{textAlign: "right"}}>{item.type}</td>
                                                        </tr>
                                                    )
                                                }
                                            })}
                                        </tbody>
                                    </table>
                                }
                                type="info"
                            />
                        </center>
                        <center>
                            <div style={{textAlign: "center"}}>
                                <table style={{border: "1px solid white", width: "40vw"}}>
                                    <tbody>
                                        <tr>
                                            <th style={{width: "5vw", border: "1px solid white"}}>ชั้นเรียน</th>
                                            <th colSpan={2} style={{width: "27.5vw", border: "1px solid white"}}>ครูที่ปรึกษา</th>
                                            <th style={{width: "7.5vw", border: "1px solid white", paddingLeft: "5px", paddingRight: "5px"}}>ห้องเรียนประจำ</th>
                                        </tr>
                                        {m1.map((item, i) => (
                                            <tr key={i}>
                                                <td style={{border: "1px solid white", width: "5vw"}}>{item.classroom}</td>
                                                <td style={{textAlign: "left",border: "1px solid white", paddingLeft: "5px", width: "13.75vw"}}>{item.teacher1}</td>
                                                <td style={{textAlign: "left",border: "1px solid white", paddingLeft: "5px", width: "13.75vw"}}>{item.teacher2}</td>
                                                <td style={{border: "1px solid white", width: "7.5vw"}}>{item.homeroom}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </center>
                        <center>
                            <Alert
                                message={
                                    <table style={{width: "30vw"}}>
                                        <tbody>
                                            <tr>
                                                <th colSpan={2}>คณะกรรมการระดับชั้น มัธยมศึกษาปีที่ 2</th>
                                            </tr>
                                            {leader.map((item, i) => {
                                                if (i >= 5 && i < 10) {
                                                    return (
                                                        <tr key={i}>
                                                            <td style={{textAlign: "left"}}>{item.name}</td>
                                                            <td style={{textAlign: "right"}}>{item.type}</td>
                                                        </tr>
                                                    )
                                                }
                                            })}
                                        </tbody>
                                    </table>
                                }
                                type="info"
                            />
                        </center>
                        <center>
                            <div style={{textAlign: "center"}}>
                                <table style={{border: "1px solid white", width: "40vw"}}>
                                    <tbody>
                                        <tr>
                                            <th style={{width: "5vw", border: "1px solid white"}}>ชั้นเรียน</th>
                                            <th colSpan={2} style={{width: "27.5vw", border: "1px solid white"}}>ครูที่ปรึกษา</th>
                                            <th style={{width: "7.5vw", border: "1px solid white", paddingLeft: "5px", paddingRight: "5px"}}>ห้องเรียนประจำ</th>
                                        </tr>
                                        {m2.map((item, i) => (
                                            <tr key={i}>
                                                <td style={{border: "1px solid white", width: "5vw"}}>{item.classroom}</td>
                                                <td style={{textAlign: "left",border: "1px solid white", paddingLeft: "5px", width: "13.75vw"}}>{item.teacher1}</td>
                                                <td style={{textAlign: "left",border: "1px solid white", paddingLeft: "5px", width: "13.75vw"}}>{item.teacher2}</td>
                                                <td style={{border: "1px solid white", width: "7.5vw"}}>{item.homeroom}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </center>
                        <center>
                            <Alert
                                message={
                                    <table style={{width: "30vw"}}>
                                        <tbody>
                                            <tr>
                                                <th colSpan={2}>คณะกรรมการระดับชั้น มัธยมศึกษาปีที่ 3</th>
                                            </tr>
                                            {leader.map((item, i) => {
                                                if (i >= 10 && i < 15) {
                                                    return (
                                                        <tr key={i}>
                                                            <td style={{textAlign: "left"}}>{item.name}</td>
                                                            <td style={{textAlign: "right"}}>{item.type}</td>
                                                        </tr>
                                                    )
                                                }
                                            })}
                                        </tbody>
                                    </table>
                                }
                                type="info"
                            />
                        </center>
                        <center>
                            <div style={{textAlign: "center"}}>
                                <table style={{border: "1px solid white", width: "40vw"}}>
                                    <tbody>
                                        <tr>
                                            <th style={{width: "5vw", border: "1px solid white"}}>ชั้นเรียน</th>
                                            <th colSpan={2} style={{width: "27.5vw", border: "1px solid white"}}>ครูที่ปรึกษา</th>
                                            <th style={{width: "7.5vw", border: "1px solid white", paddingLeft: "5px", paddingRight: "5px"}}>ห้องเรียนประจำ</th>
                                        </tr>
                                        {m3.map((item, i) => (
                                            <tr key={i}>
                                                <td style={{border: "1px solid white", width: "5vw"}}>{item.classroom}</td>
                                                <td style={{textAlign: "left",border: "1px solid white", paddingLeft: "5px", width: "13.75vw"}}>{item.teacher1}</td>
                                                <td style={{textAlign: "left",border: "1px solid white", paddingLeft: "5px", width: "13.75vw"}}>{item.teacher2}</td>
                                                <td style={{border: "1px solid white", width: "7.5vw"}}>{item.homeroom}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </center>
                        <center>
                            <Alert
                                message={
                                    <table style={{width: "30vw"}}>
                                        <tbody>
                                            <tr>
                                                <th colSpan={2}>คณะกรรมการระดับชั้น มัธยมศึกษาปีที่ 4</th>
                                            </tr>
                                            {leader.map((item, i) => {
                                                if (i >= 15 && i < 20) {
                                                    return (
                                                        <tr key={i}>
                                                            <td style={{textAlign: "left"}}>{item.name}</td>
                                                            <td style={{textAlign: "right"}}>{item.type}</td>
                                                        </tr>
                                                    )
                                                }
                                            })}
                                        </tbody>
                                    </table>
                                }
                                type="info"
                            />
                        </center>
                        <center>
                            <div style={{textAlign: "center"}}>
                                <table style={{border: "1px solid white", width: "40vw"}}>
                                    <tbody>
                                        <tr>
                                            <th style={{width: "5vw", border: "1px solid white"}}>ชั้นเรียน</th>
                                            <th colSpan={2} style={{width: "27.5vw", border: "1px solid white"}}>ครูที่ปรึกษา</th>
                                            <th style={{width: "7.5vw", border: "1px solid white", paddingLeft: "5px", paddingRight: "5px"}}>ห้องเรียนประจำ</th>
                                        </tr>
                                        {m4.map((item, i) => (
                                            <tr key={i}>
                                                <td style={{border: "1px solid white", width: "5vw"}}>{item.classroom}</td>
                                                <td style={{textAlign: "left",border: "1px solid white", paddingLeft: "5px", width: "13.75vw"}}>{item.teacher1}</td>
                                                <td style={{textAlign: "left",border: "1px solid white", paddingLeft: "5px", width: "13.75vw"}}>{item.teacher2}</td>
                                                <td style={{border: "1px solid white", width: "7.5vw"}}>{item.homeroom}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </center>
                        <center>
                            <Alert
                                message={
                                    <table style={{width: "30vw"}}>
                                        <tbody>
                                            <tr>
                                                <th colSpan={2}>คณะกรรมการระดับชั้น มัธยมศึกษาปีที่ 5</th>
                                            </tr>
                                            {leader.map((item, i) => {
                                                if (i >= 20 && i < 25) {
                                                    return (
                                                        <tr key={i}>
                                                            <td style={{textAlign: "left"}}>{item.name}</td>
                                                            <td style={{textAlign: "right"}}>{item.type}</td>
                                                        </tr>
                                                    )
                                                }
                                            })}
                                        </tbody>
                                    </table>
                                }
                                type="info"
                            />
                        </center>
                        <center>
                            <div style={{textAlign: "center"}}>
                                <table style={{border: "1px solid white", width: "40vw"}}>
                                    <tbody>
                                        <tr>
                                            <th style={{width: "5vw", border: "1px solid white"}}>ชั้นเรียน</th>
                                            <th colSpan={2} style={{width: "27.5vw", border: "1px solid white"}}>ครูที่ปรึกษา</th>
                                            <th style={{width: "7.5vw", border: "1px solid white", paddingLeft: "5px", paddingRight: "5px"}}>ห้องเรียนประจำ</th>
                                        </tr>
                                        {m5.map((item, i) => (
                                            <tr key={i}>
                                                <td style={{border: "1px solid white", width: "5vw"}}>{item.classroom}</td>
                                                <td style={{textAlign: "left",border: "1px solid white", paddingLeft: "5px", width: "13.75vw"}}>{item.teacher1}</td>
                                                <td style={{textAlign: "left",border: "1px solid white", paddingLeft: "5px", width: "13.75vw"}}>{item.teacher2}</td>
                                                <td style={{border: "1px solid white", width: "7.5vw"}}>{item.homeroom}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </center>
                        <center>
                            <Alert
                                message={
                                    <table style={{width: "30vw"}}>
                                        <tbody>
                                            <tr>
                                                <th colSpan={2}>คณะกรรมการระดับชั้น มัธยมศึกษาปีที่ 6</th>
                                            </tr>
                                            {leader.map((item, i) => {
                                                if (i >= 25 && i < 30) {
                                                    return (
                                                        <tr key={i}>
                                                            <td style={{textAlign: "left"}}>{item.name}</td>
                                                            <td style={{textAlign: "right"}}>{item.type}</td>
                                                        </tr>
                                                    )
                                                }
                                            })}
                                        </tbody>
                                    </table>
                                }
                                type="info"
                            />
                        </center>
                        <center>
                            <div style={{textAlign: "center"}}>
                                <table style={{border: "1px solid white", width: "40vw"}}>
                                    <tbody>
                                        <tr>
                                            <th style={{width: "5vw", border: "1px solid white"}}>ชั้นเรียน</th>
                                            <th colSpan={2} style={{width: "27.5vw", border: "1px solid white"}}>ครูที่ปรึกษา</th>
                                            <th style={{width: "7.5vw", border: "1px solid white", paddingLeft: "5px", paddingRight: "5px"}}>ห้องเรียนประจำ</th>
                                        </tr>
                                        {m6.map((item, i) => (
                                            <tr key={i}>
                                                <td style={{border: "1px solid white", width: "5vw"}}>{item.classroom}</td>
                                                <td style={{textAlign: "left",border: "1px solid white", paddingLeft: "5px", width: "13.75vw"}}>{item.teacher1}</td>
                                                <td style={{textAlign: "left",border: "1px solid white", paddingLeft: "5px", width: "13.75vw"}}>{item.teacher2}</td>
                                                <td style={{border: "1px solid white", width: "7.5vw"}}>{item.homeroom}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </center>
                    </div>
                </main>
        );
    }
}

export default General;
