const express = require('express');
const Animal = require('../models/animalModel');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Pasta onde as imagens serão armazenadas
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Nome único para o arquivo
  }
});

const upload = multer({ storage: storage });

// Rota POST recebe informações para add-pet
router.post('/', upload.single('image'), async (req, res) => {
  const { name, species, breed, age, description } = req.body;

  if (!name || !species || !breed || !age || !description) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  try {
      /*  Busca o animal com maior animalId
      const lastAnimal = await Animal.findOne().sort({ animalId: -1 });
      const newAnimalId = lastAnimal ? lastAnimal.animalId + 1 : 1; */
      const lastAnimal = await Animal.findOne().sort({ animalId: -1 });
const nextAnimalId = lastAnimal ? lastAnimal.animalId + 1 : 1; // Se não houver, começa em 1

      const newAnimal = new Animal({
      name,
      species,
      breed,
      age,
      description,
      image: req.file ? req.file.filename : null // Armazena o nome da imagem no banco
    });

    const savedAnimal = await newAnimal.save();

    res.status(201).json({
      message: 'Dados recebidos e salvos com sucesso!',
      data: savedAnimal,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao salvar os dados' });
  }
});

// Rota GET mosrtra todos pets no banco
router.get('/', async (req, res) => {
  try {
    const animals = await Animal.find();
    console.log(animals); // Adicione este log para verificar o que está sendo retornado
    res.status(200).json(animals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter animais' });
  }
});

// Rota DELETE recebe animalId e nome para exclusão
router.delete('/', async (req, res) => {
  const { animalId, name } = req.query;

  if (!animalId || !name) {
    return res.status(400).json({ message: 'animalId e name são obrigatórios' });
  }

  try {
    const result = await Animal.deleteOne({ animalId: animalId, name: name });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Animal não encontrado' });
    }

    res.status(200).json({ message: 'Animal apagado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao apagar o animal' });
  }
});

// Rota PUT que recebe id do pet para atualizar 
router.put('/:animalId', async (req, res) => {
  const { animalId } = req.params;
  const updates = req.body;

  try {
    const updatedAnimal = await Animal.findOneAndUpdate(
      { animalId: animalId },
      updates,
      { new: true, runValidators: true }
    );

    if (!updatedAnimal) {
      return res.status(404).json({ message: 'Animal não encontrado' });
    }

    res.status(200).json({
      message: 'Animal atualizado com sucesso!',
      data: updatedAnimal,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar o animal' });
  }
});

module.exports = router;
