const connection = require('../db/db');

// Obtener todos los productos
const getAllProducts = (req, res) => {
    connection.query('SELECT * FROM productos', (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
};

// Obtener un producto por ID
const getProductById = (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM productos WHERE id_producto = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results[0]);
    });
};

// Crear un nuevo producto
const createProduct = (req, res) => {
    const { nombre, precio, descripcion, stock, fk_categoria } = req.body;
    const imagen = req.file ? req.file.filename : null;
    const query = 'INSERT INTO productos (nombre, precio, descripcion, stock, fk_categoria, imagen) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [nombre, precio, descripcion, stock, fk_categoria, imagen];

    connection.query(query, values, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).json({ id_producto: results.insertId, nombre, precio, descripcion, stock, fk_categoria, imagen });
    });
};

// Actualizar un producto
const updateProduct = (req, res) => {
    const { id } = req.params;
    const { nombre, precio, descripcion, stock, fk_categoria } = req.body;
    const imagen = req.file ? req.file.filename : null;
    const query = 'UPDATE productos SET nombre = ?, precio = ?, descripcion = ?, stock = ?, fk_categoria = ?, imagen = ? WHERE id_producto = ?';
    const values = [nombre, precio, descripcion, stock, fk_categoria, imagen, id];

    connection.query(query, values, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ id_producto: id, nombre, precio, descripcion, stock, fk_categoria, imagen });
    });
};

// Eliminar un producto
const deleteProduct = (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM productos WHERE id_producto = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: `Producto con ID: ${id} eliminado` });
    });
};



module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
