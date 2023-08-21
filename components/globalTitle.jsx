import React from "react";
import { Container } from "react-bootstrap";

const GlobalTitle = ({ children }) => (
    <div className='d-flex res-bg align-items-center page-cov' id='cover'>
        <Container className="justify-content-end align-items-center text-center pt-28">
            <a className="cover-title font-black">{children}</a><br />
        </Container>
    </div>
);

export default GlobalTitle;