$(function() {

    //función ajax eliminar producto

    $('#tbl-calificaciones #btn-eliminar').click(function(e) {
        e.preventDefault();
        var elemento = $(this);
        var id = elemento.parent().parent().find('#id').text();
        var confirmar = confirm('desea eliminar la calificacion');
        if (confirmar) {


            $.ajax({
                url: 'http://colegio-teamcrudgoogle.7e14.starter-us-west-2.openshiftapps.com/eliminarcalificacion',
                method: 'post',
                data: { id: id },
                success: function(res) {
                    if (res.res) {
                        elemento.parent().parent().remove();
                    }
                }

            });
        }

    });

});