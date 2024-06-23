const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contactosController');

// Definir rutas CRUD
router.get('/', contactoController.getAllContactos);
router.post('/', contactoController.createContacto);
router.put('/:id', contactoController.updateContacto);
router.delete('/:id', contactoController.deleteContacto);

module.exports = router;
