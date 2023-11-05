/* Filename: ComplexCode.js 
   Content: A complex JavaScript code that simulates a virtual online shopping website with multiple features and functionalities */

// Some imported modules and libraries
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Set up the Express app
const app = express();
app.use(bodyParser.json());

// Establish MongoDB connection
mongoose.connect('mongodb://localhost/shopping_website_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('MongoDB connection error:', error));

// Define database schemas using Mongoose
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});

const User = mongoose.model('User', userSchema);
const Item = mongoose.model('Item', itemSchema);

// Authentication middleware
const authenticateUser = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  jwt.verify(token, 'secretKey', (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token.' });
    }

    req.userId = decoded.userId;
    next();
  });
};

// Routes

// User registration
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const user = new User({
    name: name,
    email: email,
    password: hash,
  });

  await user.save();

  res.status(201).json({ message: 'User registration successful.' });
});

// User login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ error: 'Incorrect password.' });
  }

  const token = jwt.sign({ userId: user._id }, 'secretKey');

  res.status(200).json({ token: token });
});

// Item creation
app.post('/items', authenticateUser, async (req, res) => {
  const { name, price, description } = req.body;

  const item = new Item({
    name: name,
    price: price,
    description: description,
  });

  await item.save();

  res.status(201).json({ message: 'Item creation successful.' });
});

// Item retrieval
app.get('/items', async (req, res) => {
  const items = await Item.find();

  res.status(200).json({ items: items });
});

// Item update
app.put('/items/:id', authenticateUser, async (req, res) => {
  const itemId = req.params.id;
  const { name, price, description } = req.body;

  const updatedItem = await Item.findByIdAndUpdate(itemId, { name: name, price: price, description: description });

  if (!updatedItem) {
    return res.status(404).json({ error: 'Item not found.' });
  }

  res.status(200).json({ message: 'Item update successful.' });
});

// Item deletion
app.delete('/items/:id', authenticateUser, async (req, res) => {
  const itemId = req.params.id;

  const deletedItem = await Item.findByIdAndDelete(itemId);

  if (!deletedItem) {
    return res.status(404).json({ error: 'Item not found.' });
  }

  res.status(200).json({ message: 'Item deletion successful.' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});