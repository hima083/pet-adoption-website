const express = require('express');
const router = express.Router();
const Adoption = require('../models/Adoption');
const Pet = require('../models/Pet');
const auth = require('../middleware/auth');

// request adoption
router.post('/', auth, async (req, res) => {
  try {
    const {petId} = req.body;
    const existing = await Adoption.findOne({user: req.user.id, pet: petId});
    if(existing) return res.status(400).json({msg: 'Adoption already requested'});
    const adoption = new Adoption({user: req.user.id, pet: petId});
    await adoption.save();
    // optionally mark pet unavailable in basic flow
    await Pet.findByIdAndUpdate(petId, {available: false});
    res.json(adoption);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// list user adoptions
router.get('/me', auth, async (req, res) => {
  const adoptions = await Adoption.find({user: req.user.id}).populate('pet');
  res.json(adoptions);
});

module.exports = router;
