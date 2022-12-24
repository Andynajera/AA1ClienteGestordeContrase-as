
//nos traemos para eliminar

import { getCategories,removoveCategory, getSites, removeSite } from "./api.js"

/*
//Pintar categorias
  const drawCategories = (data) => {
    data.forEach(category => {
      const parent = document.getElementsByTagName('divList')[0]
      const child = document.createElement('div')
      

     
      // child.innerText = JSON.stringify(category)
      child.innerText = category.name
      parent.appendChild(child)
    })  
  }

  getCategories().then(categories => drawCategories(categories))  
*/
/*
const drawCategories= (category) => {
  
    category.forEach(category => {
      const parent = document.getElementsByTagName('divList')[0]
      const ul  = document.createElement('ul')
      const nameTd = document.createElement('ul')
      const actionsTd = document.createElement('td')

      nameTd.textContent = category.name
      actionsTd.textContent = "actions"

      const abrirBtn = document.createElement('button')
      const eliminarBtn = document.createElement ('button')

      abrirBtn.textContent = "abrir"
      eliminarBtn.textContent = "eliminar"

      //Estilos
      var button = document.getElementById('eliminarBtn');
      eliminarBtn.style.backgroundColor = 'red';
      
      


      eliminarBtn.style.height = '20px';
      eliminarBtn.style.width = '20px';
      var button = document.getElementById('abrirBtn');
      abrirBtn.style.backgroundColor = 'green';
      abrirBtn.style.height = '20px';
      abrirBtn.style.width = '20px';

    
      abrirBtn.addEventListener("click" ,() => window.open(category.name))
      eliminarBtn.addEventListener("click" ,async()=>{
         await removoveCategory(category.id)
        location.reload()
      })



      actionsTd.appendChild(abrirBtn)
      actionsTd.appendChild(eliminarBtn)
      

      ul.appendChild(nameTd)
      ul.appendChild(actionsTd)

      parent.appendChild(ul)

    
    })  
  }

  getCategories().then(categories => drawCategories(categories))  
*/


//Categorias
const drawCategories= (category) => {
  
  category.forEach(category => {
    const parent = document.getElementsByTagName('divList')[0]
    const ul  = document.createElement('ul')
    const nameTd = document.createElement('ul')
    const actionsTd = document.createElement('td')

    nameTd.textContent = category.name

    const abrirBtn = document.createElement('img')
    const eliminarBtn = document.createElement ('img')

    abrirBtn.textContent = "abrir"
    eliminarBtn.textContent = "eliminar"

    //Estilos
    var img  = document.getElementById('eliminarBtn');
    //eliminarBtn.style.backgroundColor = 'red';
    //boton imagen
    eliminarBtn.src  = '../img/delete.png'
    eliminarBtn.style.height = '20px';
    eliminarBtn.style.width = '20px';

    var img = document.getElementById('abrirBtn');
    abrirBtn.src  = '../img/enlace.png'
    abrirBtn.style.backgroundColor = 'green';
    abrirBtn.style.height = '20px';
    abrirBtn.style.width = '20px';

  
    abrirBtn.addEventListener("click" ,() => window.open(category.name))
    eliminarBtn.addEventListener("click" ,async()=>{
       await removoveCategory(category.id)
      location.reload()
    })



    actionsTd.appendChild(abrirBtn)
    actionsTd.appendChild(eliminarBtn)
    

    ul.appendChild(nameTd)
    ul.appendChild(actionsTd)

    parent.appendChild(ul)

  
  })  
}

getCategories().then(categories => drawCategories(categories)) 

    //Pintar Sites y eliminar Sites
  const drawSites = (sites) => {
    const parent = document.getElementById('sitesList')
    sites.forEach(site => {
        const tr  = document.createElement('tr')
        const siteTd = document.createElement('td')
        const userTd = document.createElement('td')
        const descriptionTd = document.createElement('td')
        const actionsTd = document.createElement('td')

        siteTd.textContent = site.url
        userTd.textContent = site.user
        descriptionTd.textContent = site.description
        actionsTd.textContent = ""

        const abrirBtn = document.createElement('button')
        const eliminarBtn = document.createElement('button')
        const editarBtn = document.createElement('button')

        abrirBtn.textContent = "abrir"
        eliminarBtn.textContent = "eliminar"
        editarBtn.textContent = "editar"

        //estilos
        var button = document.getElementById('eliminarBtn');
        eliminarBtn.style.backgroundColor = 'red';
        var button = document.getElementById('abrirBtn');
        abrirBtn.style.backgroundColor = 'green';
        var button = document.getElementById('editarBtn');
        editarBtn.style.backgroundColor = '#E0FFFF';




        abrirBtn.addEventListener("click" ,() => window.open(site.url))
        eliminarBtn.addEventListener("click" ,async()=>{
           await removeSite(site.id)
          location.reload()
        })
        editarBtn.addEventListener("click" ,()=>{console.log(site.user,"editar")})



        actionsTd.appendChild(abrirBtn)
        actionsTd.appendChild(eliminarBtn)
        actionsTd.appendChild(editarBtn)


        tr.appendChild(siteTd)
        tr.appendChild(userTd)
        tr.appendChild(descriptionTd)
        tr.appendChild(actionsTd)

        parent.appendChild(tr)

      
      })  
    }
  
    getSites().then(sites => drawSites(sites))  



      



