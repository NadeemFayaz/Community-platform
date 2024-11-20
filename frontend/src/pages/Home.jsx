import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventsCarousel from '../features/EventsCarousel.jsx';
import Header from '../components/Header.jsx';

const Home = () => {
  const navigate = useNavigate();

  const handleSubmitEvents = () => {
    navigate('/eventscarousel');
  };

  return (
    <div className="home-page">
      <Header />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content text-center py-10">
          <h1 className="text-4xl font-bold">Welcome to the Community Platform</h1>
          <p className="mt-4 text-lg">Join, Learn, and Share Knowledge with Peers</p>
          <div className="mt-6">
            <button onClick={handleSubmitEvents} className="btn-primary mr-4">Explore Events</button>
            <button className="btn-secondary">Start Learning</button>
          </div>
        </div>
      </section>

      {/* Announcements / News Feed */}
      <section className="announcements my-10">
        <h2 className="text-2xl font-semibold mb-4">Latest Announcements</h2>
        <Announcements />
      </section>

      {/* Trending Events */}
      <section className="trending-events my-10">
        <h2 className="text-2xl font-semibold mb-4">Trending Events</h2>
        <EventsCarousel />
      </section>

      {/* Teaching Resources Highlights */}
      <section className="resources-highlights my-10">
        <ResourcesHighlights />
      </section>
    </div>
  );
};

export default Home;