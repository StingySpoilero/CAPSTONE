// src/pages/HomePage.jsx
import { getClients, createClient, deleteClient } from './api.mjs';
import './HomePage.css'; // Import the CSS file for styles

const HomePage = () => {
    return (
        <div className="home-container">
            <h1 className="centered-title">Wax the Ripper</h1>
            <p className="centered-text">Schedule your wax appointments easily and efficiently.</p>
        </div>
    );
};

export default HomePage;