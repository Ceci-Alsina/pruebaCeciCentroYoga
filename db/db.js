const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Cecilia2012!',
    database: 'pruebaCentroDeYoga',
    port: 3306
});

connection.connect((err)=> {
    if(err) {
        console.error("Error de conexión con la base de datos: " + err);
        return;
    }
    console.log('Conectado a la base de datos');

});

module.exports = connection;