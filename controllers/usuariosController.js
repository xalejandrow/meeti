const Usuarios = require('../models/Usuarios');

exports.formCrearCenta = (req, res) => {
    res.render('crear-cuenta', {
        nombrePagina : 'Crea tu Cuenta'
    })
}

exports.crearNuevaCuenta = async (req, res) => {
    const usuario = req.body;
    // console.log(usuario);
    req.checkBody('confirmar', 'El password confirmado no puede ir vacío').notEmpty();
    req.checkBody('confirmar', 'El password es diferente').equals(req.body.password);

    // Leer los errores de express
    const erroresExpress = req.validationErrors();
    console.log(erroresExpress);

    try {
        const nuevoUsuario = await Usuarios.create(usuario);

    // TODO Flash Message y redireccionar
    console.log('Usuario creado', nuevoUsuario);
        
    } catch (error) {
        // Extraer el message de los errores
        const erroresSequelize = error.errors.map(err =>  err.message);
        // Extraer unicamente el msg de los errores
        const errExp = erroresExpress.map(err =>  err.msg);
        console.log(errExp);

        // unir los errores
        const listaErrores = [...erroresSequelize, ...errExp];
        req.flash('error', listaErrores);
        // req.flash('error', erroresSequelize);
        res.redirect('/crear-cuenta');
    }
    
}