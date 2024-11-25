// src/pages/ClientPage.jsx
import React, { useEffect, useState } from 'react';
import { getClients, createClient, deleteClient } from './api.mjs'; // Update the import statement

const ClientPage = () => {
    const [clients, setClients] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        const fetchClients = async () => {
            const clientsData = await getClients();
            setClients(clientsData);
        };

        fetchClients();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newClient = { name, email, phone };
        const createdClient = await createClient(newClient);
        setClients([...clients, createdClient]);
        setName('');
        setEmail('');
        setPhone('');
    };

    const handleDelete = async (id) => {
        await deleteClient(id);
        setClients(clients.filter(client => client._id !== id));
    };

    return (
        <div>
            <h2>Clients</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Phone" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                />
                <button type="submit">Add Client</button>
            </form>
            <ul>
                {clients.map(client => (
                    <li key={client._id}>
                        {client.name} - {client.email} - {client.phone}
                        <button onClick={() => handleDelete(client._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClientPage;