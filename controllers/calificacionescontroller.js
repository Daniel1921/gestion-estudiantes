//controlador de calificaciones

var mysql = require('mysql');
module.exports={

// funciones del controlador

getCalificaciones : function(req, res, next){
  var config = require('.././database/config');
  var db= mysql.createConnection(config);
  db.connect();

  var calificaciones=null;

  db.query('select * from calificaciones', function(err, rows, fields){
    if(err) throw err;
    calificaciones = rows;
    db.end();
    res.render('calificacion/calificaciones', {calificaciones : calificaciones});
  });

  
},

getNuevaCalificacion : function (req, res, next){
res.render('calificacion/nuevacalificacion');
},

postNuevaCalificacion: function (req, res, next){
console.log(req.body);
var calificacion = {
  id : req.body.id,
  nocontrol_alumno : req.body.nocontrol_alumno,
  materia : req.body.materia,
  calificacion : req.body.calificacion,
 
}
  var config = require('.././database/config');
  var db= mysql.createConnection(config);
  db.connect();
  db.query('insert into calificaciones set ?', calificacion, function(err,rows,fields){
    if(err) throw err;
    db.end();


  });
  res.render('calificacion/nuevacalificacion', {info : 'calificaciones creado correctamente'})

},
eliminarCalificacion: function (req, res, next){
  var id = req.body.id;
  var config = require('.././database/config');
  var db= mysql.createConnection(config);
  db.connect();
  var respuesta = {res:false};
  db.query('delete from calificaciones where id = ?', id, function(err,rows,fields){
    if(err) throw err;
     
    db.end();
    respuesta.res = true;
    res.json(respuesta);
  });

},
modificarCalificacion: function (req, res, next){
  var id = req.params.id;

  var config = require('.././database/config');
  var db= mysql.createConnection(config);
  db.connect();
  var calificacion = null;
  db.query('SELECT * FROM calificaciones where id = ?', id, function(err,rows,fields){
    if(err) throw err;
    calificacion = rows;
    db.end
    res.render('calificacion/modificar',{calificacion: calificacion});
  });
},

postModificarCalificacion: function (req, res, next){
var calificacion = {
  id : req.body.id,
  nocontrol_alumno : req.body.nocontrol_alumno,
  materia : req.body.materia,
  calificacion : req.body.calificacion,
 
};
  var config = require('.././database/config');
  var db= mysql.createConnection(config);
  db.connect();
  db.query('UPDATE calificaciones set ? where ?',[calificacion,{id:req.body.id}], function(err,rows,fields){

    if(err) throw err;
    db.end();
      });
  res.redirect('/calificacion');


}



}