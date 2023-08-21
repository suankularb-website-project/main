'use client'

import Image from 'next/image'
import { createContext } from "react";
import { Container } from 'react-bootstrap'
import {
    Card,
    CardContent,
    CardHeader,
    Columns,
    ContentLayout,
    Header,
    Section,
    Text,
    Actions,
    MaterialIcon,
    ThemeProvider,
    PageHeader
} from "@suankularb-components/react";
import GlobalTitle from '../../components/globalTitle';

const Context = createContext();

export default function Links() {
    return (
        <><ThemeProvider>
            <GlobalTitle>เอกสารและลิงก์</GlobalTitle>
            <Container className="d-table justify-content-center align-items-center align-middle text-center m-auto" id="main">
                <Section className="mt-5">
                    <Header level={2}>ลิงก์</Header>
                    <Columns columns={4}>
                        <Card appearance="outlined" href="http://samak.sk.ac.th/" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/userfiles/images/Pastel%20Alphabet%20Desk%20Name%20Labels(2).jpg" className="m-auto max-h-56" />
                            <CardContent>
                                <p>ระบบรับสมัคร Pre-Test ออนไลน์</p>
                            </CardContent>
                        </Card>
                        <Card appearance="outlined" href="https://fin.sch.cloud/sk" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/userfiles/images/school%20ict(1).jpg" className="m-auto max-h-56" />
                            <CardContent>
                                <p>ระบบ School ICT (บำรุงการศึกษา)</p>
                            </CardContent>
                        </Card>
                        <Card appearance="outlined" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/userfiles/images/123456(0).jpg" className="m-auto max-h-56" />
                            <CardContent>
                                <p>ยื่นคำขอใหม่(<a href="http://forms.gle/sMSXi5KUKaT98kFS8">นักเรียน</a>, <a href="https://forms.gle/LyFRuLuMGC6KX5wh9">บุคลากร</a>), ขอ<a href="https://forms.gle/mNr71xzCZAT7PxkC6">แก้ไข</a></p>
                            </CardContent>
                        </Card>
                        <Card appearance="outlined" href="http://43.229.77.153/~ztrad/sk/" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/userfiles/images/1(1).png" className="m-auto max-h-56" />
                            <CardContent>
                                <p>ระบบสารสนเทศแผนงาน (Based Line)</p>
                            </CardContent>
                        </Card>
                        <Card appearance="outlined" href="http://sk.vlcloud.net/" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/userfiles/images/ebook_button.png" className="m-auto max-h-56" />
                            <CardContent>
                                <p>หนังสืออิเล็กทรอนิกส์ SK Library</p>
                            </CardContent>
                        </Card>
                        <Card appearance="outlined" href="http://43.229.77.153/~ztrad/sk/" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/userfiles/images/1(1).png" className="m-auto max-h-56" />
                            <CardContent>
                                <p>ระบบสารสนเทศแผนงาน (Based Line)</p>
                            </CardContent>
                        </Card>
                        <Card appearance="outlined" href="https://goo.gl/forms/0hDyGA5b2upH8WY02" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%A1%E0%B8%B2%E0%B8%95%E0%B8%A3%E0%B8%90%E0%B8%B2%E0%B8%99.jpg" className="m-auto max-h-56" />
                            <CardContent>
                                <p>งานประกันคุณภาพในสถานศึกษา</p>
                            </CardContent>
                        </Card>
                        <Card appearance="outlined" href="http://161.82.218.12/sksar" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/userfiles/images/sar.jpg" className="m-auto max-h-56" />
                            <CardContent>
                                <p>แผนปฏิบัติการและงบประมาณ (SAR)</p>
                            </CardContent>
                        </Card>
                    </Columns>
                </Section>
                <Section className="mt-5">
                    <Header level={2}>เอกสาร</Header>
                    <Columns columns={4}>
                        <Card appearance="outlined" href="http://96.30.126.41/sk/userfiles/files/%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%82%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B8%B8%E0%B8%8D%E0%B8%B2%E0%B8%95%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B8%99%E0%B8%AD%E0%B8%81%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B9%80%E0%B8%A7%E0%B8%93%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99.pdf" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%82%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B8%B8%E0%B8%8D%E0%B8%B2%E0%B8%95%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B8%99%E0%B8%AD%E0%B8%81%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B9%80%E0%B8%A7%E0%B8%93%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99.png" className="m-auto max-h-56" />
                            <CardContent>
                                <p>แบบขออนุญาตออกนอกบริเวณโรงเรียน</p>
                            </CardContent>
                        </Card>
                        <Card appearance="outlined" href="http://drive.google.com/file/d/1D2s2V9rzVfAaEGVKRkNkTc4kfXbRiKLR/view?usp=sharing" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/userfiles/images/school-ict(1).jpg" className="m-auto max-h-56" />
                            <CardContent>
                                <p>คู่มือระบบ School ICT</p>
                            </CardContent>
                        </Card>
                        <Card appearance="outlined" href="http://96.30.126.41/sk/userfiles/files/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD%20Google%20Classroom%20%E0%B8%A3%E0%B8%A7%E0%B8%9A%E0%B8%A3%E0%B8%B1%E0%B8%94.pdf" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/userfiles/images/google%20classroom(1).jpg" className="m-auto max-h-56" />
                            <CardContent>
                                <p>คู่มือใช้งาน Google Classroom</p>
                            </CardContent>
                        </Card>
                        <Card appearance="outlined" href="http://96.30.126.41/sk/userfiles/files/%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%9F%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A1%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%20PLC%20%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%81%E0%B8%B8%E0%B8%AB%E0%B8%A5%E0%B8%B2%E0%B8%9A.docx" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/userfiles/images/PLC.jpg" className="m-auto max-h-56" />
                            <CardContent>
                                <p>แบบฟอร์มการบันทึก PLC</p>
                            </CardContent>
                        </Card>
                        <Card appearance="outlined" href="http://96.30.126.41/sk/userfiles/files/%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%9F%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A1%20ID%20plan%20%E0%B8%84%E0%B8%B9%E0%B8%9B%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%A3%E0%B8%B9.doc" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/userfiles/images/idplan.jpg" className="m-auto max-h-56" />
                            <CardContent>
                                <p>แบบฟอร์มการพิมพ์ ID Plan คูปองครู</p>
                            </CardContent>
                        </Card>
                        <Card appearance="outlined" href="http://96.30.126.41/sk/userfiles/files/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD%20ep%20%E0%B8%A1_%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%A2.pdf" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/userfiles/images/EP.png" className="m-auto max-h-56" />
                            <CardContent>
                                <p>EPLUS+ Senior Manual</p>
                            </CardContent>
                        </Card>
                        <Card appearance="outlined" href="https://sites.google.com/sk.ac.th/standard11suan" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/userfiles/images/2(2).png" className="m-auto max-h-56" />
                            <CardContent>
                                <p>รายงานมาตรฐานคุณภาพกุหลาบหลวง</p>
                            </CardContent>
                        </Card>
                        <Card appearance="outlined" href="http://96.30.126.41/sk/ebook/BOOK06/" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/_admin/images/ebook/0-1658809602.jpg" className="m-auto max-h-56" />
                            <CardContent>
                                <p>คู่มือนักเรียนและผู้ปกครอง 2565</p>
                            </CardContent>
                        </Card>
                        <Card appearance="outlined" href="http://96.30.126.41/sk/ebook/BOOK07/" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/_admin/images/ebook/0-1680580168.jpg" className="m-auto max-h-56" />
                            <CardContent>
                                <p>วันประกาศเกียรติคุณ 2565</p>
                            </CardContent>
                        </Card>
                    </Columns>
                </Section>
            </Container>
        </ThemeProvider></>
    )
}