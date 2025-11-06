// Run with: npm run seed
require('dotenv').config();
const mongoose = require('mongoose');
const Pet = require('./models/Pet');
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(async () => {
    console.log('Connected. Seeding...');
    await Pet.deleteMany({});
    const pets = [
      {name: 'Buddy', species: 'Dog', breed: 'Labrador', age: 3, sex: 'Male', description: 'Friendly and playful', image: ''},
      {name: 'Mittens', species: 'Cat', breed: 'Siamese', age: 2, sex: 'Female', description: 'Calm and affectionate', image: ''},
      {name: 'Coco', species: 'Rabbit', breed: 'Dutch', age: 1, sex: 'Female', description: 'Shy but sweet', image: ''}
    ];
    await Pet.insertMany(pets);
    console.log('Seeded pets');
    process.exit(0);
  })
  .catch(err => console.error(err));
