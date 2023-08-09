'use client'

import Image from 'next/image'
import { createContext } from "react";
import { Container } from 'react-bootstrap'

const Context = createContext();

export default function SciTech() {
    return (
        <><div className='d-flex res-bg align-items-center page-cov' id='cover'>
            <Container className="justify-content-end align-items-center text-center">
                <a className="cover-title font-black">กลุ่มสาระการเรียนรู้สุขศึกษาและพลศึกษา</a><br />
            </Container>
        </div>
        <div className="anc">
            <Container className="d-table justify-content-center align-items-center align-middle text-center m-auto" id="main">
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/วีรชัย%20คำสมหมาย.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายวีรชัย คำสมหมาย</p>
                        <p className="font-bold text-center anc-text">พลศึกษา - หัวหน้ากลุ่มสาระฯ</p>
                    </div>
                </a>
            </Container>
            <Container className="d-table justify-content-center align-items-center align-middle text-center m-auto" id="main">
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/มัณฑนา%20ทับทิม.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.มัณฑนา ทับทิม</p>
                        <p className="font-bold text-center anc-text">สุขศึกษา</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/เขมศรี%20จิรารัตน์.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.เขมศรี จิรารัตน์</p>
                        <p className="font-bold text-center anc-text">สุขศึกษา</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/มณเฑียร%20กลิ่นเขียว.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายมณเฑียร กลิ่นเขียว</p>
                        <p className="font-bold text-center anc-text">พลศึกษา</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/ดาวเรือง%20บุปผา.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.ดาวเรือง บุปผา</p>
                        <p className="font-bold text-center anc-text">สุขศึกษา</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/อภิชัย%20สินแสง.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายอภิชัย สินแสง</p>
                        <p className="font-bold text-center anc-text">พลศึกษา</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/รุสมัน%20%20มะนอ.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายรุสมัน มะนอ</p>
                        <p className="font-bold text-center anc-text">สุขศึกษา</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/_admin/cover_subgroup/19_logo.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายคึกฤทธิ์ สิทธิฤทธิ์</p>
                        <p className="font-bold text-center anc-text">พลศึกษา</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/_admin/cover_subgroup/19_logo.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.สุชินันท์ งามสมชนม์</p>
                        <p className="font-bold text-center anc-text">สุขศึกษา</p>
                    </div>
                </a>
            </Container>
        </div>
        <br />
        <div className="footer d-flex pt-5 pb-5">
            <Container>
                <div className="float-start">
                    <a className="font-black footer-title">โรงเรียนสวนกุหลาบวิทยาลัย</a>
                    <br />
                    <a className="font-black">88 ถนนตรีเพชร แขวงวังบูรพาภิรมย์ เขตพระนคร กรุงเทพมหานคร 10200</a>
                </div>
                <div className="float-end text-end">
                    <a className="font-normal">ข่าวสาร</a><br />
                    <a className="font-normal">วิชาการ</a><br />
                    <a className="font-normal" href="/about/staffs">บุคลากร</a><br />
                    <a className="font-normal">คลังรูปภาพ</a><br />
                    <a className="font-normal">เกี่ยวกับโรงเรียน</a>
                </div>
            </Container>
        </div></>
    )
}