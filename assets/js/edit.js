window.addEventListener('load',function(){
  var nombre = document.getElementById('edit-name');
  var apellido = document.getElementById('edit-lastname');
  var correo = document.getElementById('edit-email');
  var pass = document.getElementById('edit-pswrd');
  var okEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  var editCoder = JSON.parse(localStorage.getItem("alumna"));

  nombre.value = editCoder.nombre;
  apellido.value = editCoder.apellido;
  correo.value = editCoder.correo;
  pass.value = editCoder.pass;

  var onlyLetters = function(e){
    var codeLetter = e.keyCode;
    if((codeLetter>96&&codeLetter<=122)||(codeLetter>159&&codeLetter<164)||codeLetter==130||(codeLetter>=65&&codeLetter<=90)||codeLetter==32||codeLetter==164||codeLetter==165){
        return true;
    } else {
      this.nextElementSibling.nextElementSibling.innerHTML = "*Solo letras"
      return false;}
  };

  var onlyMail = function(){
    if(!okEmail.test(this.value)){
      this.nextElementSibling.nextElementSibling.innerHTML = "*Solo correos en formato válido"
      return false;
    } else if (this.value.length!=0){
      this.nextElementSibling.nextElementSibling.innerHTML = ""
      return true;}
  }

  nombre.addEventListener('keypress',onlyLetters);
  apellido.addEventListener('keypress',onlyLetters);
  correo.addEventListener('focus',onlyMail);
  var validacionLetras = function(){
    if(this.value.trim().length == 0){
      this.value = "";
      this.nextElementSibling.nextElementSibling.innerHTML = "*Campo obligatorio"
    } else {
      this.nextElementSibling.nextElementSibling = ""
    }

    var dato = this.value.split(" ");
    var modifica = "";
    dato.forEach(function(e){
      modifica += e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()+" ";
    });
    this.value = modifica;
  }
  var validacionOtros = function(){
    if(this.value.trim().length == 0){
      this.value = "";
      this.nextElementSibling.nextElementSibling.innerHTML = "*Campo obligatorio"
    } else {
      this.nextElementSibling.nextElementSibling = ""
    }
  }

  nombre.onblur = validacionLetras;
  apellido.onblur = validacionLetras;
  correo.onblur = validacionOtros;
  pass.onblur = validacionOtros;

  var guardar = document.getElementById('guardar');
  guardar.addEventListener('click',function(e){
    e.preventDefault();
    if(nombre.value.length!=0 && apellido.value.length!=0 && correo.value.length!=0 && pass.value.length!=0){
      editCoder.nombre = nombre.value;
      editCoder.apellido = apellido.value;
      editCoder.correo = correo.value;
      editCoder.pass = pass.value;
      localStorage.setItem('alumna',JSON.stringify(editCoder));
      window.location = "../htmls/coders.html"
    }



  });

});
