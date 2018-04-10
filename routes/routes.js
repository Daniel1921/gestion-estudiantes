var express = require('express');
var router = express.Router();

var controllers= require('.././controllers');

/* GET home page. */
router.get('/', controllers.homecontroller.index);

//rutas para estudiante

router.get('/estudiante', controllers.estudiantescontroller.getEstudiantes);
router.get('/nuevoestudiante', controllers.estudiantescontroller.getNuevoEstudiante);
router.post('/crearestudiante', controllers.estudiantescontroller.postNuevoEstudiante);
router.post('/eliminarestudiante', controllers.estudiantescontroller.eliminarEstudiante);
router.get('/modificarestudiante/:id', controllers.estudiantescontroller.modificarEstudiante);
router.post('/actualizar', controllers.estudiantescontroller.postModificarEstudiante);

//rutas para calificaciones

router.get('/calificacion', controllers.calificacionescontroller.getCalificaciones);
router.get('/nuevacalificacion', controllers.calificacionescontroller.getNuevaCalificacion);
router.post('/crearcalificacion', controllers.calificacionescontroller.postNuevaCalificacion);
router.post('/eliminarcalificacion', controllers.calificacionescontroller.eliminarCalificacion);
router.get('/modificarcalificacion/:id', controllers.calificacionescontroller.modificarCalificacion);
router.post('/actualizarcal', controllers.calificacionescontroller.postModificarCalificacion);
module.exports = router;
