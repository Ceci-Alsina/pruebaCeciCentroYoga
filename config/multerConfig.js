const multer = require('multer');
const path = require('path');

// Almacenamiento de archivos con 'diskStorage'.
const storage = multer.diskStorage({
    // 'destination' carpeta donde se guardarán los archivos subidos.
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/uploads')); // Ruta 
    },
    // 'filename' especifica cómo se nombrarán los archivos subidos.
    filename: (req, file, cb) => {
        // PAra asegurarse de que cada archivo tenga un nombre único basado en la marca de tiempo actual.
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Crea una instancia de 'multer' con la configuración de almacenamiento definida.
const upload = multer({ storage: storage });

module.exports = upload;
