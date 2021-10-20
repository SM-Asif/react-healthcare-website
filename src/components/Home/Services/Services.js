import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import SingleService from '../SingleService/SingleService';

const Services = () => {
    const [services] = useServices();
    return (
        <section className="p-1 p-md-5">
            <Container>
                <div className="text-center mb-4">
                    <h1>Our Specialized Services</h1>
                </div>
                <Row>
                    {
                        services.map(service => <SingleService key={service.id} singleService={service}></SingleService>)
                    }
                </Row>
                </Container>
        </section>
    );
};

export default Services;