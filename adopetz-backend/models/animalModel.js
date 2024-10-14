const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const animalSchema = new mongoose.Schema({
  animalId: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

// Aplica o plugin de incremento automático ao esquema
animalSchema.plugin(AutoIncrement, { inc_field: 'animalId', start_seq: 11 });

module.exports = mongoose.model('Animal', animalSchema);
