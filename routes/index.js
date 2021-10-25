const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const usuariosController = require('../controllers/usuariosController');

module.exports = function() {
    router.get('/', homeController.home);
    
    /** Crear y Confirmar Cuentas */
    router.get('/crear-cuenta', usuariosController.formCrearCenta);
    router.post('/crear-cuenta', usuariosController.crearNuevaCuenta);
    router.get('/confirmar-cuenta/:correo', usuariosController.confirmarCuenta);

    // Iniciar sesión
    router.get('/iniciar-sesion', usuariosController.formIniciarSesion);


    return router;
}