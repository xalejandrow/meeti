const express = require('express');
require('dotenv').config({ path: 'variables.env'});


const app = express();


app.listen(process.env.PORT, () => {
    console.log('El servidor está funcionando');
});
