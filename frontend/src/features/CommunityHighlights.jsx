import React, { useEffect, useState } from 'react';

export default function CommunityHighlights() {
  const [highlights, setHighlights] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchHighlights = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/community'); // Adjust the endpoint as needed
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setHighlights(data);
      } catch (error) {
        setError('Error fetching community highlights');
        console.error('Error fetching community highlights:', error);
      }
    };

    fetchHighlights();
  }, []);

  return (
    <div>
      <h2>Community Highlights</h2>
      {error && <p>{error}</p>}
      <ul>
        {highlights.map((highlight, index) => (
          <li key={index}>{highlight.title}</li>
        ))}
      </ul>
    </div>
  );
}