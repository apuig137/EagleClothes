let perfumes = [
    {id:37, prenda: "Perfume fragancia oceanica", precio: 11000, img: "../img/perfumes/1.jpg", tarjeta: "tarjeta1", cantidad:1},
    {id:38, prenda: "Perfume fragancia polinesica", precio: 11000, img: "../img/perfumes/2.avif", tarjeta: "tarjeta2", cantidad:1},
    {id:39, prenda: "Perfume fragancia marina", precio: 11000, img: "../img/perfumes/3.avif", tarjeta: "tarjeta3", cantidad:1},
    {id:40, prenda: "Perfume fragancia vainilla", precio: 10500, img: "../img/perfumes/4.avif", tarjeta: "tarjeta4", cantidad:1},
    {id:41, prenda: "Perfume fragancia mediterranea", precio: 10500, img: "../img/perfumes/5.avif", tarjeta: "tarjeta5", cantidad:1},
    {id:42, prenda: "Perfume fragancia orietal", precio: 10500, img: "../img/perfumes/6.avif", tarjeta: "tarjeta6", cantidad:1},
    {id:43, prenda: "Perfume fragancia tulipan", precio: 10000, img: "../img/perfumes/7.avif", tarjeta: "tarjeta7", cantidad:1},
    {id:44, prenda: "Perfume fragancia lavanda", precio: 10000, img: "../img/perfumes/8.avif", tarjeta: "tarjeta8", cantidad:1},
    {id:45, prenda: "Perfume fragancia orquideas", precio: 10000, img: "../img/perfumes/9.avif", tarjeta: "tarjeta9", cantidad:1},
]

let layoutPerfumes = document.getElementById("layout-perfumes")
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

function verPerfumes(){
perfumes.forEach((perfume) => {
        let acc=1
        let contenido = document.createElement("div")
        contenido.innerHTML = `
        <div class="tarjeta ${perfume.tarjeta}" style="--i:url(${perfume.img})">
            <div class="contenido">
                <a>$${perfume.precio}</a>
                <a onclick="carritoOn(), agregarAlCarrito(${perfume.id})" href="#">AGREGAR AL CARRITO</a>
            </div>
        </div>
        `
        layoutPerfumes.appendChild(contenido)
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
        const item = perfumes.find((producto) => producto.id === idProducto)
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
    perfumes.forEach((perfume) => {
        perfume.cantidad = 1
    })
    total.innerText = "0"
    actualizarCarrito();
}
botonVaciar.addEventListener('click', vaciarCarrito)

verPerfumes()
actualizarCarrito()
