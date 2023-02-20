let zapatillas = [
    {id:63, prenda: "Adidas Grand Court negro", precio: 24500, img: "../img/zapatillas/1.webp", tarjeta: "tarjeta1", cantidad:1},
    {id:64, prenda: "Adidas Grand Court blanco", precio: 24500, img: "../img/zapatillas/2.webp", tarjeta: "tarjeta2", cantidad:1},
    {id:65, prenda: "Nike Air Force 1 negro", precio: 28000, img: "../img/zapatillas/3.jfif", tarjeta: "tarjeta3", cantidad:1},
    {id:66, prenda: "Nike Air Force 1 naranja", precio: 28000, img: "../img/zapatillas/4.jfif", tarjeta: "tarjeta4", cantidad:1},
    {id:67, prenda: "Vans U Old Skool", precio: 23500, img: "../img/zapatillas/5.jfif", tarjeta: "tarjeta5", cantidad:1},
    {id:68, prenda: "Vans U SK8-HI", precio: 23500, img: "../img/zapatillas/6.webp", tarjeta: "tarjeta6", cantidad:1},
    {id:69, prenda: "DC Crisis TX SS", precio: 23000, img: "../img/zapatillas/7.webp", tarjeta: "tarjeta7", cantidad:1},
    {id:70, prenda: "DC Pure WNT", precio: 23000, img: "../img/zapatillas/8.webp", tarjeta: "tarjeta8", cantidad:1},
]

let layoutZapatillas = document.getElementById("layout-zapatillas")
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

function verZapatillas(){
zapatillas.forEach((zapatilla) => {
        let acc=1
        let contenido = document.createElement("div")
        contenido.innerHTML = `
        <div class="tarjeta ${zapatilla.tarjeta}" style="--i:url(${zapatilla.img})">
            <div class="contenido">
                <a>$${zapatilla.precio}</a>
                <a onclick="carritoOn(), agregarAlCarrito(${zapatilla.id})" href="#">AGREGAR AL CARRITO</a>
            </div>
        </div>
        `
        layoutZapatillas.appendChild(contenido)
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
        const item = zapatillas.find((producto) => producto.id === idProducto)
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
    zapatillas.forEach((zapatilla) => {
        zapatilla.cantidad = 1
    })
    total.innerText = "0"
    actualizarCarrito();
}
botonVaciar.addEventListener('click', vaciarCarrito)

verZapatillas()
actualizarCarrito()