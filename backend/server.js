require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET_KEY = process.env.SECRET_KEY;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/community-platform');

// Define User Schema and Model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// User Registration
app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  await newUser.save();
  res.status(201).json({ message: 'User registered successfully' });
});

// User Login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

// Landing Page
app.get('/', (req, res) => {
  res.send('Welcome to the Community Platform');
});

// Home Page
app.get('/home', (req, res) => {
  res.send('Welcome to the Home page');
});


//fetch announcements
app.get('/api/announcements', async (req, res) => {
  const announcements = [
    {
      id: 1,
      title: 'Announcement 1',
      content: 'This is the first announcement',
      date: '2021-10-01',
    },
    {
      id: 2,
      title: 'Announcement 2',
      content: 'This is the second announcement',
      date: '2021-10-02',
    },
  ];
  res.json(announcements);
});

//fetch events

app.get('/api/events', async (req, res) => {
  const events = [
    {
      id: 1,
      title: 'Event 1',
      date: '2021-10-01',
    },
    {
      id: 2,
      title: 'Event 2',
      date: '2021-10-02',
    },
  ];
  res.json(events);
});

//fetch resources
app.get('/api/resources', async (req, res) => {
  const resources = [
    {
      id: 1,
      title: 'Resource 1',
      description: 'This is the first resource',
    },
    {
      id: 2,
      title: 'Resource 2',
      description: 'This is the second resource',
    },
  ];
  res.json(resources);
});

//fetch community highlights
app.get('/api/community', async (req, res) => {
  const community = [
    {
      id: 1,
      name: 'Community 1',
      description: 'This is the first community',
    },
    {
      id: 2,
      name: 'Community 2',
      description: 'This is the second community',
    },
  ];
  res.json(community);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});