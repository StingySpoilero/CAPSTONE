import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/clients">Clients</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;