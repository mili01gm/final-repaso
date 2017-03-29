window.addEventListener('load',function(){
  document.getElementById('registro').addEventListener('click',function(e){
    e.preventDefault();
    window.location = "assets/htmls/register.html"
  });

  document.getElementById('login').addEventListener('click',function(e){
    e.preventDefault();
    window.location = "assets/htmls/login.html"
  })




});
