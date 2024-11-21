import React, { useEffect, useState } from 'react';

const ResourcesHighlights = () => {
  const [resources, setResources] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/resources.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setResources(data))
      .catch((error) => setError(error.message));
  }, []);

  const containerStyle = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
  };

  const listItemStyle = {
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  };

  const keyStyle = {
    fontWeight: 'bold',
  };

  const linkStyle = {
    color: '#007BFF',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <h2>Resources Highlights</h2>
      {error && <p>{error}</p>}
      <ul style={listStyle}>
        {resources.map((resource, index) => (
          <li key={index} style={listItemStyle}>
            {Object.entries(resource).map(([key, value]) => {
              if (key === 'id') return null;
              if (key === 'downloadLink') {
                return (
                  <div key={key}>
                    <span style={keyStyle}>{key}:</span> <a href={value} target="_blank" rel="noopener noreferrer" style={linkStyle}>Download</a>
                  </div>
                );
              }
              return (
                <div key={key}>
                  <span style={keyStyle}>{key}:</span> {value}
                </div>
              );
            })}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourcesHighlights;