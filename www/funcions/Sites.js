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


 //funciona uno de los dos porque lo de onload solo lo permite en uno 
   //añadir un site
   window.onload = function(){
    console.log("onloading")
    document.getElementById("addButtonS").onclick =function(){
       console.log(`site: ${document.forms.dataS.name.value}`) 
       fetch("http://localhost:3000/sites",{
        method: 'POST',
        headers:{
            "Content-type":"application/json"
       },
        body: JSON.stringify({
            name:document.forms.dataS.name.value,
            user:document.forms.dataS.user.value,
            description:document.forms.dataS.description.value,
            url:document.forms.dataS.url.value,
            password:document.forms.dataS.password.value,
            id:document.forms.dataS.id.value
       })
       })
       return false
    }
    
  };
















  