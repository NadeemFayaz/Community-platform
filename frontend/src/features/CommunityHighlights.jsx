import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CommunityHighlights = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCommunityPosts = async () => {
      try {
        const response = await fetch('/community.json'); // Replace with actual API or JSON path
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching community posts:', error);
        setPosts([]); // Fallback to an empty list on error
      }
    };

    fetchCommunityPosts();
  }, []);

  const containerStyle = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const titleStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const postsListStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
  };

  const postCardStyle = {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const postTitleStyle = {
    fontSize: '1.25em',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const postInfoStyle = {
    fontSize: '0.875em',
    color: '#666',
    marginBottom: '10px',
  };

  const tagsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginTop: '10px',
  };

  const tagStyle = {
    backgroundColor: '#e0f7fa',
    color: '#007BFF',
    padding: '5px 10px',
    borderRadius: '15px',
    fontSize: '0.75em',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: 'white',
    marginTop: '10px',
  };

  const handleViewDiscussion = (postId) => {
    navigate(`/chatroom/${postId}`);
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Community Highlights</h2>
      {posts.length > 0 ? (
        <div style={postsListStyle}>
          {posts.map((post) => (
            <div key={post.id} style={postCardStyle}>
              <h3 style={postTitleStyle}>{post.question}</h3>
              <p style={postInfoStyle}>
                By: {post.author} | {post.replies} replies | {post.upvotes} upvotes
              </p>
              <div style={tagsContainerStyle}>
                {post.tags.map((tag, index) => (
                  <span key={index} style={tagStyle}>
                    #{tag}
                  </span>
                ))}
              </div>
              <button style={buttonStyle} onClick={() => handleViewDiscussion(post.id)}>View Discussion</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No active discussions at the moment.</p>
      )}
    </div>
  );
};

export default CommunityHighlights;