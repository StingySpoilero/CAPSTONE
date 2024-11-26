// src/pages/HomePage.jsx
import { getClients, createClient, deleteClient } from './api.mjs';
import './HomePage.css'; 

const HomePage = () => {
    return (
        <div className="home-container">
            <h1 className="centered-title">Wax the Ripper</h1>
            <p className="centered-text">Schedule your wax appointments easily and efficiently.</p>
            <img 
                src="./images/Image3.jpeg" 
                alt="Description of Image 3"
                className="homepage-image"
            />
            <img 
                src="./images/Image8.jpg"
                alt="Description of Image 8"
                className="homepage-image"
            />
             <img 
                src="./images/Image12.jpg"
                alt="Description of Image 12"
                className="homepage-image"
            />
        </div>
    );
};

export default HomePage;