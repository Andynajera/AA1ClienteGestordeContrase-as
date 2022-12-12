
export default function onRemoveBtnClick() {
    console.log("onRemoveBtnClick")

    const removebuttons = document.querySelectorAll(".remove-btn")
    for (const button of removebuttons) {
        button.addEventListener("click", (event) => { 
            fetch(`http://localhost:3000/sites/${event.target.dataset.siteId}`, {
                method: 'DELETE',

            })
        })
    }




   
    /*.onclick =function(){
    
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
       return false*/
}

//}