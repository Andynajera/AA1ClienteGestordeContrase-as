const baseUrl ="http://localhost:3000"
const sitesCollection="/sites" 
const categoriesCollection="/categories" 




//Sites
export function removeSite(id){
    const url = `${baseUrl}${sitesCollection}/${id}`
            return fetch(url ,{method:"DELETE"})
  }

export function getSites(){
return fetch(`${baseUrl}${sitesCollection}`)
.then(res => res.json())
}
/*export function createSites(){
  return fetch(`${baseUrl}${sitesCollection}`)
  .then(res => res.json())
  }*/
//Categorias
export function getCategories(){
    return fetch(`${baseUrl}${categoriesCollection}`)
    .then(res => res.json())
    }

    export function removoveCategory(id){
      const url = `${baseUrl}${categoriesCollection}/${id}`
              return fetch(url ,{method:"DELETE"})
    }