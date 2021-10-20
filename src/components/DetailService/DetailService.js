import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
const DetailService = ({services}) => {
    const { serviceId } = useParams();
    const service = services.find(service => service.id === parseInt(serviceId));//get the service that match
    console.log(service);
    
    return (
        <main>
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={service?.img} alt="" />
                    </Col>
                    <Col sm={6}>
                        <h2>{service?.name}</h2>
                        <p>{service?.details}</p>
                        <p>{service?.longDetails}</p>
                        <Link className="btn btn-success" to='/contact'>Confirm Apponintment</Link>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default DetailService;