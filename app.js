import express from 'express';
import rutas from './router/rutas.js';
import cookieParser from 'cookie-parser';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', rutas);

// Ruta adicional para manejar 404
app.use((req, res) => {
    res.status(404).send('Página no encontrada');
});

app.listen(port, () => console.log("Servidor levantado"));
