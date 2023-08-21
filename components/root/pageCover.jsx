import React from "react";
import { Container } from "react-bootstrap";

const PageCover = () => (
    <div className='d-flex res-bg align-items-center' id='cover'>
        <Container className="justify-content-end align-items-center text-right">
            <a className="cover-welcome font-black">ยินดีต้อนรับเข้าสู่เว็บไซต์</a><br />
            <a className="cover-title font-black">โรงเรียน<span style={{ color: "rgb(252, 3, 232)" }}>สวนกุหลาบ</span><span style={{ color: "rgb(3, 235, 252)" }}>วิทยาลัย</span></a><br />
            <a className="cover-subtitle font-normal">โรงเรียนสวนกุหลาบวิทยาลัยเป็นสถาบันการศึกษาชั้นนำในเวทีโลก</a><br />
            <a className="cover-subtitle font-normal">สร้างสุภาพบุรุษสวนกุหลาบที่มีความสุข บนพื้นฐานคุณธรรม และวิถีความเป็นไทย</a><br /><br /><br />
            <a href='#main' className="cover-button font-black">เข้าสู่เว็บไซต์</a>
        </Container>
    </div>
);

export default PageCover;