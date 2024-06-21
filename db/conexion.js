const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Cecilia2012!',
    database: 'centro_de_yoga',
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