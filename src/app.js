const express = require('express');
const path = require('path');
const cors = require('cors'); // Importar cors
const app = express();

// Middleware para habilitar CORS
app.use(cors());

// Middleware para servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, '..', 'public')));

// Middleware para parsear solicitudes JSON
app.use(express.json());

// Importar rutas
const contactoRoutes = require('../routes/contactoRoutes');
app.use('/api/contactos', contactoRoutes);

// Configurar el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
