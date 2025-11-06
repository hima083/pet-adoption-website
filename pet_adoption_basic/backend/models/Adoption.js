const mongoose = require('mongoose');
const adoptionSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  pet: {type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true},
  status: {type: String, enum: ['requested','approved','rejected','completed'], default: 'requested'},
  requestedAt: {type: Date, default: Date.now}
});
module.exports = mongoose.model('Adoption', adoptionSchema);
