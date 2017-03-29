window.addEventListener('load',function(){
  var name = document.getElementById('reg-name').value;
  var lastname = document.getElementById('reg-lastame').value;
  var email = document.getElementById('reg-email').value;
  var pswrd = document.getElementById('reg-pswrd').value;
  var boton = document.getElementById('btn-reg-coder');

  var onlyLetters = function(e){
    var codeLetter = e.keyCode;
    if((codeLetter>96&&codeLetter<=122)||(codeLetter>159&&codeLetter<164)||codeLetter==130||(codeLetter>=65&&codeLetter<=90)||codeLetter==32||codeLetter==164||codeLetter==165){
          return true;
    } else {
      this.nextElementSibling.nextElementSibling.innerHTML = "*Solo letras"
      return false;
    }
  }

  var passCode = function(e){
    var codePass = e.keyCode;
    if((presKey>=97 && presKey<=122)||(presKey>=65 && presKey<=90)||
       (presKey>=48 && presKey<=57)){
         return true;
    } else {
      this.nextElementSibling.nextElementSibling.innerHTML = "*Solo letras y números"
      return false;
    }
  }

  name.addEventListener('keypress',onlyLetters);
  lastname.onkeypress = onlyLetters;
  pswrd.onkeypress = passCode;



});
