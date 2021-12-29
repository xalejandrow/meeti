const Categorias = require('../models/Categorias');
const Grupos = require('../models/Grupos');

exports.formNuevoGrupo = async (req, res) => {
    const categorias = await Categorias.findAll();

    res.render('nuevo-grupo', {
        nombrePagina : 'Crea un nuevo grupo',
        categorias
    })
}

// Almacena los grupos en la BD
exports.crearGrupo = async (req, res) => {
    // Sanitizar los campos
    req.sanitizeBody('nombre');
    req.sanitizeBody('url');

    const grupo = req.body;
    // almacena el usuario autenticado como el creador del grupo
    grupo.usuarioId = req.user.id;
    // no es necesario grupo.categoriaId porque lo pongo en el name del formulario
    // grupo.categoriaId = req.body.categoria;

    // console.log(grupo);
    try {
        // almacenar en la BD
        await Grupos.create(grupo);
        req.flash('exito', 'Se ha creado el Grupo Correctamente');
        res.redirect('/administracion');
    } catch (error) {
        // console.log(error);
        // Extraer el message de los errores
        const erroresSequelize = error.errors.map(err =>  err.message);

        // req.flash('error', error);
        req.flash('error', erroresSequelize);
        res.redirect('/nuevo-grupo');
    }
}