let camperas = [
    {id:10, prenda: "Campera rojo y negro", precio: 20000, img: "https://http2.mlstatic.com/D_NQ_NP_821790-MLA45212422597_032021-O.webp", tarjeta: "tarjeta1", cantidad: 1},
    {id:11, prenda: "Campera mostaza", precio: 18000, img: "https://http2.mlstatic.com/D_NQ_NP_785179-MLA49741175272_042022-W.webp", tarjeta: "tarjeta2", cantidad: 1},
    {id:12, prenda: "Campera azul", precio: 16500, img: "https://http2.mlstatic.com/D_NQ_NP_771779-MLA49044633353_022022-W.webp", tarjeta: "tarjeta3", cantidad: 1},
    {id:13, prenda: "Campera azul marino", precio: 20000, img: "https://http2.mlstatic.com/D_NQ_NP_982977-MLA49946607917_052022-W.webp", tarjeta: "tarjeta4", cantidad: 1},
    {id:14, prenda: "Campera all black", precio: 16000, img: "https://http2.mlstatic.com/D_NQ_NP_613565-MLA50158884131_062022-W.webp", tarjeta: "tarjeta5", cantidad: 1},
    {id:15, prenda: "Campera azul y negro", precio: 16500, img: "https://http2.mlstatic.com/D_NQ_NP_720103-MLA49946621775_052022-W.webp", tarjeta: "tarjeta6", cantidad: 1},
    {id:16, prenda: "Campera militar", precio: 21000, img: "https://http2.mlstatic.com/D_NQ_NP_874095-MLA52348786698_112022-W.webp", tarjeta: "tarjeta7", cantidad: 1},
    {id:17, prenda: "Campera blanca", precio: 21000, img: "https://http2.mlstatic.com/D_NQ_NP_969258-MLA51916812730_102022-W.webp", tarjeta: "tarjeta8", cantidad: 1},
    {id:18, prenda: "Campera mostaza y negro", precio: 20000, img: "https://http2.mlstatic.com/D_NQ_NP_699562-MLA49828935010_052022-W.webp", tarjeta: "tarjeta9", cantidad: 1},
]

let layoutCamperas = document.getElementById("layout-camperas")
let carritoIcon1 = document.getElementById("carrito1")
let carritoIcon2 = document.getElementById("carrito2")
let carritoDiv = document.querySelector(".carrito-div")
let carritoUl = document.getElementById("carrito-ul")
let botonVaciar = document.getElementById('boton-vaciar')
let total = document.getElementById('total')

let carrito = JSON.parse(localStorage.getItem("carrito")) || []
let guardarLocal = () => {
    localStorage.setItem("carrito",JSON.stringify(carrito))
}
let carritoOn = () => { carritoDiv.classList.add("carrito-div-active") }

function verCamperas(){
    camperas.forEach((campera) => {
        let acc=1
        let contenido = document.createElement("div")
        contenido.innerHTML = `
        <div class="tarjeta ${campera.tarjeta}" style="--i:url(${campera.img})">
            <div class="contenido">
                <a>$${campera.precio}</a>
                <a onclick="carritoOn(), agregarAlCarrito(${campera.id})" href="#">AGREGAR AL CARRITO</a>
            </div>
        </div>
        `
        layoutCamperas.appendChild(contenido)
        acc++
    });
}

carritoIcon1.addEventListener("click",() => {
    carritoDiv.classList.toggle("carrito-div-active")
})

carritoIcon2.addEventListener("click", () => {
    carritoDiv.classList.toggle("carrito-div-active")
})

// Carrito

let agregarAlCarrito = (idProducto) => {
    let existe = carrito.some(producto => producto.id === idProducto)
    if (existe) {
        carrito.map(producto => {
            if (producto.id === idProducto) {
                producto.cantidad++
            }
        })
    } else {
        const item = camperas.find((producto) => producto.id === idProducto)
        carrito.push(item)
    }
    actualizarCarrito()
}

let actualizarCarrito = () => {
    carritoUl.innerHTML = ""
    let acc = 0
    carrito.forEach((producto) => {
        let div = document.createElement("div")
        let precioAcumulado = producto.precio*producto.cantidad
        div.innerHTML = `
        <p>x${producto.cantidad} ${producto.prenda} $${precioAcumulado}</p>
        <button onclick = "borrarDelCarrito(${producto.id})" class="btn btn-danger mx-5">X</button>
        `
        carritoUl.appendChild(div)
        acc += producto.precio*producto.cantidad
    })
    total.innerText = ""
    total.innerText += acc
    guardarLocal()
}

let borrarDelCarrito = (idProducto) => {
    let item = carrito.find((producto) => producto.id === idProducto)
    let indice = carrito.indexOf(item)
    if (item.cantidad > 1) {
        item.cantidad -= 1
    } else {
        carrito.splice(indice,1)
    }
    actualizarCarrito()
}

function vaciarCarrito() {
    carrito = [];
    camperas.forEach((campera) => {
        campera.cantidad = 1
    })
    total.innerText = "0"
    actualizarCarrito();
}
botonVaciar.addEventListener('click', vaciarCarrito)

verCamperas()
actualizarCarrito()