import React, { useEffect, useState } from 'react';

export default function ResourcesHighlights() {
  const [resources, setResources] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/resources'); // Adjust the endpoint as needed
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setResources(data);
      } catch (error) {
        setError('Error fetching resources');
        console.error('Error fetching resources:', error);
      }
    };

    fetchResources();
  }, []);

  return (
    <div>
      <h2>Resources Highlights</h2>
      {error && <p>{error}</p>}
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>{resource.title}</li>
        ))}
      </ul>
    </div>
  );
}