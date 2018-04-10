//controlador de estudiantes
var mysql = require('mysql');
module.exports={

// funciones del controlador

getEstudiantes : function(req, res, next){
  var config = require('.././database/config');
  var db= mysql.createConnection(config);
  db.connect();

  var estudiantes=null;

  db.query('select * from alumnos', function(err, rows, fields){
    if(err) throw err;
    estudiantes = rows;
    db.end();
    res.render('estudiante/estudiantes', {estudiantes : estudiantes});
  });

  
},

getNuevoEstudiante : function (req, res, next){
res.render('estudiante/nuevoestudiante');
},

postNuevoEstudiante: function (req, res, next){
console.log(req.body);
var estudiante = {
  id : req.body.id,
  nocontrol : req.body.nocontrol,
  nombre : req.body.nombre,
  grado : req.body.grado,
  grupo : req.body.grupo 
}
  var config = require('.././database/config');
  var db= mysql.createConnection(config);
  db.connect();
  db.query('insert into alumnos set ?', estudiante, function(err,rows,fields){
    if(err) throw err;
    db.end();


  });
  res.render('estudiante/nuevoestudiante', {info : 'estudiante creado correctamente'})

},
eliminarEstudiante: function (req, res, next){
  var id = req.body.id;
  var config = require('.././database/config');
  var db= mysql.createConnection(config);
  db.connect();
  var respuesta = {res:false};
  db.query('delete from alumnos where id = ?', id, function(err,rows,fields){
    if(err) throw err;
     
    db.end();
    respuesta.res = true;
    res.json(respuesta);
  });

},
modificarEstudiante: function (req, res, next){
  var id = req.params.id;

  var config = require('.././database/config');
  var db= mysql.createConnection(config);
  db.connect();
  var estudiante = null;
  db.query('SELECT * FROM alumnos where id = ?', id, function(err,rows,fields){
    if(err) throw err;
    estudiante = rows;
    db.end
    res.render('estudiante/modificar',{estudiante: estudiante});
  });
},

postModificarEstudiante: function (req, res, next){
var estudiante = {
  id : req.body.id,
  nocontrol : req.body.nocontrol,
  nombre : req.body.nombre,
  grado : req.body.grado,
  grupo : req.body.grupo 
};
  var config = require('.././database/config');
  var db= mysql.createConnection(config);
  db.connect();
  db.query('UPDATE alumnos set ? where ?',[estudiante,{id:req.body.id}], function(err,rows,fields){

    if(err) throw err;
    db.end();
      });
  res.redirect('/estudiante');


}




}