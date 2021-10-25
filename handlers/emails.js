const nodemailer = require('nodemailer');
const emailConfig = require('../config/emails');
const fs = require('fs');
const util = require('util');
const ejs = require('ejs');

let transport = nodemailer.createTransport({
    host : emailConfig.host,
    port : emailConfig.port,
    auth: {
        user: emailConfig.user,
        pass: emailConfig.pass
    }
});


exports.enviarEmail = async (opciones) => {
    console.log(opciones);

    // leer el archivo para el email

    // compilarlo

    // crear el HTML

    // configurar las opciones del email

    // enviar el email
    
}