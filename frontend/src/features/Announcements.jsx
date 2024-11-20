import React, { useState, useEffect } from 'react';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/announcements'); // Correct the URL
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Announcements:', data); // Debugging
        setAnnouncements(data); // Ensure `data` is an array
      } catch (error) {
        console.error('Error fetching announcements:', error);
        setAnnouncements([]); // Set an empty array on error
      }
    };
    

    fetchAnnouncements();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Latest Announcements</h3>
      {Array.isArray(announcements) && announcements.length > 0 ? (
        announcements.map((announcement) => (
          <div key={announcement.id} className="announcement-card p-4 border rounded shadow-sm">
            <h4 className="text-lg font-semibold">{announcement.title}</h4>
            <p>{announcement.content}</p>
            <p className="text-sm text-gray-600">{announcement.date}</p>
          </div>
        ))
      ) : (
        <p>No announcements available</p>
      )}
    </div>
  );
};

export default Announcements;
