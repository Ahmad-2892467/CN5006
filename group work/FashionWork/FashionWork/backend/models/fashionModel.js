const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  'Product Category': {
    type: String,
    required: true,
    trim: true
  },

  'Product Name': {
    type: String,
    required: true,
    trim: true,
    unique: true
  },

  'Units Sold': {
    type: Number,
    required: true,
    min: 0
  },

  'Returns': {
    type: Number,
    required: true,
    min: 0
  },

  'Revenue': {
    type: Number,
    required: true,
    min: 0
  },

  'Customer Rating': {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },

  'Stock Level': {
    type: Number,
    required: true,
    min: 0
  },

  'Season': {
    type: String,
    required: true
  },

  'Trend Score': {
    type: Number,
    required: true,
    min: 0
  }

}, { collection: 'Products' });

module.exports = mongoose.model('Product', productSchema);