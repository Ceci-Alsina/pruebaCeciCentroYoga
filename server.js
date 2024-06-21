const express = require('express');
const productosRouter = require('./routes/productos');
const path = require('path');

app.use(express.json());

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//Rutas
app.use('/api/productos', productosRouter);

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
