$(function(){
	$('.form-nuevacalificacion form').form({
		
		nocontrol_alumno: {
			identifier : 'nocontrol_alumno',
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
		materia: {
			identifier : 'materia',
			rules : [
			{
				type : 'empty',
				prompt : 'Por favor ingrese un nombre para la materia a la cual se la va ingresar una calificación'
			}
			] 
		},
		calificacion: {
			identifier : 'calificacion',
			rules : [
			{
				type : 'empty',
				prompt : 'Por favor ingrese un grado para el estudiante'
			},{
				type : 'number',
				prompt : 'Por favor ingrese valor de tipo número'
			}
			] 
		}

		});
	});