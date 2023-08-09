'use client'

import Image from 'next/image'
import { createContext } from "react";
import { Container } from 'react-bootstrap'

const Context = createContext();

export default function Home() {
    return (
        <><div className='d-flex res-bg align-items-center' id='cover'>
            <Container className="justify-content-end align-items-center text-right">
                <a className="cover-welcome font-black">ยินดีต้อนรับเข้าสู่เว็บไซต์</a><br />
                <a className="cover-title font-black">โรงเรียน<span style={{ color: "rgb(252, 3, 232)" }}>สวนกุหลาบ</span><span style={{ color: "rgb(3, 235, 252)" }}>วิทยาลัย</span></a><br />
                <a className="cover-subtitle font-normal">โรงเรียนสวนกุหลาบวิทยาลัยเป็นสถาบันการศึกษาชั้นนำในเวทีโลก</a><br />
                <a className="cover-subtitle font-normal">สร้างสุภาพบุรุษสวนกุหลาบที่มีความสุข บนพื้นฐานคุณธรรม และวิถีความเป็นไทย</a><br /><br /><br />
                <a href='#main' className="cover-button font-black">เข้าสู่เว็บไซต์</a>
            </Container>
        </div>
        <div className="anc">
            <Container className="d-table justify-content-center align-items-center align-middle text-center m-auto pt-36" id="main">
                <a href="https://drive.google.com/file/d/1fZr3L8LTNfLx-Mo1YhlQ6oMt4rj2iTII/view?pli=1" target="_blank">
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/userfiles/images/Screenshot%202023-07-27%20210350.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">ประกาศผลการแข่งขันครอสเวิร์ด 2023</p>
                    </div>
                </a>
                <a href="https://drive.google.com/file/d/1pnucivAqLhsda8pfvY2kHAyvKo0L_7VG/view?usp=sharing" target="_blank">
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/userfiles/images/Screenshot%202023-07-27%20204802.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">ประกาศรับสมัครลูกจ้างชั่วคราว</p>
                    </div>
                </a>
                <a href="https://drive.google.com/file/d/1SBaoc16VZl8IX_rrg4zshh4DQJv347Ti/view?usp=sharing" target="_blank">
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/userfiles/images/Screenshot%202023-07-25%20154217.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">ผลการสอบคัดเลือกลูกจ้างชั่วคราว</p>
                    </div>
                </a>
                <a href="http://96.30.126.41/sk/userfiles/images/S__22610088.jpg" target="_blank">
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/userfiles/images/S__22610088.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">การจำหน่ายบัตรเข้าชมจตุรมิตรสามัคคี</p>
                    </div>
                </a>
                <a href="http://96.30.126.41/sk/userfiles/files/460543034045235489-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%A3%E0%B8%84%E0%B8%B1%E0%B8%94%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%20%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%AD%E0%B8%9A%E0%B8%A3%E0%B8%A1%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%82%E0%B8%AD%E0%B8%A5%E0%B8%B4%E0%B8%A1%E0%B8%9B%E0%B8%B4%E0%B8%81%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%20%E0%B8%AA%E0%B8%AD%E0%B8%A7%E0%B8%99_%20%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C.pdf" target="_blank">
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/userfiles/images/image_6487327%20(7)(1).JPG"></img>
                        </div>
                        <p className="font-bold text-center anc-text">ประกาศสมัครสอบ สอวน. ภูมิศาสตร์</p>
                    </div>
                </a>
                <a href="http://96.30.126.41/sk/userfiles/files/460536248550293586-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%20%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%A3%E0%B8%84%E0%B8%B1%E0%B8%94%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%A2%201%20%E0%B8%AA%E0%B8%AD%E0%B8%A7%E0%B8%99_%20%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%94%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C.pdf" target="_blank">
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/userfiles/images/image_6487327%20(8).JPG"></img>
                        </div>
                        <p className="font-bold text-center anc-text">ประกาศสมัครสอบ สอวน. ดาราศาสตร์</p>
                    </div>
                </a>
                <a href="https://smartjob.doe.go.th/" target="_blank">
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B8%A1%E0%B8%B5%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%B3.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">แพลตฟอร์ม "ไทยมีงานทำ"</p>
                    </div>
                </a>
                <a href="" target="_blank">
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-text">
                            <img src="more.png"></img>
                        </div>
                        <p className="font-bold text-center anc-text">ข่าวสารอื่นๆ</p>
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