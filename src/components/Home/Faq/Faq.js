import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const Faq = () => {
    return (
        <section className="p-1 p-md-5">
            <Container>
                <div className="text-center mb-4">
                    <h1>FAQ</h1>
                </div>
                <Row>
                    <Col sm={{ span: 8, offset: 2 }}>

                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Does the hospital have Emergency?</Accordion.Header>
                                <Accordion.Body>
                                    We have 24/7 intensive emergency care for critical pateint.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Any facilities for the poor people?</Accordion.Header>
                                <Accordion.Body>
                                    We server poor and helpless people with low cost and sometime completely free treatment
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Are the hospital charges high?</Accordion.Header>
                                <Accordion.Body>
                                    We follow govt pricing rules and maintain reasonable costing.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </Col>
                </Row>
            </Container>
        </section>

    );
};

export default Faq;