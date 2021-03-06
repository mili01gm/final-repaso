function Coders(nombre,apellido,correo,pswrd){
  this.nombre = nombre;
  this.apellido = apellido;
  this.correo = correo;
  this.pass = pswrd;
}

window.addEventListener('load',function(){
  var nombre = document.getElementById('name');
  var apellido = document.getElementById('lastname');
  var email = document.getElementById('email');
  var pswrd = document.getElementById('pswrd');
  var boton = document.getElementById('btn-reg-coder');
  var okEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var soloLetras = /^([a-zñá-ú+\s])*$/;
  var inputs = document.getElementsByTagName('input');

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
    } else if (okEmail.text(this.value)&&this.value.length!=0){
      this.nextElementSibling.nextElementSibling.innerHTML = ""
      return true;}
  }

  nombre.addEventListener('keypress',onlyLetters);
  apellido.addEventListener('keypress',onlyLetters);
  email.addEventListener('focus',onlyMail);

  var inputs = document.getElementsByTagName('input');
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
  email.onblur = validacionOtros;
  pswrd.onblur = validacionOtros;

  boton.addEventListener('click',function(e){
    e.preventDefault();
    if(nombre.value.length!=0 && apellido.value.length!=0 && email.value.length!=0 && pswrd.value.length!=0){
      var coder = new Coders(nombre.value,apellido.value,email.value,pswrd.value);
      localStorage.setItem("alumna",JSON.stringify(coder));
      boton.nextElementSibling.nextElementSibling.innerHTML = ""
      window.location = "../htmls/coders.html"
    } else {
      boton.nextElementSibling.nextElementSibling.innerHTML = "*Complete todos los campos"
    }
  })

});
