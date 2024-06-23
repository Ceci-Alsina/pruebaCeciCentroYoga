const connection = require('../db/db');

// Obtener todos los contactos
const getAllContactos = (req, res) => {
    connection.query('SELECT * FROM contactos', (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
};

// Crear un nuevo contacto
const createContacto = (req, res) => {
    const { nombre, apellido, edad, genero, email, telefono, mensaje } = req.body;
    const query = 'INSERT INTO contactos (nombre, apellido, edad, genero, email, telefono, mensaje) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [nombre, apellido, edad, genero, email, telefono, mensaje];

    connection.query(query, values, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).json({ id: results.insertId, nombre, apellido, edad, genero, email, telefono, mensaje });
    });
};

// Actualizar un contacto
const updateContacto = (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, edad, genero, email, telefono, mensaje } = req.body;
    const query = 'UPDATE contactos SET nombre = ?, apellido = ?, edad = ?, genero = ?, email = ?, telefono = ?, mensaje = ? WHERE id = ?';
    const values = [nombre, apellido, edad, genero, email, telefono, mensaje, id];

    connection.query(query, values, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ id, nombre, apellido, edad, genero, email, telefono, mensaje });
    });
};

// Eliminar un contacto
const deleteContacto = (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM contactos WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: `Contacto con ID: ${id} eliminado` });
    });
};

module.exports = {
    getAllContactos,
    createContacto,
    updateContacto,
    deleteContacto
};
