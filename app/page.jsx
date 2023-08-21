'use client'

import Image from 'next/image'
import { createContext } from "react";
import { Container } from 'react-bootstrap';
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
    ThemeProvider
} from "@suankularb-components/react";
import PageCover from "../components/root/pageCover";

const Context = createContext();

export default function Home() {
    return (
        <><ThemeProvider>

            <PageCover />
            <Container className="d-table justify-content-center align-items-center align-middle text-center m-auto pt-36" id="main">
                <Section>
                    <Header level={2}>ข่าวสาร</Header>
                    <Columns columns={4}>
                        <Card appearance="outlined" href="https://drive.google.com/file/d/1fZr3L8LTNfLx-Mo1YhlQ6oMt4rj2iTII/view?pli=1" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/userfiles/images/Screenshot%202023-07-27%20210350.jpg" className="m-auto max-h-56" />
                            <CardContent>
                                <p>ประกาศผลการแข่งขันครอสเวิร์ด 2023</p>
                            </CardContent>
                        </Card>
                        <Card appearance="outlined" href="https://drive.google.com/file/d/1pnucivAqLhsda8pfvY2kHAyvKo0L_7VG/view?usp=sharing" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/userfiles/images/Screenshot%202023-07-27%20204802.jpg" className="m-auto max-h-56" />
                            <CardContent>
                                <p>ประกาศรับสมัครลูกจ้างชั่วคราว</p>
                            </CardContent>
                        </Card>
                        <Card appearance="outlined" href="https://drive.google.com/file/d/1SBaoc16VZl8IX_rrg4zshh4DQJv347Ti/view?usp=sharing" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/userfiles/images/Screenshot%202023-07-25%20154217.jpg" className="m-auto max-h-56" />
                            <CardContent>
                                    <p>ผลการสอบคัดเลือกลูกจ้างชั่วคราว</p>
                            </CardContent>
                        </Card>
                        <Card appearance="outlined" href="http://96.30.126.41/sk/userfiles/images/S__22610088.jpg" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/userfiles/images/S__22610088.jpg" className="m-auto max-h-56" />
                            <CardContent>
                                <p>การจำหน่ายบัตรเข้าชมจตุรมิตรสามัคคี</p>
                            </CardContent>
                        </Card>
                        <Card appearance="outlined" href="http://96.30.126.41/sk/userfiles/files/460543034045235489-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%A3%E0%B8%84%E0%B8%B1%E0%B8%94%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%20%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%AD%E0%B8%9A%E0%B8%A3%E0%B8%A1%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%82%E0%B8%AD%E0%B8%A5%E0%B8%B4%E0%B8%A1%E0%B8%9B%E0%B8%B4%E0%B8%81%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%20%E0%B8%AA%E0%B8%AD%E0%B8%A7%E0%B8%99_%20%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C.pdf" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/userfiles/images/image_6487327%20(7)(1).JPG" className="m-auto max-h-56" />
                            <CardContent>
                                <p>ประกาศสมัครสอบ สอวน. ภูมิศาสตร์</p>
                            </CardContent>
                        </Card>
                        <Card appearance="outlined" href="http://96.30.126.41/sk/userfiles/files/460536248550293586-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%20%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%A3%E0%B8%84%E0%B8%B1%E0%B8%94%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%A2%201%20%E0%B8%AA%E0%B8%AD%E0%B8%A7%E0%B8%99_%20%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%94%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C.pdf" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/userfiles/images/image_6487327%20(8).JPG" className="m-auto max-h-56" />
                            <CardContent>
                                <p>ประกาศสมัครสอบ สอวน. ดาราศาสตร์</p>
                            </CardContent>
                        </Card>
                        <Card appearance="outlined" href="https://smartjob.doe.go.th/" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/userfiles/images/%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B8%A1%E0%B8%B5%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%B3.jpg" className="m-auto max-h-56" />
                            <CardContent>
                                <p>แพลตฟอร์ม "ไทยมีงานทำ"</p>
                            </CardContent>
                        </Card>
                        <Card appearance="elevated" href="https://smartjob.doe.go.th/" stateLayerEffect shadowEffect className="h-72" >
                            <p className="m-auto max-h-56 font-black text-4xl">ดูเพิ่มเติม</p>
                            <CardContent>
                                <p>ข่าวสารอื่นๆ</p>
                            </CardContent>
                        </Card>
                    </Columns>
                </Section>
            </Container>
        </ThemeProvider></>
    )
}