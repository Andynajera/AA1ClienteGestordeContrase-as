
//nos traemos para eliminar

import onRemoveBtnClick from "./removeSites.js"
window.addEventListener("load",onRemoveBtnClick)
 


//Pintar categorias
  let drawData = (data) => {
    data.forEach(category => {
      let parent = document.getElementsByTagName('divList')[0]
      let child = document.createElement('div')

     
      // child.innerText = JSON.stringify(category)
      child.innerText = category.name
      parent.appendChild(child)
    })  
  }

  fetch("http://localhost:3000/categories")
    .then(res => res.json())
    .then(data => drawData(data))




    //Pintar Sites
  let drawSites = (getSite) => {
    getSite.forEach(sites => {
        let parent = document.getElementsByTagName('thead')[0]
        let child = document.createElement('thead')
       
        // child.innerText = JSON.stringify(category)
        child.innerText = sites.name
        parent.appendChild(child)
      })  
    }
  
    fetch("http://localhost:3000/sites")
      .then(res => res.json())
      .then(getSite => drawSites(getSite))
 /*     --
const para = document.createElement("tr");
para.innerText = "This is a paragraph";
document.body.appendChild(para);*/
