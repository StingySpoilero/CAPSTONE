// src/api.mjs
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/clients'; // Example for your own backend

// Example function to delete an appointment
export const deleteAppointment = async (appointmentId) => {
    const url = `https://simple-appointment-scheduling-api.p.rapidapi.com/api/user/61eec6ae-2d51-4886-a7c5-c46e627f4375/appointments/${appointmentId}`;
    const options = {
        method: 'DELETE',
        url: 'https://simple-appointment-scheduling-api.p.rapidapi.com/api/user/61eec6ae-2d51-4886-a7c5-c46e627f4375/appointments',
        headers: {
          'x-rapidapi-key': 'cbebdaed5fmshcaf21c3a7030cffp1edae5jsnae30a82d0be0',
          'x-rapidapi-host': 'simple-appointment-scheduling-api.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        data: {}
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result); // Log or handle the response as needed
        return result; // Optionally return the result
    } catch (error) {
        console.error('Error deleting appointment:', error);
    }
};

// Other API functions...

const options = {
    method: 'POST',
    url: 'https://simple-appointment-scheduling-api.p.rapidapi.com/api/user/61eec6ae-2d51-4886-a7c5-c46e627f4375/appointments',
    headers: {
      'x-rapidapi-key': 'cbebdaed5fmshcaf21c3a7030cffp1edae5jsnae30a82d0be0',
      'x-rapidapi-host': 'simple-appointment-scheduling-api.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    data: {
      appointmentWithUserId: '61eec6ae-2d51-4886-a7c5-c46e627f4376',
      start: '2023-10-01T02:30:00Z',
      end: '2023-10-01T03:00:00Z',
      details: {
        name: 'Dentist Appointment',
        notes: 'Something stuck in my teeth'
      }
    }
  };
  
  try {
      const response = await axios.request(options);
      console.log(response.data);
  } catch (error) {
      console.error(error);
  };

  const option = {
    method: 'GET',
    url: 'https://simple-appointment-scheduling-api.p.rapidapi.com/api/user/61eec6ae-2d51-4886-a7c5-c46e627f4375/appointments',
    headers: {
      'x-rapidapi-key': 'cbebdaed5fmshcaf21c3a7030cffp1edae5jsnae30a82d0be0',
      'x-rapidapi-host': 'simple-appointment-scheduling-api.p.rapidapi.com'
    }
  };
  
  try {
      const response = await axios.request(options);
      console.log(response.data);
  } catch (error) {
      console.error(error);
  };

