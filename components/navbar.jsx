'use client'

import React from "react";
import Link from "next/link";
import { createContext } from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

const Context = createContext();

const NavbarDefault = () => (
    <Navbar expand="lg" data-bs-theme="dark" className="pt-3" fixed="top">
        <Container className="d-flex justify-content-between">
            <Navbar.Brand href="#home" className="font-bold text-4xl align-middle">
                <img
                    alt=""
                    src="/logo.png"
                    width="90"
                    height="90"
                    className="d-inline-block align-middle nav-logo"
                    id="responsive-navbar-nav"
                />{' '}
                <text className="align-middle nav-title">โรงเรียนสวนกุหลาบวิทยาลัย</text></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto text-3xl z-50 nav-item justify-content-end">
                    <Nav.Item className="px-2">
                        <Link href="/">ข่าวสาร</Link>
                    </Nav.Item>
                    <Nav.Item className="px-2">
                        <Link href="/about">คลังรูปภาพ</Link>
                    </Nav.Item>
                    <Nav.Item className="px-2">
                        <Link href="/contact">เกี่ยวกับโรงเรียน</Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default NavbarDefault;