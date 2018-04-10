$(function(){

//función ajax eliminar producto

$('#tbl-estudiantes #btn-eliminar').click(function(e){
 	e.preventDefault();
 	var elemento= $(this);
 	var id = elemento.parent().parent().find('#id').text();
 	var confirmar= confirm('desea eliminar el estudiante');
 	if(confirmar){
 		
 	
 	$.ajax({
 		url : 'http://localhost:3000/eliminarestudiante',
 		method : 'post',
 		data : {id : id},
 		success :  function(res){
 			if(res.res){
 				elemento.parent().parent().remove();
 			}
 		}
 		
 	});
}

});

});