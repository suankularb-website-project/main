'use client'

import Image from 'next/image'
import { createContext } from "react";
import { Container } from 'react-bootstrap'

const Context = createContext();

export default function SciTech() {
    return (
        <><div className='d-flex res-bg align-items-center page-cov' id='cover'>
            <Container className="justify-content-end align-items-center text-center">
                <a className="cover-title font-black">กลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี</a><br />
            </Container>
        </div>
        <div className="anc">
            <Container className="d-table justify-content-center align-items-center align-middle text-center m-auto" id="main">
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%AB%E0%B8%B1%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%B1%E0%B8%AA%20%E0%B9%80%E0%B8%9E%E0%B9%87%E0%B8%87%E0%B8%AA%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B8%A2%E0%B8%B0.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายหัสวนัส เพ็งสันเทียะ</p>
                        <p className="font-bold text-center anc-text">ชีววิทยา - หัวหน้ากลุ่มสาระฯ</p>
                    </div>
                </a>
            </Container>
            <Container className="d-table justify-content-center align-items-center align-middle text-center m-auto" id="main">
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%88%E0%B8%B8%E0%B8%91%E0%B8%B2%E0%B8%97%E0%B8%B4%E0%B8%9E%E0%B8%A2%E0%B9%8C%20%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%AA%E0%B8%B8%E0%B8%82.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นางจุฑาทิพย์ สวนสุข</p>
                        <p className="font-bold text-center anc-text">ฟิสิกส์</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%A7%E0%B8%AA%E0%B8%B1%E0%B8%99%E0%B8%95%E0%B9%8C%20%E0%B8%AD%E0%B8%A2%E0%B8%B9%E0%B9%88%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%89%E0%B8%AD.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายวสันต์ อยู่เชื้อ</p>
                        <p className="font-bold text-center anc-text">ชีววิทยา</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B9%80%E0%B8%AA%E0%B8%B2%E0%B8%A7%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B9%8C%20%E0%B8%81%E0%B8%B1%E0%B8%87%E0%B8%A7%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%81%E0%B8%B8%E0%B8%A5%E0%B8%97%E0%B8%AD%E0%B8%87.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นางเสาวลักษณ์ กังวานสกุลทอง</p>
                        <p className="font-bold text-center anc-text">เทคโนโลยี</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%9A%E0%B8%B1%E0%B8%8D%E0%B8%8A%E0%B8%B2%E0%B8%9E%E0%B8%A3%20%E0%B8%AD%E0%B8%A3%E0%B8%B8%E0%B8%93%E0%B9%80%E0%B8%A5%E0%B8%B4%E0%B8%A8%E0%B8%AD%E0%B8%B2%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B9%8C.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายบัญชาพร อรุณเลิศอารีย์</p>
                        <p className="font-bold text-center anc-text">ชีววิทยา</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%AD%E0%B8%B1%E0%B8%8D%E0%B8%8A%E0%B8%A5%E0%B8%B5%20%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.อัญชลี มูลแก้ว</p>
                        <p className="font-bold text-center anc-text">ฟิสิกส์</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%9E%E0%B8%A5%E0%B8%AD%E0%B8%A2%E0%B9%84%E0%B8%9E%E0%B8%A5%E0%B8%B4%E0%B8%99%20%E0%B8%A1%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B8%97%E0%B8%AD%E0%B8%87.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.พลอยไพลิน มิ่งทอง</p>
                        <p className="font-bold text-center anc-text">ฟิสิกส์</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%93%E0%B8%B1%E0%B8%90%E0%B8%9E%E0%B8%87%E0%B8%A8%E0%B9%8C%20%E0%B9%81%E0%B8%95%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B9%87%E0%B8%8A%E0%B8%A3%E0%B9%8C.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายณัฐพงศ์ แตงเพ็ชร์</p>
                        <p className="font-bold text-center anc-text">ชีววิทยา</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%9E%E0%B8%A3%E0%B8%A5%E0%B8%A0%E0%B8%B1%E0%B8%AA%20%E0%B9%80%E0%B8%AA%E0%B8%A7%E0%B8%81%E0%B8%B0.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.พรลภัส เสวกะ</p>
                        <p className="font-bold text-center anc-text">เคมี</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%AD%E0%B8%B1%E0%B8%8D%E0%B8%8A%E0%B8%B2%E0%B8%99%E0%B8%B2%20%E0%B8%99%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B8%AD%E0%B8%99%E0%B8%B8%E0%B8%AA%E0%B8%AA%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B8%81%E0%B8%B8%E0%B8%A5.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.อัญชานา นิ่มอนุสสรณ์กุล</p>
                        <p className="font-bold text-center anc-text">เคมี</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B9%8C%20%E0%B8%A1%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%A1.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายประจักษ์ มิ่งทุม</p>
                        <p className="font-bold text-center anc-text">เคมี</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%9B%E0%B8%B4%E0%B8%A2%E0%B8%A1%E0%B8%B2%E0%B8%A8%20%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%A1%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B9%8C.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.ปิยมาศ ศรีสมพันธ์</p>
                        <p className="font-bold text-center anc-text">เคมี</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%8D%E0%B8%B2%E0%B8%98%E0%B8%B4%E0%B8%9B%20%E0%B8%84%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%A5%E0%B9%88%E0%B8%B3.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายญาธิป คล้ายกล่ำ</p>
                        <p className="font-bold text-center anc-text">ชีววิทยา</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B9%80%E0%B8%AD%E0%B8%81%E0%B8%9E%E0%B8%87%E0%B8%A9%E0%B9%8C%20%E0%B8%AB%E0%B8%B8%E0%B8%A1%E0%B9%81%E0%B8%9E%E0%B8%87.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายเอกพงษ์ หุมแพง</p>
                        <p className="font-bold text-center anc-text">วิทยาศาสตร์พื้นฐาน</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B9%8C%20%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B9%8C%E0%B8%AA%E0%B8%A7%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%B4%E0%B9%8C.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายพัฒนพันธ์ สิงห์สวัสดิ์</p>
                        <p className="font-bold text-center anc-text">ชีววิทยา</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%A7%E0%B8%A3%E0%B8%A3%E0%B8%93%E0%B8%A7%E0%B8%B4%E0%B8%A0%E0%B8%B2%20%E0%B8%A0%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B2%E0%B8%81.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.วรรณวิภา ภู่มาก</p>
                        <p className="font-bold text-center anc-text">เคมี</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%82%E0%B8%A7%E0%B8%B1%E0%B8%8D%E0%B8%A4%E0%B8%94%E0%B8%B5%20%E0%B8%90%E0%B8%B4%E0%B8%95%E0%B8%B2%E0%B8%9B%E0%B8%B8%E0%B8%A3%E0%B9%80%E0%B8%8A%E0%B8%A9%E0%B8%90%E0%B9%8C.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.ขวัญฤดี ฐิตาปุรเชษฐ์</p>
                        <p className="font-bold text-center anc-text">ชีววิทยา</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%AA%E0%B8%B4%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B8%81%E0%B8%A3%20%E0%B8%AA%E0%B8%B1%E0%B8%A1%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B9%8C%E0%B8%81%E0%B8%B2%E0%B8%8D%E0%B8%88%E0%B8%99%E0%B9%8C.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายสิทธิกร สัมพันธ์กาญจน์</p>
                        <p className="font-bold text-center anc-text">วิทยาศาสตร์พื้นฐาน</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%99%E0%B8%B4%E0%B8%A0%E0%B8%B2%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%99%E0%B9%8C%20%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B9%84%E0%B8%82%E0%B9%88.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.นิภารัตน์ รูปไข่</p>
                        <p className="font-bold text-center anc-text">เทคโนโลยี</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%93%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B9%83%E0%B8%A2%E0%B8%97%E0%B8%B2.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.กรรณิกา ใยทา</p>
                        <p className="font-bold text-center anc-text">ฟิสิกส์</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%98%E0%B8%A7%E0%B8%B1%E0%B8%8A%E0%B8%8A%E0%B8%B1%E0%B8%A2%20%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A5%E0%B9%89%E0%B8%AD%E0%B8%A1.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายธวัชชัย สุขล้อม</p>
                        <p className="font-bold text-center anc-text">โลก ดาราศาสตร์ และอวกาศ</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%AA%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A0%E0%B8%A3%E0%B8%93%E0%B9%8C%20%E0%B8%95%E0%B8%B2%E0%B8%9B%E0%B8%99%E0%B8%B2%E0%B8%99%E0%B8%99%E0%B8%97%E0%B9%8C.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.สุภาภรณ์ ตาปนานนท์</p>
                        <p className="font-bold text-center anc-text">ฟิสิกส์</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%8A%E0%B8%A1%E0%B8%9E%E0%B8%B9%E0%B8%99%E0%B8%B8%E0%B8%8A%20%E0%B9%80%E0%B8%9E%E0%B9%87%E0%B8%8D%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.ชมพูนุช เพ็ญจันทร์</p>
                        <p className="font-bold text-center anc-text">ฟิสิกส์</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%9B%E0%B8%B4%E0%B8%A2%E0%B8%B2%E0%B8%A0%E0%B8%A3%E0%B8%93%E0%B9%8C%20%E0%B8%AB%E0%B8%AD%E0%B8%A1%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นางปิยาภรณ์ สุวรรณศรี</p>
                        <p className="font-bold text-center anc-text">ฟิสิกส์</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%AA%E0%B8%B8%E0%B8%81%E0%B8%B1%E0%B8%8D%E0%B8%8D%E0%B8%B2%20%E0%B8%AA%E0%B8%A1%E0%B8%A1%E0%B8%B8%E0%B8%95%E0%B8%B4.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.สุกัญญา สมมุติ</p>
                        <p className="font-bold text-center anc-text">วิทยาศาสตร์พื้นฐาน</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%AD%E0%B8%A0%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%20%E0%B8%9A%E0%B8%B8%E0%B8%8D%E0%B8%A1%E0%B8%B5.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายอภิชาต บุญมี</p>
                        <p className="font-bold text-center anc-text">เคมี</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B8%B2%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%99%E0%B9%8C%20%E0%B8%8A%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%94%E0%B8%B2.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.สุดารัตน์ ช่างสีดา</p>
                        <p className="font-bold text-center anc-text">ฟิสิกส์</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%A7%E0%B8%B2%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C%20%E0%B8%9C%E0%B8%B4%E0%B8%A7%E0%B8%AD%E0%B9%88%E0%B8%AD%E0%B8%99.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.วารินทร์ ผิวอ่อน</p>
                        <p className="font-bold text-center anc-text">ชีววิทยา</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B9%82%E0%B8%9E%E0%B8%98%E0%B8%B4%E0%B8%A7%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B9%8C%E0%B8%9E%E0%B8%A5%20%E0%B8%84%E0%B8%87%E0%B8%8B%E0%B9%88%E0%B8%B2%E0%B8%99.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายโพธิวัฒน์พล คงซ่าน</p>
                        <p className="font-bold text-center anc-text">เคมี</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%A0%E0%B8%B1%E0%B8%97%E0%B8%A3%E0%B8%B2%20%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C%E0%B8%98%E0%B8%B9%E0%B8%9B.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.ภัทรา อินทร์ธูป</p>
                        <p className="font-bold text-center anc-text">วิทยาศาสตร์พื้นฐาน</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%98%E0%B8%99%E0%B8%81%E0%B8%A3%20%E0%B8%AD%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%99%E0%B8%B2%E0%B8%A7%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B9%8C.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายธนกร อรรจนาวัฒน์</p>
                        <p className="font-bold text-center anc-text">ชีววิทยา</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%A2%E0%B8%A5%E0%B8%81%E0%B8%A3%20%E0%B8%88%E0%B8%B5%E0%B8%99%E0%B8%97%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B3.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.ยลกร จีนทองคำ</p>
                        <p className="font-bold text-center anc-text">ฟิสิกส์</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%81%E0%B8%B8%E0%B8%A5%E0%B8%8A%E0%B8%A2%E0%B8%B2%20%E0%B8%9E%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A7%E0%B8%87%E0%B8%A8%E0%B9%8C%E0%B8%A4%E0%B8%81%E0%B8%A9%E0%B9%8C.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.กุลชยา พิทยาวงศ์ฤกษ์</p>
                        <p className="font-bold text-center anc-text">โลก ดาราศาสตร์ และอวกาศ</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%9E%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B8%9E%E0%B8%A5%20%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B8%AA%E0%B8%B8%E0%B8%A7%E0%B8%A3%E0%B8%A3%E0%B8%93%E0%B9%8C.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายพุทธพล ภาคสุวรรณ์</p>
                        <p className="font-bold text-center anc-text">เทคโนโลยี</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%A0%E0%B8%9E%E0%B8%93%E0%B8%B4%E0%B8%9E%E0%B8%B4%E0%B8%90%20%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B8.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายภพณิพิฐ สิงห์ปรุ</p>
                        <p className="font-bold text-center anc-text">เทคโนโลยี</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%99%E0%B8%B4%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B8%81%E0%B9%8C%20%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายนิเทศก์ ศรีเมือง</p>
                        <p className="font-bold text-center anc-text">ฟิสิกส์</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%A0%E0%B8%B1%E0%B8%97%E0%B8%A3%E0%B8%B5%20%E0%B8%9E%E0%B8%A3%E0%B8%A1%E0%B8%A1%E0%B8%B5%E0%B8%AA%E0%B8%B5.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.ภัทรี พรมมีสี</p>
                        <p className="font-bold text-center anc-text">วิทยาศาสตร์พื้นฐาน</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%99%E0%B8%99%E0%B8%97%E0%B9%8C%E0%B8%9B%E0%B8%A7%E0%B8%B4%E0%B8%98%20%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B9%8C.PNG"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายนนท์ปวิธ กันเกลา</p>
                        <p className="font-bold text-center anc-text">เคมี</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/IMG_7367.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.มานิกา แสนจันทะ</p>
                        <p className="font-bold text-center anc-text">วิทยาศาสตร์พื้นฐาน</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/Capture(2).PNG"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายเขตโสภณ งามสม</p>
                        <p className="font-bold text-center anc-text">เทคโนโลยี</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/Capture(3).PNG"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.วิยดา ไตรยวงค์</p>
                        <p className="font-bold text-center anc-text">เทคโนโลยี</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%A0%E0%B8%B1%E0%B8%97%E0%B8%A3%E0%B8%A7%E0%B8%A3%E0%B8%A3%E0%B8%93%20%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B9%8C.PNG"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.ภัทรวรรณ โถรัตน​์</p>
                        <p className="font-bold text-center anc-text">วิทยาศาสตร์พื้นฐาน</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/_admin/cover_subgroup/19_logo.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายชรวิทย์ พรมจรรย์</p>
                        <p className="font-bold text-center anc-text">เทคโนโลยี</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/_admin/cover_subgroup/19_logo.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายภูกษิดิ์กันต์ ภูมินา</p>
                        <p className="font-bold text-center anc-text">วิทยาศาสตร์พื้นฐาน</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/_admin/cover_subgroup/19_logo.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.พัฒภิรมณ์ แก้วนรินทร์</p>
                        <p className="font-bold text-center anc-text">โลก ดาราศาสตร์ และอวกาศ</p>
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