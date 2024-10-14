const express = require('express');
const cors = require('cors');
const mongoose = require('./config/db'); // Conexão com o banco de dados
const animalRoutes = require('./routes/animalRoutes'); // Rotas de animais
const path = require('path'); // Importando o módulo path

const app = express();
const port = 3000;

// Middleware para permitir o uso de JSON no corpo da requisição
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4200'
}));
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos, como imagens
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Usando as rotas do animal
app.use('/dados', animalRoutes);

// Mensagem Servidor rodando
app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});