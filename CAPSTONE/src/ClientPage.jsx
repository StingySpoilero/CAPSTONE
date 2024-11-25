// src/pages/ClientPage.jsx
import React, { useEffect, useState } from 'react';
import { getClients, createClient, deleteClient, updateClient } from './api.mjs'; // Update the import statement

const ClientPage = () => {
    const [clients, setClients] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isUpdating, setIsUpdating] = useState(false); // Track if in update mode
    const [currentClientId, setCurrentClientId] = useState(null); // To hold the ID of the client being updated

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
        resetForm();
    };

    const handleDelete = async (id) => {
        await deleteClient(id);
        setClients(clients.filter(client => client._id !== id));
    };

    const handleUpdate = (client) => {
        setName(client.name);
        setEmail(client.email);
        setPhone(client.phone);
        setCurrentClientId(client._id);
        setIsUpdating(true);
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        const updatedClient = { name, email, phone };
        await updateClient(currentClientId, updatedClient); // Call the API to update the client
        setClients(clients.map(client => 
            client._id === currentClientId ? { ...client, ...updatedClient } : client
        ));
        resetForm();
        setIsUpdating(false);
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setPhone('');
        setCurrentClientId(null);
    };

    return (
        <div>
            <h2>Clients</h2>
            <form onSubmit={isUpdating ? handleUpdateSubmit : handleSubmit}>
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
                <button type="submit">{isUpdating ? 'Update Client' : 'Add Client'}</button>
                {isUpdating && <button type="button" onClick={resetForm}>Cancel</button>}
            </form>
            <ul>
                {clients.map(client => (
                    <li key={client._id}>
                        {client.name} - {client.email} - {client.phone}
                        <button onClick={() => handleUpdate(client)}>Update</button>
                        <button onClick={() => handleDelete(client._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClientPage;