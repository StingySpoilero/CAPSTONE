import React, { useState } from 'react';

// Initial service groups
const initialServiceGroups = {
  waxing: [
    { id: 1, name: 'Bikini Wax', duration: 30 }, // duration in minutes
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

// Generate available time slots
const generateTimeSlots = () => {
  const slots = [];
  const startTime = new Date();
  startTime.setHours(9, 0, 0); // Start at 9:00 AM
  const endTime = new Date();
  endTime.setHours(18, 0, 0); // End at 6:00 PM

  while (startTime <= endTime) {
    slots.push(startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    startTime.setMinutes(startTime.getMinutes() + 30);
  }
  return slots;
};

const ServicePage = () => {
  const [serviceGroups] = useState(initialServiceGroups); // Keep the initial service groups
  const [selectedService, setSelectedService] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [bookedTimes, setBookedTimes] = useState([]); // Track booked times

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const duration = selectedService.duration;
    const timeInMinutes = new Date(`1970-01-01T${selectedTime}:00`).getTime() / 60000; // Time in minutes
    const endTime = timeInMinutes + duration;

    // Block the booked time slots
    const newBookedTimes = [];
    for (let time = timeInMinutes; time < endTime; time += 30) {
      newBookedTimes.push(new Date(time * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }

    setBookedTimes([...bookedTimes, ...newBookedTimes]);
    alert(`Booking ${selectedService.name} at ${selectedTime}`);
    setSelectedService(null);
    setSelectedTime('');
  };

  const availableTimeSlots = generateTimeSlots().filter(time => !bookedTimes.includes(time));

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
          <h3>Available Times for {selectedService.name}</h3>
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

          {selectedTime && (
            <form onSubmit={handleSubmit}>
              <button type="submit" style={{ marginTop: '10px', padding: '10px', background: 'purple', color: 'white' }}>
                Confirm Booking
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default ServicePage;