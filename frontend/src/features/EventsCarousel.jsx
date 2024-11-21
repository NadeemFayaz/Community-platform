import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

const EventsCarousel = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/events'); // Adjust path if needed
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
      <h2>Events Carousel</h2>
      <div className="events-grid">
        {events.map((event, index) => (
          <Card key={index} className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={event.imageUrl || 'https://miro.medium.com/v2/resize:fit:828/1*Lbt6vjwNDbDeiZgepwPjMg.png'} // Use event image or placeholder
                alt="event"
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {event.title}
              </Typography>
              <Typography>
                {event.description}
              </Typography>
              <Typography className="mt-4">
                <strong>Date:</strong> {event.date}
              </Typography>
              <Typography>
                <strong>Location:</strong> {event.location}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EventsCarousel;