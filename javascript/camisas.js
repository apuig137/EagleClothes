let camisas = [
    {id:1, prenda: "Camisa gris", precio: 6500, img: "../img/camisas/1.webp", tarjeta: "tarjeta1", cantidad: 1},
    {id:2, prenda: "Camisa bordo", precio: 6500, img: "../img/camisas/2.webp", tarjeta: "tarjeta2", cantidad: 1},
    {id:3, prenda: "Camisa marron", precio: 6000, img: "../img/camisas/3.webp", tarjeta: "tarjeta3", cantidad: 1},
    {id:4, prenda: "Camisa floreada", precio: 6000, img: "../img/camisas/4.webp", tarjeta: "tarjeta4", cantidad: 1},
    {id:5, prenda: "Camisa black & white", precio: 5500, img: "../img/camisas/5.webp", tarjeta: "tarjeta5", cantidad: 1},
    {id:6, prenda: "Camisa floreada", precio: 5500, img: "../img/camisas/6.webp", tarjeta: "tarjeta6", cantidad: 1},
    {id:7, prenda: "Camisa negra c/ detalles blancos", precio: 5000, img: "../img/camisas/7.webp", tarjeta: "tarjeta7", cantidad: 1},
    {id:8, prenda: "Camisa rosa", precio: 5000, img: "../img/camisas/8.webp", tarjeta: "tarjeta8", cantidad: 1},
    {id:9, prenda: "Camisa all black", precio: 4500, img: "../img/camisas/9.webp", tarjeta: "tarjeta9", cantidad: 1},
]

let layoutCamisas = document.getElementById("layout-camisas")
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

function verCamisas(){
    camisas.forEach((camisa) => {
        let contenido = document.createElement("div")
        contenido.innerHTML = `
        <div class="tarjeta ${camisa.tarjeta}" style="--i:url(${camisa.img})">
            <div class="contenido">
                <a>$${camisa.precio}</a>
                <a onclick="carritoOn(), agregarAlCarrito(${camisa.id})" href="#">AGREGAR AL CARRITO</a>
            </div>
        </div>
        `
        layoutCamisas.appendChild(contenido)
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
        const item = camisas.find((producto) => producto.id === idProducto)
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
    camisas.forEach((camisa) => {
        camisa.cantidad = 1
    })
    total.innerText = "0"
    actualizarCarrito();
}
botonVaciar.addEventListener('click', vaciarCarrito)

verCamisas()
actualizarCarrito()