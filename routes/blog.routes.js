const router = require('express').Router();
const {
    actualizarPublicacion,
    crearPublicacion,
    eliminarPublicacion,
    obtenerPublicacion,
    obtenerPublicaciones,
} = require('../controllers/blog.controllers');

// ====================================================
//          Rutas para manejar Vistas (views)
// ====================================================
router.get('/', (req, res) => {
    res.render('index')
})

router.get('/admin', (req, res) => {
    res.render('admin')
})

router.get('/publicacion', (req, res) => {
    res.render('/publicacion/:id')
})


//Rutas para el manejo de los datos:

// Obtiene todas las publicaciones
router.get('/publicaciones/', obtenerPublicaciones);

// Obtiene 1 publicación
router.get('/publicacion/:id', obtenerPublicacion);

// Crea 1 nueva publicación
router.post('/publicacion/', crearPublicacion);

// Actualiza 1 publicación
router.put('/publicacion/:id', actualizarPublicacion);

// Elimina 1 publicación
router.delete('/publicacion/:id', eliminarPublicacion);


module.exports = router;