// src/features/events/EventsList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await axios.get('/api/events');
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="event-list">
      {events.map((event) => (
        <div key={event.id} className="event-card">
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <button>RSVP</button>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
