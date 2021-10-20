import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleService.css'

const SingleService = (props) => {
    const { id, name, details, img } = props?.singleService;
    const serviceURL = `/service/${id}`;//creating dynamic link for service
    return (
        <Col sm={4} className="d-flex my-4">
            <div className="card">
                <img src={img} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{details}</p>
                    <Link className="btn btn-primary" to={serviceURL}>Book Apponintment</Link>
                </div>
            </div>
            </Col>
    );
};

export default SingleService;