const Usuarios = require('../models/Usuarios');

exports.formCrearCenta = (req, res) => {
    res.render('crear-cuenta', {
        nombrePagina : 'Crea tu Cuenta'
    })
}

exports.crearNuevaCuenta = async (req, res) => {
    const usuario = req.body;
    // console.log(usuario);
    const nuevoUsuario = await Usuarios.create(usuario);

    // TODO Flash Message y redireccionar
    console.log('Usuario creado', nuevoUsuario);
}