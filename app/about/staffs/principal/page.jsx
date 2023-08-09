'use client'

import Image from 'next/image'
import { createContext } from "react";
import { Container } from 'react-bootstrap'

const Context = createContext();

export default function Principal() {
    return (
        <><div className='d-flex res-bg align-items-center page-cov' id='cover'>
            <Container className="justify-content-end align-items-center text-center">
                <a className="cover-title font-black">ผู้บริหารโรงเรียน</a><br />
            </Container>
        </div>
        <div className="anc">
            <Container className="d-table justify-content-center align-items-center align-middle text-center m-auto" id="main">
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%88%E0%B8%B4%E0%B8%93%E0%B8%93%E0%B8%A0%E0%B8%B1%E0%B8%97%E0%B8%A3%20%E0%B8%9E%E0%B8%B4%E0%B8%9A%E0%B8%B9%E0%B8%A5%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%B4%E0%B8%95%E0%B8%98%E0%B8%B3%E0%B8%A3%E0%B8%87.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายจิณณภัทร พิบูลวิทิตธำรง</p>
                        <p className="font-bold text-center anc-text">ผู้อำนวยการโรงเรียน</p>
                    </div>
                </a>
            </Container>
            <Container className="d-table justify-content-center align-items-center align-middle text-center m-auto" id="main">
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%94%E0%B8%B3%E0%B8%A3%E0%B8%87%20%E0%B8%8A%E0%B8%AD%E0%B8%9A%E0%B8%AA%E0%B8%B8%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%81%E0%B8%B8%E0%B8%A5.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายดำรง ชอบสุจริตสกุล</p>
                        <p className="font-bold text-center anc-text">รองผู้อำนวยการกลุ่มบริหารวิชาการ</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%AA%E0%B8%B8%E0%B8%8A%E0%B8%B5%E0%B8%A3%E0%B8%B2%20%E0%B8%97%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B4%E0%B8%A1%E0%B8%82%E0%B8%B2%E0%B8%A7.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.สุชีรา ทับทิมขาว</p>
                        <p className="font-bold text-center anc-text">รองผู้อำนวยการกลุ่มบริหารบุคคล</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B8%93%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%92%E0%B9%8C.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นางณิชาฒ์ สุกรี</p>
                        <p className="font-bold text-center anc-text">รองผู้อำนวยการกลุ่มบริหารทั่วไป</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/Capture(1).PNG"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นางเนาวรัตน์ ขจรเดชะ</p>
                        <p className="font-bold text-center anc-text">รองผู้อำนวยการบริหารกิจการนักเรียน</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%99%E0%B9%8C%20%20%E0%B8%A2%E0%B8%B5%E0%B9%88%E0%B8%A3%E0%B8%87%E0%B8%84%E0%B9%8C(1).jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.อุบลรัตน์ ยี่รงค์</p>
                        <p className="font-bold text-center anc-text">รองผู้อำนวยการคุณภาพการศึกษา</p>
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