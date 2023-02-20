let remeras = [
    {id:54, prenda: "Chomba blanco c/ azul", precio: 14500, img: "../img/remeras/remera1.webp", tarjeta: "tarjeta1", cantidad:1},
    {id:55, prenda: "Chomba blanco c/ negro", precio: 14500, img: "../img/remeras/remera2.webp", tarjeta: "tarjeta2", cantidad:1},
    {id:56, prenda: "Chomba blanco c/ rojo", precio: 14500, img: "../img/remeras/remera3.webp", tarjeta: "tarjeta3", cantidad:1},
    {id:57, prenda: "Remera California rosa", precio: 14000, img: "../img/remeras/remera4.jpg", tarjeta: "tarjeta4", cantidad:1},
    {id:58, prenda: "Remera California celeste", precio: 14000, img: "../img/remeras/remera5.jpg", tarjeta: "tarjeta5", cantidad:1},
    {id:59, prenda: "Remera California blanco", precio: 13500, img: "../img/remeras/remera6.jpg", tarjeta: "tarjeta6", cantidad:1},
    {id:60, prenda: "Remera rayada blanck & white", precio: 13500, img: "../img/remeras/remera7.jpg", tarjeta: "tarjeta7", cantidad:1},
    {id:61, prenda: "Remera Los Angeles negro", precio: 13000, img: "../img/remeras/remera8.jpg", tarjeta: "tarjeta8", cantidad:1},
    {id:62, prenda: "Remera rayada beige & white", precio: 13000, img: "../img/remeras/remera9.jpg", tarjeta: "tarjeta9", cantidad:1},
]

let layoutRemeras = document.getElementById("layout-remeras")
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

function verRemeras(){
remeras.forEach((remera) => {
        let acc=1
        let contenido = document.createElement("div")
        contenido.innerHTML = `
        <div class="tarjeta ${remera.tarjeta}" style="--i:url(${remera.img})">
            <div class="contenido">
                <a>$${remera.precio}</a>
                <a onclick="carritoOn(), agregarAlCarrito(${remera.id})" href="#">AGREGAR AL CARRITO</a>
            </div>
        </div>
        `
        layoutRemeras.appendChild(contenido)
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
        const item = remeras.find((producto) => producto.id === idProducto)
        carrito.push(item)
    }
    actualizarCarrito()
}

let actualizarCarrito = () => {
    carritoUl.innerHTML = ""
    let acc = 0
    carrito.forEach((producto) => {
        let div = document.createElement("div")
        div.classList.add("width")
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
    remeras.forEach((remera) => {
        remera.cantidad = 1
    })
    total.innerText = "0"
    actualizarCarrito();
}
botonVaciar.addEventListener('click', vaciarCarrito)

verRemeras()
actualizarCarrito()