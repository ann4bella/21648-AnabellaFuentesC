const ctrl = {};
const Publicacion = require('../models/Publicacion');

// Controlador para crear nueva publicación ( C crear)
ctrl.crearPublicacion = async (req, res) => {

    // const { titulo, detalle, url_imagen, fecha } = req.body

    try {
        const publicacion = await Publicacion.create(req.body)
        await publicacion.save()

        return res.json({
            msg: 'Publicación guardada con éxito :D',
            publicacion
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            msg: "Error al crear nueva Publicación :c"
        })
    }

};

// Controlador para obtener todas las publicaciones (R read)
ctrl.obtenerPublicaciones = async (req, res) => {
    try {
        const publicaciones = await Publicacion.findAll();
        return res.json(publicaciones)
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            msg: "Error al obtener publicaciones :c"
        })
    }
};

// Controlador para obtener una publicación (R read)
ctrl.obtenerPublicacion = async (req, res) => {
    try {
        const { id } = req.params;
        const publicacion = await Publicacion.findByPk(id);
        return res.json(publicacion)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            msg: "Error al obtener Publicación :s"
        })
    }

};

// Controlador para actualizar una publicación ( U update ) 
ctrl.actualizarPublicacion = async (req, res) => {
    const { id } = req.params;
    
    try {
        const publicacion = await Publicacion.findByPk(id);
        publicacion.set(req.body)
        await publicacion.save();
        return res.json({
            msg: 'Publicación actualizada con éxito :)'
        })  
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            msg: "Error al actualizar Publicación :s"
        })
    }
};

// Controlador para eliminar una publicación (D delete)
ctrl.eliminarPublicacion = async (req, res) => {

    const { id } = req.params;
    
    try {
        await publicacion.destroy({
            where:{id}
            }
        );
        return res.json({
            msg: 'Publicación eliminada con éxito :)'
        })  
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            msg: "Error al eliminar la Publicación :s"
        })
    }
};

module.exports = ctrl;