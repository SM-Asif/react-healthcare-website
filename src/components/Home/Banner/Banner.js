import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
            <div className="hero-image">
                <div className="hero-text">
                    <h1>Welcome To Medilife Hospital</h1>
                    <p>Medical Services that you can trust</p>
                    <Link className="btn btn-primary" to="/contact">Book an Appointment</Link>
                </div>
            </div>
    );
};

export default Banner;