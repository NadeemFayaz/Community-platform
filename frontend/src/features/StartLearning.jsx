import React, { useState } from 'react';

const tutorials = [
  { id: 1, title: 'JavaScript', videoUrl: 'https://www.youtube.com/watch?v=hdI2bqOjy3c' },
  { id: 2, title: 'ReactJs', videoUrl: 'https://www.youtube.com/watch?v=b9eMGE7QtTk' },
  { id: 3, title: 'NodeJs', videoUrl: 'https://www.youtube.com/watch?v=fBNz5xF-Kx4' },
  { id: 4, title: 'Python', videoUrl: 'https://www.youtube.com/watch?v=rfscVS0vtbw' },
  { id: 5, title: 'Django', videoUrl: 'https://www.youtube.com/watch?v=F5mRW0jo-U4' },
  // Add more tutorials as needed
];

export default function StartLearning() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleCardClick = (videoUrl) => {
    const embedUrl = videoUrl.replace('watch?v=', 'embed/');
    setSelectedVideo(embedUrl);
  };

  return (
    <div>
      <h1>Start Learning</h1>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {tutorials.map((tutorial) => (
          <div
            key={tutorial.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '16px',
              width: '200px',
              textAlign: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
            onClick={() => handleCardClick(tutorial.videoUrl)}
          >
            <h2>{tutorial.title}</h2>
          </div>
        ))}
      </div>
      {selectedVideo && (
        <div style={{ marginTop: '20px' }}>
          <iframe
            width="600"
            height="400"
            src={selectedVideo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Tutorial Video"
          ></iframe>
        </div>
      )}
    </div>
  );
}