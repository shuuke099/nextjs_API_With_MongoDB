const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'laptop must have a title'],
  },
  brand: {
    type: String,
    enum: ['hp', 'dell', 'lenova', 'mac', 'toshiba', 'accer'],
    required: [true, ' laptop must have a title'],
  },
  price: {
    type: Number,
    required: [true, ' laptop must have a price'],
  },
  discription: {
    type: String,
    required: [true, ' laptop must have a title'],
  },
  img: {
    type: String,
    required: [true, ' laptop must have a title'],
  },
  processor: {
    type: String,
    required: [true, ' laptop must have a title'],
  },
  ram: {
    type: String,
    required: [true, ' laptop must have a title'],
  },
  screenSize: String,
});

module.exports =
  mongoose.models.Labtop || mongoose.model('Laptop', laptopSchema);
