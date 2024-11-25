import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for the date picker

// Initial service groups
const initialServiceGroups = {
  waxing: [
    { id: 1, name: 'Bikini Wax', duration: 30 },
    { id: 2, name: 'Leg Wax', duration: 45 },
  ],
  facials: [
    { id: 3, name: 'Hydrating Facial', duration: 60 },
    { id: 4, name: 'Anti-Aging Facial', duration: 75 },
  ],
  massages: [
    { id: 5, name: 'Swedish Massage', duration: 90 },
    { id: 6, name: 'Deep Tissue Massage', duration: 120 },
  ],
};

// Generate available time slots for a specific date
const generateTimeSlots = (date) => {
  const slots = [];
  const startTime = new Date(date);
  startTime.setHours(9, 0, 0); // Start at 9:00 AM
  const endTime = new Date(date);
  endTime.setHours(18, 0, 0); // End at 6:00 PM

  while (startTime <= endTime) {
    slots.push(startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    startTime.setMinutes(startTime.getMinutes() + 30);
  }
  return slots;
};

const ServicePage = () => {
  const [serviceGroups] = useState(initialServiceGroups);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [bookedTimes, setBookedTimes] = useState([]); // Track booked times
  const [isConfirming, setIsConfirming] = useState(false); // For confirmation step

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setIsConfirming(false); // Reset confirmation when selecting a new service
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setIsConfirming(true); // Prepare for confirmation step
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const duration = selectedService.duration;

    // Block the booked time slots
    const newBookedTimes = [];
    for (let time = new Date(selectedDate); time < new Date(selectedDate.getTime() + duration * 60000); time.setMinutes(time.getMinutes() + 30)) {
      newBookedTimes.push(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }

    setBookedTimes([...bookedTimes, ...newBookedTimes]);
    alert(`Booking ${selectedService.name} on ${selectedDate.toLocaleDateString()} at ${selectedTime}`);
    
    // Reset selections
    setSelectedService(null);
    setSelectedTime('');
    setSelectedDate(new Date());
    setIsConfirming(false);
  };

  const availableTimeSlots = generateTimeSlots(selectedDate).filter(time => !bookedTimes.includes(time));

  return (
    <div>
      <h2>Select a Service</h2>
      {Object.keys(serviceGroups).map(group => (
        <div key={group}>
          <h3>{group.charAt(0).toUpperCase() + group.slice(1)}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {serviceGroups[group].map(service => (
              <button
                key={service.id}
                onClick={() => handleServiceSelect(service)}
                style={{
                  background: selectedService?.id === service.id ? 'lightgreen' : 'white',
                  border: '1px solid purple',
                  padding: '10px',
                  cursor: 'pointer',
                }}
              >
                {service.name} - {service.duration} minutes
              </button>
            ))}
          </div>
        </div>
      ))}

      {selectedService && (
        <div>
          <h3>Select a Date</h3>
          <DatePicker 
            selected={selectedDate} 
            onChange={date => setSelectedDate(date)} 
            dateFormat="MMMM d, yyyy" 
          />

          <h3>Available Times for {selectedService.name} on {selectedDate.toLocaleDateString()}</h3>
          <div>
            {availableTimeSlots.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)}
                style={{
                  background: selectedTime === time ? 'lightblue' : 'white',
                  border: '1px solid purple',
                  padding: '10px',
                  margin: '5px 0',
                  cursor: 'pointer',
                }}
              >
                {time}
              </button>
            ))}
          </div>

          {isConfirming && (
            <div>
              <h3>Confirm Your Booking</h3>
              <p>Service: {selectedService.name}</p>
              <p>Date: {selectedDate.toLocaleDateString()}</p>
              <p>Time: {selectedTime}</p>
              <button onClick={handleSubmit} style={{ marginTop: '10px', padding: '10px', background: 'purple', color: 'white' }}>
                Confirm Booking
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ServicePage;