import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Doctors = () => {
    return (
        <section className="p-1 p-md-5">
            <Container>
                <div className="text-center mb-4">
                    <h1>Our Doctors</h1>
                </div>
                <Row>
                    <Col sm={3}>
                        <Card>
                            <Card.Img variant="top" src="images/1.webp" />
                            <Card.Body>
                                <Card.Title>Dr. Lloyd Wilson</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card>
                            <Card.Img variant="top" src="images/2.webp" />
                            <Card.Body>
                                <Card.Title>Dr. Rachel Parker</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card>
                            <Card.Img variant="top" src="images/3.webp" />
                            <Card.Body>
                                <Card.Title>Dr. Ian Smith</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card>
                            <Card.Img variant="top" src="images/4.webp" />
                            <Card.Body>
                                <Card.Title>Dr. Alicia Henderson</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Doctors;