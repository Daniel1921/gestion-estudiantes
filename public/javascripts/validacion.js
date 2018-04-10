$(function(){
	$('.form-nuevoestudiante form').form({
		id: {
			identifier : 'id',
			rules : [
			{
				type : 'empty',
				prompt : 'Por favor ingrese un id para el estudiante'
			},{
				type: 'integer',
				prompt: 'el id debe ser numerico'
			  }
			] 
		},
		nocontrol: {
			identifier : 'nocontrol',
			rules : [
			{
				type : 'empty',
				prompt : 'Por favor ingrese un nocontrol para el estudiante'
			},{
				type: 'integer',
				prompt: 'el nocontrol debe ser numerico'
			  }
			] 
		},
		nombre: {
			identifier : 'nombre',
			rules : [
			{
				type : 'empty',
				prompt : 'Por favor ingrese un nombre para el estudiante'
			}
			] 
		},
		grado: {
			identifier : 'grado',
			rules : [
			{
				type : 'empty',
				prompt : 'Por favor ingrese un grado para el estudiante'
			}
			] 
		},
		grupo: {
			identifier : 'grupo',
			rules : [
			{
				type : 'empty',
				prompt : 'Por favor ingrese un grupo para el estudiante'
			}		] 
		}

		});
	});