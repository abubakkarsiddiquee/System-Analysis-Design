import React, { useState } from 'react';

const BookingForm = () => {
    const [name, setName] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            name,
            destination,
            date
        };
        console.log(formData);

        // You can add Axios or fetch to send data to your backend API
        // Example using fetch:
        /*
        fetch('/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Booking successful!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error while booking');
        });
        */
    };

    return (
        <div className="container">
            <h1>Book Your Ticket</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                <label htmlFor="destination">Destination:</label>
                <input type="text" id="destination" value={destination} onChange={(e) => setDestination(e.target.value)} required />
                <label htmlFor="date">Travel Date:</label>
                <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BookingForm;
