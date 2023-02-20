let relojes = [
    {id:46, prenda: "Reloj Benyar acero azul", precio: 25000, img: "../img/relojes/1.jpg", tarjeta: "tarjeta1", cantidad:1},
    {id:47, prenda: "Reloj Benyar acero azul c/ malla de silicona", precio: 20000, img: "../img/relojes/2.jpg", tarjeta: "tarjeta2", cantidad:1},
    {id:48, prenda: "Reloj Benyar acero negro c/ malla de silicona", precio: 25000, img: "../img/relojes/3.jpg", tarjeta: "tarjeta3", cantidad:1},
    {id:49, prenda: "Reloj Benyar acero negro", precio: 20000, img: "../img/relojes/4.jpg", tarjeta: "tarjeta4", cantidad:1},
    {id:50, prenda: "Reloj Modiya negro de acero y cuarzo", precio: 70000, img: "../img/relojes/5.jfif", tarjeta: "tarjeta5", cantidad:1},
    {id:51, prenda: "Reloj Modiya blanco de acero y cuarzo", precio: 70000, img: "../img/relojes/6.jfif", tarjeta: "tarjeta6", cantidad:1},
    {id:52, prenda: "Reloj Modiya blanco c/ malla de cuero", precio: 65000, img: "../img/relojes/7.jfif", tarjeta: "tarjeta7", cantidad:1},
    {id:53, prenda: "Reloj Modiya negro c/ malla de cuero", precio: 65000, img: "../img/relojes/8.jfif", tarjeta: "tarjeta8", cantidad:1},
]

let layoutRelojes = document.getElementById("layout-relojes")
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

function verRelojes(){
relojes.forEach((reloj) => {
        let acc=1
        let contenido = document.createElement("div")
        contenido.innerHTML = `
        <div class="tarjeta ${reloj.tarjeta}" style="--i:url(${reloj.img})">
            <div class="contenido">
                <a>$${reloj.precio}</a>
                <a onclick="carritoOn(), agregarAlCarrito(${reloj.id})" href="#">AGREGAR AL CARRITO</a>
            </div>
        </div>
        `
        layoutRelojes.appendChild(contenido)
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
        const item = relojes.find((producto) => producto.id === idProducto)
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
    relojes.forEach((reloj) => {
        reloj.cantidad = 1
    })
    total.innerText = "0"
    actualizarCarrito();
}
botonVaciar.addEventListener('click', vaciarCarrito)

verRelojes()
actualizarCarrito()