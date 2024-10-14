const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Animal = require('../models/animalModel');

async function initializeDatabase() {
  try {
    // Conectando ao MongoDB
    await mongoose.connect('mongodb://localhost/adopetz', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Conectado ao MongoDB com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  }
}

// Chama a função de inicialização
initializeDatabase();

module.exports = mongoose;