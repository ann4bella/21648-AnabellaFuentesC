const mostrarPublicaciones = (publicaciones, elementoHtml) => {

    let secciones = "";
    publicaciones.forEach( (pub) => {
        secciones += 
        `<div class="col">
        <div class="card">
            <img src="${pub.url_imagen}" class="card-img-top" alt="${pub.titulo}">
            <div class="card-body">
            <h4>${pub.titulo}</h4>
            <p class="card-text"><p>${pub.detalle}</p>
            <p>${pub.fecha}</p>
            </div>
        </div>
    </div>`
    })



    elementoHtml.innerHTML = secciones;
    
}

const obtenerPublicaciones = async () => {
    const response = await fetch('/publicaciones')
    const data = await response.json()
    return data;
}





document.addEventListener('DOMContentLoaded', async () => {
    
    const publicaciones = await obtenerPublicaciones()
    const main = document.querySelector('#lista-publicaciones')
    mostrarPublicaciones(publicaciones, main)
})

