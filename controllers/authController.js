const passport = require("passport");

exports.autenticarUsuario = passport.authenticate('local', {
    successRedirect : '/administracion',
    failureRedirect : '/iniciar-sesion',
    failureFlash : true,
    badRequestMessage : 'Ambos campos son obligatorios'

});

// Revisa si el usuario está autenticado o no
exports.usuarioAutenticado = (req, res, next) => {
    // si el usuario esta autenticado, adelante
    if(req.isAuthenticated() ) {
        return next();
    }

    // sino esta autenticado
    return res.redirect('/iniciar-sesion');
}