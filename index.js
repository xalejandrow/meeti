const express = require('express');
const routes = require('./routes');

require('dotenv').config({ path: 'variables.env'});


const app = express();

// Routing
app.use('/', routes());

// Agrega el puerto
app.listen(process.env.PORT, () => {
    console.log('El servidor está funcionando');
});
