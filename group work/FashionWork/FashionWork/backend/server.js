// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// ✅ 中间件一定要在路由之前
app.use(cors());
app.use(express.json());

// Import routes
const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);

// Port
const PORT = process.env.PORT || 4060;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log("Server running on port " + PORT);
    });
  })
  .catch(err => {
    console.log("MongoDB connection error:", err);
  });

app.get('/', (req, res) => {
  res.send("Fashion API is running");
});