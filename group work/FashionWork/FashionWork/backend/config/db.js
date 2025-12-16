// config/db.js
const mongoose = require('mongoose');
require('dotenv').config(); // 读取 .env 里的 MONGO_URI

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;

    if (!uri) {
      throw new Error('MONGO_URI is not defined in .env file');
    }

    await mongoose.connect(uri); // 新版 mongoose 不需要额外 options
    console.log('✅ MongoDB connection successful');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1); // 连接失败直接退出
  }
};

module.exports = connectDB;