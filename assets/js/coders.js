window.addEventListener('load', function(){
  var nombre = document.getElementById('sign-name');
  var apellido = document.getElementById('sign-lastname');
  var email = document.getElementById('sign-email');
  var pass = document.getElementById('sign-pswrd');

  var nuevaCoder = JSON.parse(localStorage.getItem("alumna"))

  nombre.innerHTML = nuevaCoder.nombre;
  apellido.innerHTML = nuevaCoder.apellido;
  email.innerHTML = nuevaCoder.correo;
  pass.innerHTML = nuevaCoder.pass;

  var editar = document.getElementById('editar');
  editar.addEventListener('click',function(e){
    e.preventDefault();
    window.location = "../htmls/edit.html"
  })

});
