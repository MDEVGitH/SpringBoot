// Call the dataTables jQuery plugin
$(document).ready(function() {
    cargarUsuarios();
    $('#usuarios').DataTable();
    actualizarEmailDelUsuario();

});

function actualizarEmailDelUsuario(){
    document.getElementById('txt-email-usuario').outerHTML = localStorage.email;
}



async function cargarUsuarios(){
  const request = await fetch('api/usuarios', {
    method: 'GET',
    headers: getHeaders()
  });
  const listadoUsuarios = await request.json();
  console.log(listadoUsuarios);

  let listadoHtml = '';
  let botonEliminar= '<a href="#" onclick="eliminarUsuario(213213)" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';


  for(let usuario of listadoUsuarios){
    let botonEliminar= '<a href="#" onclick="eliminarUsuario('+usuario.id+')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';

    let usuarioHtml = '<tr><td>'+usuario.id+
    '</td><td>'+usuario.nombre+
    '</td><td>'+usuario.apellido+
    '</td><td>'+usuario.email+
    '</td><td>'+usuario.telefono+
    '</td><td>'+botonEliminar+'</td></tr>'
    listadoHtml += usuarioHtml
  }

  document.querySelector('#usuarios tbody').outerHTML= listadoHtml

}

function getHeaders(){
    return{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.token
    }

}

async function eliminarUsuario(id){

    if(confirm('¿Desea eliminar este usuario?')){
        const request = await fetch('api/usuarios/'+id, {
            method: 'DELETE',
            headers: getHeaders()
          });
        cargarUsuarios();
    }else{
        return;
    }


}
