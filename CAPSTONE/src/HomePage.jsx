// src/pages/HomePage.jsx
import { getClients, createClient, deleteClient } from './api.mjs';

const HomePage = () => {
    return (
        <div>
            <h1>Wax the Ripper</h1>
            <p>Schedule your wax appointments easily and efficiently.</p>
        </div>
    );
};

export default HomePage;