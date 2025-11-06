const mongoose = require('mongoose');
const petSchema = new mongoose.Schema({
  name: String,
  species: String,
  breed: String,
  age: Number,
  sex: String,
  description: String,
  image: String,
  available: {type: Boolean, default: true},
  createdAt: {type: Date, default: Date.now}
});
module.exports = mongoose.model('Pet', petSchema);
