// src/features/CommunityHighlights.jsx
import React, { useState, useEffect } from 'react';

const CommunityHighlights = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Dummy posts (replace with an actual API call)
    const fetchCommunityPosts = async () => {
      const dummyPosts = [
        { id: 1, question: 'How do I engage students in virtual classrooms?', author: 'TutorJohn', votes: 15 },
        { id: 2, question: 'Best resources for teaching mathematics to high school students?', author: 'TeacherMary', votes: 20 },
        { id: 3, question: 'What are some fun ways to introduce coding to kids?', author: 'AdminDave', votes: 25 },
      ];
      setPosts(dummyPosts);
    };

    fetchCommunityPosts();
  }, []);

  return (
    <div className="community-highlights">
      <h3 className="text-xl font-bold mb-4">Community Discussions</h3>
      <div className="community-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="community-card p-4 border rounded shadow-sm">
            <h4 className="text-lg font-semibold">{post.question}</h4>
            <p className="text-sm text-gray-600">Asked by: {post.author}</p>
            <p className="text-sm text-gray-600 mt-1">Votes: {post.votes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityHighlights;
