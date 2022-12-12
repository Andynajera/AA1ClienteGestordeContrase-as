
function getPassword(){
    document.getElementById('password').value = autoCreate(12);
  }
  
  function autoCreate(plength){
    var chars = "abcdefghijklmnopqrstubwsyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var password = '';	
      for(i=0; i<plength; i++){
        password+=chars.charAt(Math.floor(Math.random()*chars.length));
      }
    
    return password;
  }




function enviar() {
    let url = document.getElementById('URL').value;
    let user = document.getElementById('User').value;
    let passw = document.getElementById('Password').value;
    let name = document.getElementById('Name').value;
    sessionStorage.setItem("url", url);
    sessionStorage.setItem("user", user);
    sessionStorage.setItem("passw", passw);
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("valor", true);
}