const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livrosController')

router.get('/', livrosController.getLivros);
router.get('/:id', livrosController.getLivro);
router.post('/', livrosController.createLivro);
router.put('/:id', livrosController.editLivro);
router.delete('/:id', livrosController.deleteLivro);

module.exports = router;