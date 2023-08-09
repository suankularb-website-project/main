'use client'

import Image from 'next/image'
import { createContext } from "react";
import { Container } from 'react-bootstrap'

const Context = createContext();

export default function TeacherGroup() {
    return (
        <><div className='d-flex res-bg align-items-center page-cov' id='cover'>
            <Container className="justify-content-end align-items-center text-center">
                <a className="cover-title font-black">คณาจารย์ตามกลุ่มสาระฯ</a><br />
            </Container>
        </div>
        <div className="anc">
            <Container className="d-table justify-content-center align-items-center align-middle text-center m-auto" id="main">
                <a href="/staff/teachergroup/scitech" target="_parent">
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/_admin/cover_subgroup/2_logo.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">วิทยาศาสตร์และเทคโนโลยี</p>
                    </div>
                </a>
                <a href="/staff/teachergroup/math" target="_parent">
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/_admin/cover_subgroup/29_logo.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">คณิตศาสตร์</p>
                    </div>
                </a>
                <a href="/staff/teachergroup/foreign" target="_parent">
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/_admin/cover_subgroup/4_logo.JPG"></img>
                        </div>
                        <p className="font-bold text-center anc-text">ภาษาต่างประเทศ</p>
                    </div>
                </a>
                <a href="/staff/teachergroup/thai" target="_parent">
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/_admin/cover_subgroup/3_logo.png"></img>
                        </div>
                        <p className="font-bold text-center anc-text">ภาษาไทย</p>
                    </div>
                </a>
                <a href="/staff/teachergroup/thai" target="_parent">
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/_admin/cover_subgroup/5_logo.gif"></img>
                        </div>
                        <p className="font-bold text-center anc-text">สังคมศึกษา ศาสนาและวัฒนธรรม</p>
                    </div>
                </a>
                <a href="/staff/teachergroup/occu" target="_parent">
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/_admin/cover_subgroup/6_logo.png"></img>
                        </div>
                        <p className="font-bold text-center anc-text">การงานอาชีพ</p>
                    </div>
                </a>
                <a href="/staff/teachergroup/health" target="_parent">
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/_admin/cover_subgroup/8_logo.png"></img>
                        </div>
                        <p className="font-bold text-center anc-text">สุขศึกษาและพลศึกษา</p>
                    </div>
                </a>
                <a href="/staff/teachergroup/health" target="_parent">
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/_admin/cover_subgroup/7_logo.JPG"></img>
                        </div>
                        <p className="font-bold text-center anc-text">ศิลปะ</p>
                    </div>
                </a>
                <a href="/staff/teachergroup/health" target="_parent">
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/_admin/cover_subgroup/26_logo.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">กิจกรรมพัฒนาผู้เรียน(แนะแนว)</p>
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
                    <a className="font-normal" href="/staff">บุคลากร</a><br />
                    <a className="font-normal">คลังรูปภาพ</a><br />
                    <a className="font-normal">เกี่ยวกับโรงเรียน</a>
                </div>
            </Container>
        </div></>
    )
}