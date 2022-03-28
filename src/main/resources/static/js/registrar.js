$(document).ready(function() {

});


async function registrarUsuario(){
  let datos={};
  datos.nombre=document.getElementById('nombreRegistrar').value;
  datos.apellido=document.getElementById('apellidoRegistrar').value;
  datos.email=document.getElementById('correoRegistrar').value;
  datos.telefono=document.getElementById('telefonoRegistrar').value;
  datos.password=document.getElementById('passwordRegistrar').value;


  let confirmPassword = document.getElementById('confirmPasswordRegistrar').value;

  if(confirmPassword != datos.password){
        document.querySelector('.passwordStatus').innerHTML='<div class="form-group text-danger">Contraseña no coincide</div>'
        return;

  }else{
        if(datos.password.length <8){
                document.querySelector('.passwordStatus').innerHTML='<div class="form-group text-warning">La contraseña debe tener mas de 8 caracteres</div>'
                return;
        }

        else if(datos.password.length >30){
               document.querySelector('.passwordStatus').innerHTML='<div class="form-group text-warning">La contraseña no puede exceder los 30 caracteres</div>'
               return;
        }
        else{
            alert('Usuario creado');
            const request = await fetch('api/usuarios', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
              });
              window.location.href='login.html';

        }

  }


}

