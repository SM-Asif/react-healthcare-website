import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Gallery.css';
const Gallery = () => {
    return (
        <main>
            <Container>
            <div className="text-center mb-4">
                    <h1>Gallery</h1>
                </div>
                <Row className='gallery'>
                    <Col sm={4}>
                        <img src="images/g1.webp" alt="" />
                    </Col>
                    <Col sm={4}>
                        <img src="images/g2.webp" alt="" />
                    </Col>
                    <Col sm={4}>
                        <img src="images/g3.webp" alt="" />
                    </Col>
                    <Col sm={4}>
                        <img src="images/g4.webp" alt="" />
                    </Col>
                    <Col sm={4}>
                        <img src="images/g5.webp" alt="" />
                    </Col>
                    <Col sm={4}>
                        <img src="images/g6.webp" alt="" />
                    </Col>
                    <Col sm={4}>
                        <img src="images/g7.webp" alt="" />
                    </Col>
                    <Col sm={4}>
                        <img src="images/g8.webp" alt="" />
                    </Col>
                    <Col sm={4}>
                        <img src="images/g1.webp" alt="" />
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default Gallery;