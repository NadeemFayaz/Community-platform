import React, { useEffect, useState } from 'react';

const EventsCarousel = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('./events.json'); // Adjust path if needed
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Events:', data); // Debugging
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
        setEvents([]); // Set an empty array on error
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="events-carousel">
      <h1>Events Carousel</h1>
      {events.length === 0 ? (
        <p>No events available</p>
      ) : (
        <div className="carousel">
          {events.map((event, index) => (
            <div key={index} className="event">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsCarousel;