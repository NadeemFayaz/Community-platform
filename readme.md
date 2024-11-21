# Community Platform
Welcome to the Community Platform! This project is a web application designed to facilitate community engagement through events, announcements, learning resources, and discussions.

# Table of Contents
Features
Installation
Usage
API Endpoints
Technologies Used
Contributing
License


## Features
User Authentication (Signup and Login)
Explore Events
Announcements
Learning Resources
Community Highlights

# Installation
Prerequisites
Node.js
npm (Node Package Manager)
MongoDB
Backend Setup
Clone the repository:

# Install dependencies:
npm install

# Create a .env file in the backend directory and add your MongoDB connection string: MONGO_URI=mongodb://localhost:27017/community
SECRET_KEY=your_secret_key

# Start the backend server:
node server.js

# Frontend Setup
Navigate to the frontend directory:cd ../frontend

# Install dependencies:
npm install

# Start the frontend development server:
npm start

# Usage
Open your browser and navigate to http://localhost:3000.
Sign up for a new account or log in with an existing account.
Explore events, view announcements, access learning resources, and participate in community discussions.

# API Endpoints
User Authentication
POST /api/signup - Register a new user
POST /api/login - Login a user

Announcements
GET /api/announcements - Fetch all announcements
Community Highlights
GET /api/community - Fetch community highlights

# Technologies Used
Frontend: React, React Router, Tailwind CSS
Backend: Node.js, Express.js, MongoDB, Mongoose, bcrypt, JWT
Real-time Communication: Socket.io