let informacion = document.querySelector('#informacion')

function obtener() {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            console.log(data.results['0'])
            informacion.innerHTML = `
            <div class="row" >
                <ul class="collection with-header">
                    <li class="collection-header yellow darken-"><h4 class="center">Actores</h4></li>
                </ul>
            <div class="col s10 m4">
                <div class="card">
                    <div class="card-image">
                        <img src="${data.results['0'].picture.large}">
                    </div>
                    <a class="btn-floating halfway-fab waves-effect waves-light red" onclick="obtener()"><i class="material-icons">add</i></a>
                    <div class="card-content">
                        <p>Nombre: ${data.results['0'].name.first} ${data.results['0'].name.last} </p>
                        <p>Correo: ${data.results['0'].email}  </p>
                        <p>Ciudad: ${data.results['0'].location.city}  </p>
                    </div>
                </div>
            </div>
        </div>
            `
        })
}
async function obtenerSpecie(id) {
    let response = await fetch(`https://swapi.co/api/species/${id}/`)
    let data = await response.json()
    return data
}
async function obtenerDatos(url) {
    let response = await fetch(url)
    let data = await response.json()
    return data
}
async function listarSpecie(url) {
    let lista = `<ul class="collection with-header">
              <li class="collection-header yellow darken-"><h4 class="center">Especies </h4></li>`
    let Species = await obtenerDatos(url)
    let arregloSpecies = Species.results
    for (let i = 0; i < arregloSpecies.length; i++) {
        lista += `<li class="collection-item">
             <div><strong>Nombre: </strong>${arregloSpecies[i].name} <strong>clasificación: </strong> ${arregloSpecies[i].classification}</div></li>`
    }
    return lista
}
async function main(url) {
    let lista = await listarSpecie(url)
    document.getElementById("contenido").innerHTML = lista
}

main('https://swapi.co/api/species/')

function Personajes() {
    fetch('https://jsonplaceholder.typicode.com/todos/1/users')
        .then(response => response.json())
        .then(json => console.log(json))
}


async function cambiarPerro() {
    let perrito = await httpCall('https://dog.ceo/api/breeds/image/random')
    document.getElementById("CambioPerro").src = perrito.message
}

async function httpCall(URL) {
    let peticion = await fetch(URL)
    let respuesta = await peticion.json()
    console.log(respuesta)
    return respuesta
}