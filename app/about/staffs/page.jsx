'use client'

import Image from 'next/image'
import { createContext } from "react";
import { Container } from 'react-bootstrap'

const Context = createContext();

export default function Staff() {
    return (
        <><div className='d-flex res-bg align-items-center page-cov' id='cover'>
            <Container className="justify-content-end align-items-center text-center">
                <a className="cover-title font-black">บุคลากร</a><br />
            </Container>
        </div>
        <div className="anc">
            <Container className="d-table justify-content-center align-items-center align-middle text-center m-auto" id="main">
                <a href="/about/staffs/principal" target="_parent">
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/_admin/cover_subgroup/19_logo.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">คณะผู้บริหารโรงเรียน</p>
                    </div>
                </a>
                <a href="/about/staffs/teachergroup" target="_parent">
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/_admin/cover_subgroup/29_logo.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">คณาจารย์ตามกลุ่มสาระฯ</p>
                    </div>
                </a>
                <a href="/about/staffs/teacherroom" target="_parent">
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/_admin/cover_subgroup/15_logo.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">คณะกรรมการระดับชั้น</p>
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