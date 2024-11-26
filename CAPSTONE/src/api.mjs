// src/api.mjs
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/clients'; // backend API URL

// Base options for RapidAPI
const RAPIDAPI_OPTIONS = {
    headers: {
        'x-rapidapi-key': 'cbebdaed5fmshcaf21c3a7030cffp1edae5jsnae30a82d0be0', //API Key Inserted
        'x-rapidapi-host': 'simple-appointment-scheduling-api.p.rapidapi.com',
        'Content-Type': 'application/json'
    }
};

// Function to delete an appointment
export const deleteAppointment = async (appointmentId) => {
    const url = `https://simple-appointment-scheduling-api.p.rapidapi.com/api/user/61eec6ae-2d51-4886-a7c5-c46e627f4375/appointments/${appointmentId}`;
    try {
        const response = await axios.delete(url, { ...RAPIDAPI_OPTIONS });
        console.log('Deleted appointment:', response.data);
        return response.data; // Return the result if needed
    } catch (error) {
        console.error('Error deleting appointment:', error);
    }
};

// Function to create a new appointment
export const createAppointment = async (appointmentData) => {
    const url = 'https://simple-appointment-scheduling-api.p.rapidapi.com/api/user/61eec6ae-2d51-4886-a7c5-c46e627f4375/appointments';
    try {
        const response = await axios.post(url, appointmentData, { ...RAPIDAPI_OPTIONS });
        console.log('Created appointment:', response.data);
        return response.data; // Return the result if needed
    } catch (error) {
        console.error('Error creating appointment:', error);
    }
};

// Function to get all appointments
export const getAppointments = async () => {
    const url = 'https://simple-appointment-scheduling-api.p.rapidapi.com/api/user/61eec6ae-2d51-4886-a7c5-c46e627f4375/appointments';
    try {
        const response = await axios.get(url, { ...RAPIDAPI_OPTIONS });
        console.log('Fetched appointments:', response.data);
        return response.data; // Return the result if needed
    } catch (error) {
        console.error('Error fetching appointments:', error);
    }
};

// Other API functions...

export const getClients = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createClient = async (clientData) => {
    const response = await axios.post(API_URL, clientData);
    return response.data;
};

export const updateClient = async (id, clientData) => {
    const response = await axios.put(`${API_URL}/${id}`, clientData);
    return response.data;
};

export const deleteClient = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};

