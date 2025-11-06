const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');
const auth = require('../middleware/auth');

// list all available pets
router.get('/', async (req, res) => {
  const pets = await Pet.find({available: true});
  res.json(pets);
});

// get pet by id
router.get('/:id', async (req, res) => {
  const pet = await Pet.findById(req.params.id);
  if(!pet) return res.status(404).json({msg: 'Pet not found'});
  res.json(pet);
});

// create pet (for admin or initial seed) - no auth in basic version, but could be added
router.post('/', async (req, res) => {
  const pet = new Pet(req.body);
  await pet.save();
  res.json(pet);
});

// mark pet unavailable (adopted)
router.patch('/:id/available', async (req, res) => {
  const pet = await Pet.findByIdAndUpdate(req.params.id, {available: req.body.available}, {new: true});
  res.json(pet);
});

module.exports = router;
