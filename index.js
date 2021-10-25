const express = require('express');
const expresLayouts = require('express-ejs-layouts');
const path = require('path');
const router = require('./routes');

const db = require('./config/db');

require('./models/Usuarios');
// try {
//     db.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
db.sync().then(() => console.log('DB Conectada')).catch((error) => console.log(error));

require('dotenv').config({ path: 'variables.env'});

const app = express();

// Habilitar EJS como template engine
app.use(expresLayouts);
app.set('view engine', 'ejs');

// Ubicación vistas
app.set('views', path.join(__dirname, './views'));

// archivos estáticos
app.use(express.static('public'));

// Middleware (usuario logueado, flash messages, fecha actual)
app.use((req, res, next) => {
    const fecha = new Date();
    res.locals.year = fecha.getFullYear();
    next();
});

// Routing
app.use('/', router());

// Agrega el puerto
app.listen(process.env.PORT, () => {
    console.log('El servidor está funcionando');
});
