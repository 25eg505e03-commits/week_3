
import express from 'express';
import mongoose from 'mongoose';
import { productApp } from './productAPI.js';

// Express application instance
const app = express();
// Set port and MongoDB connection 
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/week3db';

// Parse JSON request bodies 
app.use(express.json());
// the product router on the /product-api path
app.use('/product-api', productApp);

// Simple route to verify the server is running
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Week 3 API Running' });
});

// Connect to MongoDB and start the server once connected
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
