const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productosController');
const upload = require('../config/multerConfig'); // Importar la configuración de Multer

// Rutas para productos
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', upload.single('imagen'), createProduct); // Subida de un solo archivo
router.put('/:id', upload.single('imagen'), updateProduct); // Subida de un solo archivo
router.delete('/:id', deleteProduct);
router.get('/all', getAllProducts);


module.exports = router;

