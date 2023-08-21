'use client'

import React from "react";
import Link from "next/link";
import { createContext } from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

const NavbarDefault = () => (
    <Navbar expand="lg" data-bs-theme="dark" className="pt-3 navbar" fixed="top">
        <Container className="d-flex justify-content-between">
            <Navbar.Brand href="/" className="font-bold text-3xl align-middle">
                <img
                    alt=""
                    src="/logo.png"
                    width="70"
                    height="70"
                    className="d-inline-block align-middle nav-logo"
                    id="responsive-navbar-nav"
                />{' '}
                <text className="align-middle nav-title text-3xl">โรงเรียนสวนกุหลาบวิทยาลัย</text></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto text-2xl z-50 nav-item justify-content-end" defaultActiveKey="/" activeKey={window.location.pathname}>
                    <Nav.Link href="/links" className="px-2">เอกสารและลิงก์</Nav.Link>
                    <Nav.Link href="/gallery" className="px-2">คลังรูปภาพ</Nav.Link>
                    <NavDropdown title="เกี่ยวกับโรงเรียน" id="basic-nav-dropdown" classname="px-2 nav-item">
                        <NavDropdown.Item href="/about/staff" className="text-2xl nav-item">บุคลากร</NavDropdown.Item>
                        <NavDropdown.Item href="/about/buildings" className="text-2xl nav-item">อาคารสถานที่</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default NavbarDefault;