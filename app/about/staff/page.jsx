'use client'

import Image from 'next/image'
import { createContext } from "react";
import { Col, Container, Row } from 'react-bootstrap';
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
import GlobalTitle from '../../../components/globalTitle';

const Context = createContext();

export default function Staff() {
    return (
        <><ThemeProvider>
            <GlobalTitle>บุคลากร</GlobalTitle>
            <Container className="d-table justify-content-center align-items-center align-middle text-center m-auto" id="main">
                <Section className="pt-5">
                    <Columns columns={3}>
                        <Card appearance="outlined" href="/about/staff/principal" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/_admin/cover_subgroup/19_logo.jpg" className="m-auto max-h-56" />
                            <CardContent>
                                <p>คณะผู้บริหารโรงเรียน</p>
                            </CardContent>
                        </Card>
                        <Card appearance="outlined" href="/about/staff/teacherroom" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/_admin/cover_subgroup/29_logo.jpg" className="m-auto max-h-56" />
                            <CardContent>
                                <p>คณาจารย์ตามกลุ่มสาระฯ</p>
                            </CardContent>
                        </Card>
                        <Card appearance="outlined" href="/about/staff/teachergroup" stateLayerEffect shadowEffect className="h-72" >
                            <img src="http://96.30.126.41/sk/_admin/cover_subgroup/25_logo.jpg" className="m-auto max-h-56" />
                            <CardContent>
                                <p>คณะกรรมการระดับชั้น</p>
                            </CardContent>
                        </Card>
                    </Columns>
                </Section>
            </Container>
        </ThemeProvider></>
    )
}