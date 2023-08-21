'use client'

import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => (
    <footer className="footer d-flex pt-5 pb-5 mt-auto">
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
    </footer>
);

export default Footer;