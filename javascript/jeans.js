let jeans = [
    {id:19, prenda: "Jean roto", precio: 9000, img: "../img/jeans/1.jpg", tarjeta: "tarjeta1", cantidad: 1},
    {id:20, prenda: "Jean clasico", precio: 9000, img: "../img/jeans/2.jpg", tarjeta: "tarjeta2", cantidad: 1},
    {id:21, prenda: "Jean claro", precio: 9000, img: "../img/jeans/3.jpg", tarjeta: "tarjeta3", cantidad: 1},
    {id:22, prenda: "Jean clasico", precio: 8500, img: "../img/jeans/4.jpg", tarjeta: "tarjeta4", cantidad: 1},
    {id:23, prenda: "Jean roto claro", precio: 8500, img: "../img/jeans/5.jpg", tarjeta: "tarjeta5", cantidad: 1},
    {id:24, prenda: "Jean clasico", precio: 8500, img: "../img/jeans/6.jpg", tarjeta: "tarjeta6", cantidad: 1},
    {id:25, prenda: "Jean claro", precio: 8000, img: "../img/jeans/7.jpg", tarjeta: "tarjeta7", cantidad: 1},
    {id:26, prenda: "Jean roto", precio: 8000, img: "../img/jeans/8.jpg", tarjeta: "tarjeta8", cantidad: 1},
    {id:27, prenda: "Jean clasico", precio: 8000, img: "../img/jeans/9.jpg", tarjeta: "tarjeta9", cantidad: 1},
]

let layoutJeans = document.getElementById("layout-jeans")
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

function verJeans(){
    jeans.forEach((jean) => {
        let acc=1
        let contenido = document.createElement("div")
        contenido.innerHTML = `
        <div class="tarjeta ${jean.tarjeta}" style="--i:url(${jean.img})">
            <div class="contenido">
                <a>$${jean.precio}</a>
                <a onclick="carritoOn(), agregarAlCarrito(${jean.id})" href="#">AGREGAR AL CARRITO</a>
            </div>
        </div>
        `
        layoutJeans.appendChild(contenido)
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
        const item = jeans.find((producto) => producto.id === idProducto)
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
    jeans.forEach((jean) => {
        jean.cantidad = 1
    })
    total.innerText = "0"
    actualizarCarrito();
}
botonVaciar.addEventListener('click', vaciarCarrito)

verJeans()
actualizarCarrito()