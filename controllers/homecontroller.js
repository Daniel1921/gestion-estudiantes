//controlador de inicio

module.exports={

// funciones del controlador

index : function(req, res, next){

	res.render('index',{title: 'CRUD de estudiantes de UNIAJC con nodeJS'});
	
}

}