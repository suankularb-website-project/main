'use client'

import Image from 'next/image'
import { createContext } from "react";
import { Container } from 'react-bootstrap'

const Context = createContext();

export default function Math() {
    return (
        <><div className='d-flex res-bg align-items-center page-cov' id='cover'>
            <Container className="justify-content-end align-items-center text-center">
                <a className="cover-title font-black">กิจกรรมพัฒนาผู้เรียน(แนะแนว)</a><br />
            </Container>
        </div>
        <div className="anc">
            <Container className="d-table justify-content-center align-items-center align-middle text-center m-auto" id="main">
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con-2l">
                            <img src="http://96.30.126.41/sk/userfiles/images/วรชัย%20แต้มศิริชัย.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายวรชัย แต้มศิริชัย</p>
                        <p className="font-bold text-center anc-text">หัวหน้ากลุ่มสาระฯ</p>
                    </div>
                </a>
            </Container>
            <Container className="d-table justify-content-center align-items-center align-middle text-center m-auto" id="main">
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/userfiles/images/สิงหา%20สุวรรณศรี.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">นายสิงหา สุวรรณศรี</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/userfiles/images/วรางคณา%20มุ่งมาตร์มิตร.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.วรางคณา มุ่งมาตร์มิตร</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/userfiles/images/อำภา%20แสนโท.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.อำภา แสนโท</p>
                    </div>
                </a>
                <a>
                    <div className="d-inline-block justify-content-center align-items-center text-center grid" id="grid">
                        <div className="d-flex justify-content-center align-items-center align-middle grid-img-con">
                            <img src="http://96.30.126.41/sk/_admin/cover_subgroup/19_logo.jpg"></img>
                        </div>
                        <p className="font-bold text-center anc-text">น.ส.ศุภลักษณ์ โต๊ะอร่ามกุล</p>
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