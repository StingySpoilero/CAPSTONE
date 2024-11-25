import React, { useState } from 'react';

const services = [
  { id: 1, name: 'Waxing', duration: '30 minutes' },
  { id: 2, name: 'Facial', duration: '60 minutes' },
  { id: 3, name: 'Massage', duration: '90 minutes' },
];

const ServicePage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking logic here (e.g., send data to the server)
    alert(`Booking ${selectedService.name} at ${selectedTime}`);
  };

  return (
    <div>
      <h2>Select a Service</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {services.map((service) => (
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
            {service.name} - {service.duration}
          </button>
        ))}
      </div>

      {selectedService && (
        <div>
          <h3>Available Times for {selectedService.name}</h3>
          <div>
            {['10:00 AM', '11:00 AM', '1:00 PM', '3:00 PM'].map((time) => (
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