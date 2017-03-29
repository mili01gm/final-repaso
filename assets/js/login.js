window.addEventListener('load',function(e){
  var correo = document.getElementById('ingreso-email');
  var pass = document.getElementById('ingresopswrd');
  var ingresa = document.getElementById('ingresar');
  var okEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  var coders = [{nombre: "Majo", apellido: "Gutierrez", correo: "majo.gzm@gmail.com", pass: "mamama"},
                {nombre: "Naty", apellido: "Diaz", correo: "natydv@gmail.com", pass: "dina"}];

  var validacion = function(){
    if(this.value.trim().length == 0){
      this.value = "";
      this.nextElementSibling.nextElementSibling.innerHTML = "*Campo obligatorio"
    } else {
      this.nextElementSibling.nextElementSibling = ""
    }
  }

  correo.onblur = validacion;
  pass.onblur = validacion;

  ingresa.addEventListener('click',function(e){
    e.preventDefault();

    function correctUser(param){
      if(!okEmail.test(param)){
        spanError.innerHTML = "*Ingrese un correo válido"
        return false;}
      correctPassword(pass.value);
    }

    function correctPassword(var1,var2){
      if(var1 < 6){
        spanPass.innerHTML = "Contraseña contiene entre 6 y 20 caracteres"
        return false;}
      coders.forEach(function(e){
        if(e.correo != var2){
          correo.setAttribute('disabled','disabled');
          pass.setAttribute('disabled','disabled');
          var regOk = document.createElement('button');
          regOk.innerHTML = "Sí estoy registrada"
          regOk.setAttribute('type',"submit");
          regOk.setAttribute('id',"new-coder");
          var daddy = ingresa.parentNode;
          daddy.appendChild(regOk);
          ingresa.innerHTML = "Registrate"
          ingresa.addEventListener('click',function(e){
            e.preventDefault();
            window.location = "register.html"
          })
          spanError.innerHTML = "La contraseña no coincide"
          return false;}
        else if(e.correo == var2 && e.pass != var1){
          spanError.innerHTML = "La contraseña no es correcta"
          return false;}
        else if(e.correo == var2 && e.pass == var1){
          localStorage.setItem("alumna",JSON.stringify(e));
          window.location = '../htmls/coders.html' }
      });
    }

    correctUser(correo.value);
    correctPassword(pass.value,correo.value);

  });

});
