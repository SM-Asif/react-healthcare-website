import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <main>
            <Container>
            <Row>
                <Col sm={{ span: 8, offset: 2 }}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Enter phone number" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" placeholder="Enter Appontment Topic" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Details</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button className="mb-3 btn btn-secondary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>

        </Container>
        </main>
    );
};

export default Contact;