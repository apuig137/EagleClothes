let joggins = [
    {id:28, prenda: "Joggin full black", precio: 14500, img: "../img/joggins/1.jpg", tarjeta: "tarjeta1", cantidad: 1},
    {id:29, prenda: "Joggin cuadrille claro", precio: 14500, img: "../img/joggins/2.jpg", tarjeta: "tarjeta2", cantidad: 1},
    {id:30, prenda: "Joggin negro c/ amarillo", precio: 14000, img: "../img/joggins/3.jpg", tarjeta: "tarjeta3", cantidad: 1},
    {id:31, prenda: "Joggin negro", precio: 14000, img: "../img/joggins/4.jpg", tarjeta: "tarjeta4", cantidad: 1},
    {id:32, prenda: "Joggin gris", precio: 13500, img: "../img/joggins/5.jpg", tarjeta: "tarjeta5", cantidad: 1},
    {id:33, prenda: "Joggin negro c/ tira clara", precio: 13500, img: "../img/joggins/6.jpg", tarjeta: "tarjeta6", cantidad: 1},
    {id:34, prenda: "Joggin negro c/ tira oscura", precio: 13000, img: "../img/joggins/7.jpg", tarjeta: "tarjeta7", cantidad: 1},
    {id:35, prenda: "Joggin azul marino", precio: 13000, img: "../img/joggins/8.jpg", tarjeta: "tarjeta8", cantidad: 1},
    {id:36, prenda: "Joggin gris oscuro", precio: 12500, img: "../img/joggins/9.jpg", tarjeta: "tarjeta9", cantidad: 1},
]

let layoutJoggins = document.getElementById("layout-joggins")
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

function verJoggins(){
joggins.forEach((joggin) => {
        let acc=1
        let contenido = document.createElement("div")
        contenido.innerHTML = `
        <div class="tarjeta ${joggin.tarjeta}" style="--i:url(${joggin.img})">
            <div class="contenido">
                <a>$${joggin.precio}</a>
                <a onclick="carritoOn(), agregarAlCarrito(${joggin.id})" href="#">AGREGAR AL CARRITO</a>
            </div>
        </div>
        `
        layoutJoggins.appendChild(contenido)
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
        const item = joggins.find((producto) => producto.id === idProducto)
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
    joggins.forEach((joggin) => {
        joggin.cantidad = 1
    })
    total.innerText = "0"
    actualizarCarrito();
}
botonVaciar.addEventListener('click', vaciarCarrito)

verJoggins()
actualizarCarrito()

