// src/pages/AppointmentPage.jsx
import React, { useEffect, useState } from 'react';
import { getAppointments, createAppointment, deleteAppointment } from '../api.mjs';

const AppointmentPage = () => {
    const [appointments, setAppointments] = useState([]);
    const [newAppointment, setNewAppointment] = useState({
        appointmentWithUserId: '',
        start: '',
        end: '',
        details: {
            name: '',
            notes: ''
        }
    });

    useEffect(() => {
        const fetchAppointments = async () => {
            const data = await getAppointments();
            setAppointments(data);
        };

        fetchAppointments();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Handle nested state for details
        if (name.startsWith('details.')) {
            const detailName = name.split('.')[1];
            setNewAppointment((prev) => ({
                ...prev,
                details: {
                    ...prev.details,
                    [detailName]: value
                }
            }));
        } else {
            setNewAppointment((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const createdAppointment = await createAppointment(newAppointment);
        setAppointments((prev) => [...prev, createdAppointment]);
        setNewAppointment({
            appointmentWithUserId: '',
            start: '',
            end: '',
            details: {
                name: '',
                notes: ''
            }
        });
    };

    const handleDelete = async (appointmentId) => {
        await deleteAppointment(appointmentId);
        setAppointments(appointments.filter(app => app.id !== appointmentId)); // Update state
    };

    return (
        <div>
            <h2>Your Appointments</h2>
            <form onSubmit={handleSubmit}>
                <h3>Create New Appointment</h3>
                <input
                    type="text"
                    name="appointmentWithUserId"
                    placeholder="Appointment With User ID"
                    value={newAppointment.appointmentWithUserId}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="datetime-local"
                    name="start"
                    value={newAppointment.start}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="datetime-local"
                    name="end"
                    value={newAppointment.end}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="details.name"
                    placeholder="Appointment Name"
                    value={newAppointment.details.name}
                    onChange={handleInputChange}
                    required
                />
                <textarea
                    name="details.notes"
                    placeholder="Notes"
                    value={newAppointment.details.notes}
                    onChange={handleInputChange}
                />
                <button type="submit">Add Appointment</button>
            </form>

            <h3>Existing Appointments</h3>
            <ul>
                {appointments.map(app => (
                    <li key={app.id}>
                        <strong>{app.details.name}</strong> ({app.start} - {app.end})
                        <button onClick={() => handleDelete(app.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AppointmentPage;