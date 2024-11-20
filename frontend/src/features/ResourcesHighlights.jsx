// src/features/ResourcesHighlights.jsx
import React, { useState, useEffect } from 'react';

const ResourcesHighlights = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    // Dummy resources (replace with an actual API call)
    const fetchResources = async () => {
      const dummyResources = [
        { id: 1, title: 'Lesson Plan 101', type: 'Lesson Plan', description: 'Introduction to teaching methodologies.' },
        { id: 2, title: 'Coursebook: Math Basics', type: 'Coursebook', description: 'Fundamentals of Mathematics for beginners.' },
        { id: 3, title: 'Activity Ideas for Tutors', type: 'Activities', description: 'Engaging activities to involve students.' },
      ];
      setResources(dummyResources);
    };

    fetchResources();
  }, []);

  return (
    <div className="resources-highlights">
      <h3 className="text-xl font-bold mb-4">Teaching Resources</h3>
      <div className="resource-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((resource) => (
          <div key={resource.id} className="resource-card p-4 border rounded shadow-sm">
            <h4 className="text-lg font-semibold">{resource.title}</h4>
            <p className="text-sm text-gray-600">{resource.type}</p>
            <p className="mt-2 text-gray-800">{resource.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesHighlights;
