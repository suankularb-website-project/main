'use client'

import Image from 'next/image'
import { createContext } from "react";
import { Container } from 'react-bootstrap'

const Context = createContext();

export default function Math() {
    return (
        <><div className='d-flex res-bg align-items-center page-cov' id='cover'>
            <Container className="justify-content-end align-items-center text-center">
                <a className="cover-title font-black">กลุ่มสาระการเรียนรู้การงานอาชีพ</a><br />
            </Container>
        </div>
        <div className="anc">
            <Container className="d-table justify-content-center align-items-center align-middle text-center m-auto" id="main">
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/สุพรรณี%20สุภีรัตน์.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.สุพรรณี สุภีรัตน์</p>
                        <p className="font-bold text-center anc-text">หัวหน้ากลุ่มสาระฯ</p>
                    </div>
                </a>
            </Container>
            <Container className="d-table justify-content-center align-items-center align-middle text-center m-auto" id="main">
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/userfiles/images/อุบลรัตน์%20%20ยี่รงค์.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.อุบลรัตน์ ยี่รงค์</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/userfiles/images/ฉิมพลี%20วิมลธรรม.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.ฉิมพลี วิมลธรรม</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/userfiles/images/เกศสุดา%20นันทชัย.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นางเกศสุดา นันทชัย</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/userfiles/images/นุชสาวรีย์%20ขจรทรัพย์.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นางนุชสาวรีย์ ขจรทรัพย์</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/userfiles/images/เบญญา%20เวียงหฤทัย.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.เบญญา เวียงหฤทัย</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/userfiles/images/จตุพร%20ปักเคระกา.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.จตุพร ปักเคระกา</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/userfiles/images/จิราภรณ์%20กลัดป้อม.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.จิราภรณ์ กลัดป้อม</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/userfiles/images/สุวิทย์%20งามผักแว่น.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายสุวิทย์ งามผักแว่น</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/_admin/cover_subgroup/19_logo.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.สาลินี ประเสริฐ</p>
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