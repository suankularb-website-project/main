'use client'

import Image from 'next/image'
import { createContext } from "react";
import { Container } from 'react-bootstrap'

const Context = createContext();

export default function Math() {
    return (
        <><div className='d-flex res-bg align-items-center page-cov' id='cover'>
            <Container className="justify-content-end align-items-center text-center">
                <a className="cover-title font-black">อาคารสถานที่</a><br />
            </Container>
        </div>
        <div className="anc">
            <Container className="d-table justify-content-center align-items-center align-middle text-center m-auto" id="main">
                <a>
                    <div className="d-block justify-content-start align-items-start text-start grid grid-big" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con grid-img-con-big float-left">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B9%82%E0%B8%AA%E0%B8%A0%E0%B8%93%20%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B8%88%E0%B8%B5%E0%B8%99.jpg"></img>
                        </div>
                        <p className="font-bold text-start anc-text pl-5">นายโสภณ ไทยจีน</p>
                        <p className="font-bold text-start anc-text">หัวหน้ากลุ่มสาระฯ</p>
                    </div>
                </a>
            </Container>
            <Container className="d-table justify-content-center align-items-center align-middle text-center m-auto" id="main">
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/userfiles/images/IMG_2696.JPG"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายสุพล นิลกลาง</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%9E%E0%B8%A3%20%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B8%B2.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายสถาพร อุทธา</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%AD_%E0%B8%9E%E0%B8%A3%E0%B8%A3%E0%B8%93%E0%B8%B5.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นางพรรณี เจริญกัลป์</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%A0%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B8%8A%E0%B8%96%E0%B8%B1%E0%B8%AA%E0%B8%A3%E0%B9%8C%20%E0%B9%82%E0%B8%AA%E0%B8%95%E0%B8%96%E0%B8%A2%E0%B8%B2%E0%B8%84%E0%B8%A1.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นางภรณ์ชภัสร์ โสตถยาคม</p>
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