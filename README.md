# Proyecto Centro De Yoga - Backend

## Descripción

Este proyecto es el backend para la aplicación "Centro De Yoga", que gestiona la información de productos, contactos y usuarios. El backend está desarrollado utilizando Node.js, Express y MySQL.

## Índice

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Rutas de la API](#rutas-de-la-api)
  - [Productos](#productos)
  - [Contactos](#contactos)
- [Contribución](#contribución)
- [Licencia](#licencia)

## 🚀Requisitos

- ![Node.js](https://img.shields.io/badge/Node.js-14%2B-green) Node.js v14 o superior
- ![MySQL](https://img.shields.io/badge/MySQL-5.7%2B-blue) MySQL

## 🛠 Instalación

1. Clonar el repositorio:

    ```bash
    git clone https://github.com/tuusuario/pruebacentrodeyoga.git
    cd pruebacentrodeyoga
    ```

2. Instalar las dependencias:

    ```bash
    npm install
    ```

3. Configurar la base de datos:

   - Crear una base de datos en MySQL llamada `pruebacentrodeyoga`.
   - Importar el esquema y los datos iniciales desde el archivo SQL proporcionado (si lo hay).

4. Configurar las variables de entorno:

   - Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:

    ```env
    DB_HOST=localhost
    DB_USER=tuusuario
    DB_PASSWORD=tucontraseña
    DB_NAME=pruebacentrodeyoga
    ```

## 🚀 Uso

1. Iniciar el servidor:

    ```bash
    npm start
    ```

2. El servidor estará disponible en `http://localhost:3000`.

## 🗂 Estructura del Proyecto

- `config/`: Configuración de Multer para la carga de archivos.
- `controllers/`: Controladores que manejan la lógica de negocio.
- `db/`: Configuración de la conexión a la base de datos.
- `public/`: Archivos estáticos.
- `routes/`: Definición de las rutas de la API.
- `src/`: Archivo principal de la aplicación.

## 📚 Rutas de la API

### Productos

- `GET /api/productos`: Obtener todos los productos.
- `GET /api/productos/:id`: Obtener un producto por ID.
- `POST /api/productos`: Crear un nuevo producto.
- `PUT /api/productos/:id`: Actualizar un producto existente.
- `DELETE /api/productos/:id`: Eliminar un producto.

### Contactos

- `GET /api/contactos`: Obtener todos los contactos.
- `POST /api/contactos`: Crear un nuevo contacto.

## Contribución



