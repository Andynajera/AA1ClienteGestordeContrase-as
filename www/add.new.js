window.onload = function(){
    console.log("onload")
    document.getElementById("addButton").onclick =function(){
       console.log(`category: ${document.forms.data.name.value}`) 
       fetch("http://localhost:3000/categories",{
        method: 'POST',
        headers:{
            "Content-type":"application/json"
       },
        body: JSON.stringify({
            name:document.forms.data.name.value
       })
       })
       return false
    }
    
}