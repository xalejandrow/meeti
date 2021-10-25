const Usuarios = require('../models/Usuarios');
const enviarEmail = require('../handlers/emails');

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

    try {
        await Usuarios.create(usuario);

        // Url de confirmación
        const url = `http://${req.headers.host}/confirmar-cuenta/${usuario.email}`;

        // Enviar email de confirmación
        await enviarEmail.enviarEmail({
            usuario,
            url,
            subject: 'Confirma tu cuenta de Meeti',
            archivo: 'confirmar-cuenta'
        });

        // Flash Message y redireccionar
        req.flash('exito', 'Hemos enviado un E-mail, confirma tu cuenta');
        res.redirect('/iniciar-sesion');
        

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

// Formulario para iniciar sesión
exports.formIniciarSesion = (req, res) => {
    res.render('iniciar-sesion', {
        nombrePagina : 'Iniciar Sesión'
    })
}