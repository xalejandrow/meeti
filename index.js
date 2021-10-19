const express = require('express');
const path = require('path');
const routes = require('./routes');

require('dotenv').config({ path: 'variables.env'});

const app = express();

// Habilitar EJS como template engine
app.set('view engine', 'ejs');

// Ubicación vistas
app.set('views', path.join(__dirname, './views'));

// archivos estáticos
app.use(express.static('public'));


// Routing
app.use('/', routes());

// Agrega el puerto
app.listen(process.env.PORT, () => {
    console.log('El servidor está funcionando');
});
