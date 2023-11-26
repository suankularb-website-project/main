"use client"

import { Table, Divider, Col, List } from "antd";

const { Column, ColumnGroup } = Table;
export default function General() {
    return (
        <main className="flex flex-col items-center justify-between top-0 pt-10 xxs:pt-0">
            <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center justify-center py-10 px-10 gap-2" id="content">
                <h1 className="text-3xl font-bold">วิชาการสวนกุหลาบฯ</h1>
                <Divider />
                <h1 className="text-3xl font-bold">โครงการการศึกษาสำหรับผู้มีความสามารถพิเศษ</h1>
                <h2 className="text-xl font-bold">Gifted and Talented Education Program : GATE Program</h2>
                <Divider />
                <h2 className="text-xl font-bold">ความเป็นมา</h2>
                <p className="text-center">โรงเรียนสวนกุหลาบวิทยาลัย มีนักเรียนที่เรียนดี ใฝ่หาความรู้ มีคุณธรรมและมีความสามารถถึงระดับที่น่าจะส่งเสริม<br />ให้ได้รับการพัฒนาศักยภาพจนถึงที่สุดเป็นจำนวนมากและหลักสูตรสถานศึกษาขั้นพื้นฐานเปิดโอกาส<br />ให้โรงเรียนจัดการศึกษาเพื่อพัฒนานักเรียนที่มีความสามารถพิเศษได้โรงเรียนจึงขอเปิดหลักสูตร<br />ความเป็นเลิศทางวิชาการขึ้นในปี พ.ศ. 2545 เพื่อพัฒนาศักยภาพของนักเรียนที่มีความสามารถเป็นเลิศ<br />ทางด้านคณิตศาสตร์ วิทยาศาสตร์ และภาษาอังกฤษให้บรรลุเป้าหมาย ทัดเทียมมาตรฐานสากล<br />โดยเริ่มแรกใช้ชื่อ โครงการความเป็นเลิศทางวิชาการ ( Gifted Education Program : GEP) ในระดับชั้น ม.ต้น และโครงการ<br />ความเป็นเลิศวิทย์-คณิต (Advanced Program : AP) ในระดับชั้น ม.ปลาย เนื่องจากโครงการทั้ง 2 เป็นโครงการต่อเนื่อง<br />ในปีการศึกษา 2551 โรงเรียนได้รวมโครงการทั้ง 2 เข้าด้วยกันเป็น</p>
                <Divider />
                <h2 className="text-xl font-bold">ปณิธาน</h2>
                <p className="text-center">มุ่งพัฒนานักเรียนให้เป็นคนดี (MQ) มีปัญญา (IQ) มีความฉลาดทางอารมณ์ (EQ) และมีคุณภาพชีวิตที่ดี (HQ)<br />มีขีดความสามารถ ในการแข่งขันและเป็นเยาวชนระดับสมองของประเทศ</p>
                <Divider />
                <h2 className="text-xl font-bold">ค่าใช้จ่าย</h2>
                <p className="text-center">ผู้ปกครองพร้อมที่จะสนับสนุนเงินประมาณคนละ 25,000 บาท ต่อปี</p>
                <Divider />
                <h2 className="text-xl font-bold">ลักษณะพิเศษ</h2>
                <List bordered>
                    <List.Item>หลักสูตรเน้นคณิต วิทย์ ภาษาอังกฤษ เป็นพิเศษ</List.Item>
                    <List.Item>คณิตศาสตร์ เนื้อหาเข้มข้นกว่าหลักสูตรปกติ</List.Item>
                    <List.Item>วิทยาศาสตร์ เนื้อหาเจาะลึก เน้นปฏิบัติจริง สอนโดยครูเชี่ยวชาญแต่ละสาขาวิชา และวิทยากรภายนอก</List.Item>
                    <List.Item>ภาษาอังกฤษ เรียนกับครูชาวต่างประเทศมากกว่าโครงการปกติ</List.Item>
                    <List.Item>
                        <List>
                            <List.Item>ทดสอบภาษาอังกฤษ CU-SSEPT ระดับ ม.ต้น</List.Item>
                            <List.Item>ทดสอบภาษาอังกฤษ CU-TEP ระดับ ม.ปลาย จากศูนย์</List.Item>
                            <List.Item>ทดสอบทางภาษาแห่งจุฬาฯ</List.Item>
                        </List>
                    </List.Item>
                </List>
            </div>
        </main>
    )
}