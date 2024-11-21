import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';

//const socket = io('http://localhost:5000'); // Replace with your server URL

const ChatRoom = () => {
  const { postId } = useParams();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
      socket.emit('joinRoom', postId);
    });

    socket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.emit('leaveRoom', postId);
      socket.off();
    };
  }, [postId]);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('message', { postId, text: message });
      setMessage('');
    }
  };

  const containerStyle = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const inputStyle = {
    padding: '10px',
    width: '80%',
    marginRight: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: 'white',
  };

  const messageStyle = {
    padding: '10px',
    borderBottom: '1px solid #ccc',
  };

  return (
    <div style={containerStyle}>
      <h3>Chat Room for Post {postId}</h3>
      <div>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          style={inputStyle}
        />
        <button onClick={sendMessage} style={buttonStyle}>Send</button>
      </div>
      <div>
        {messages.map((msg, idx) => (
          <p key={idx} style={messageStyle}>{msg.text}</p>
        ))}
      </div>
    </div>
  );
};

export default ChatRoom;