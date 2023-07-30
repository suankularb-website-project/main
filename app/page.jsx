'use client'

import Image from 'next/image'
import { createContext } from "react";
import { Container } from 'react-bootstrap'

const Context = createContext();

export default function Home() {
    return (
        <div className='d-flex res-bg align-items-center'>
            <Container className="d-flex justify-content-end align-items-center">
                <font className="text-3xl font-black">ยินดีต้อนรับเข้าสู่เว็ปไซต์</font>
            </Container>
        </div>
    )
}
