//RENDERIZACION

let prendas = [
    {id:1, tipo: "camisa", prenda: "Camisa gris", precio: 6500, img: "../img/camisas/1.webp", tarjeta: "tarjeta1", cantidad: 1},
    {id:2, tipo: "camisa", prenda: "Camisa bordo", precio: 6500, img: "../img/camisas/2.webp", tarjeta: "tarjeta2", cantidad: 1},
    {id:3, tipo: "camisa", prenda: "Camisa marron", precio: 6000, img: "../img/camisas/3.webp", tarjeta: "tarjeta3", cantidad: 1},
    {id:4, tipo: "camisa", prenda: "Camisa floreada", precio: 6000, img: "../img/camisas/4.webp", tarjeta: "tarjeta4", cantidad: 1},
    {id:5, tipo: "camisa", prenda: "Camisa black & white", precio: 5500, img: "../img/camisas/5.webp", tarjeta: "tarjeta5", cantidad: 1},
    {id:6, tipo: "camisa", prenda: "Camisa floreada", precio: 5500, img: "../img/camisas/6.webp", tarjeta: "tarjeta6", cantidad: 1},
    {id:7, tipo: "camisa", prenda: "Camisa negra c/ detalles blancos", precio: 5000, img: "../img/camisas/7.webp", tarjeta: "tarjeta7", cantidad: 1},
    {id:8, tipo: "camisa", prenda: "Camisa rosa", precio: 5000, img: "../img/camisas/8.webp", tarjeta: "tarjeta8", cantidad: 1},
    {id:9, tipo: "camisa", prenda: "Camisa all black", precio: 4500, img: "../img/camisas/9.webp", tarjeta: "tarjeta9", cantidad: 1},
    {id:10, tipo: "campera", prenda: "Campera rojo y negro", precio: 20000, img: "https://http2.mlstatic.com/D_NQ_NP_821790-MLA45212422597_032021-O.webp", tarjeta: "tarjeta1", cantidad: 1},
    {id:11, tipo: "campera", prenda: "Campera mostaza", precio: 18000, img: "https://http2.mlstatic.com/D_NQ_NP_785179-MLA49741175272_042022-W.webp", tarjeta: "tarjeta2", cantidad: 1},
    {id:12, tipo: "campera", prenda: "Campera azul", precio: 16500, img: "https://http2.mlstatic.com/D_NQ_NP_771779-MLA49044633353_022022-W.webp", tarjeta: "tarjeta3", cantidad: 1},
    {id:13, tipo: "campera", prenda: "Campera azul marino", precio: 20000, img: "https://http2.mlstatic.com/D_NQ_NP_982977-MLA49946607917_052022-W.webp", tarjeta: "tarjeta4", cantidad: 1},
    {id:14, tipo: "campera", prenda: "Campera all black", precio: 16000, img: "https://http2.mlstatic.com/D_NQ_NP_613565-MLA50158884131_062022-W.webp", tarjeta: "tarjeta5", cantidad: 1},
    {id:15, tipo: "campera", prenda: "Campera azul y negro", precio: 16500, img: "https://http2.mlstatic.com/D_NQ_NP_720103-MLA49946621775_052022-W.webp", tarjeta: "tarjeta6", cantidad: 1},
    {id:16, tipo: "campera", prenda: "Campera militar", precio: 21000, img: "https://http2.mlstatic.com/D_NQ_NP_874095-MLA52348786698_112022-W.webp", tarjeta: "tarjeta7", cantidad: 1},
    {id:17, tipo: "campera", prenda: "Campera blanca", precio: 21000, img: "https://http2.mlstatic.com/D_NQ_NP_969258-MLA51916812730_102022-W.webp", tarjeta: "tarjeta8", cantidad: 1},
    {id:18, tipo: "campera", prenda: "Campera mostaza y negro", precio: 20000, img: "https://http2.mlstatic.com/D_NQ_NP_699562-MLA49828935010_052022-W.webp", tarjeta: "tarjeta9", cantidad: 1},
    {id:19, tipo: "jean", prenda: "Jean roto", precio: 9000, img: "../img/jeans/1.jpg", tarjeta: "tarjeta1", cantidad: 1},
    {id:20, tipo: "jean", prenda: "Jean clasico", precio: 9000, img: "../img/jeans/2.jpg", tarjeta: "tarjeta2", cantidad: 1},
    {id:21, tipo: "jean", prenda: "Jean claro", precio: 9000, img: "../img/jeans/3.jpg", tarjeta: "tarjeta3", cantidad: 1},
    {id:22, tipo: "jean", prenda: "Jean clasico", precio: 8500, img: "../img/jeans/4.jpg", tarjeta: "tarjeta4", cantidad: 1},
    {id:23, tipo: "jean", prenda: "Jean roto claro", precio: 8500, img: "../img/jeans/5.jpg", tarjeta: "tarjeta5", cantidad: 1},
    {id:24, tipo: "jean", prenda: "Jean clasico", precio: 8500, img: "../img/jeans/6.jpg", tarjeta: "tarjeta6", cantidad: 1},
    {id:25, tipo: "jean", prenda: "Jean claro", precio: 8000, img: "../img/jeans/7.jpg", tarjeta: "tarjeta7", cantidad: 1},
    {id:26, tipo: "jean", prenda: "Jean roto", precio: 8000, img: "../img/jeans/8.jpg", tarjeta: "tarjeta8", cantidad: 1},
    {id:27, tipo: "jean", prenda: "Jean clasico", precio: 8000, img: "../img/jeans/9.jpg", tarjeta: "tarjeta9", cantidad: 1},
    {id:28, tipo: "joggin", prenda: "Joggin full black", precio: 14500, img: "../img/joggins/1.jpg", tarjeta: "tarjeta1", cantidad: 1},
    {id:29, tipo: "joggin", prenda: "Joggin cuadrille claro", precio: 14500, img: "../img/joggins/2.jpg", tarjeta: "tarjeta2", cantidad: 1},
    {id:30, tipo: "joggin", prenda: "Joggin negro c/ amarillo", precio: 14000, img: "../img/joggins/3.jpg", tarjeta: "tarjeta3", cantidad: 1},
    {id:31, tipo: "joggin", prenda: "Joggin negro", precio: 14000, img: "../img/joggins/4.jpg", tarjeta: "tarjeta4", cantidad: 1},
    {id:32, tipo: "joggin", prenda: "Joggin gris", precio: 13500, img: "../img/joggins/5.jpg", tarjeta: "tarjeta5", cantidad: 1},
    {id:33, tipo: "joggin", prenda: "Joggin negro c/ tira clara", precio: 13500, img: "../img/joggins/6.jpg", tarjeta: "tarjeta6", cantidad: 1},
    {id:34, tipo: "joggin", prenda: "Joggin negro c/ tira oscura", precio: 13000, img: "../img/joggins/7.jpg", tarjeta: "tarjeta7", cantidad: 1},
    {id:35, tipo: "joggin", prenda: "Joggin azul marino", precio: 13000, img: "../img/joggins/8.jpg", tarjeta: "tarjeta8", cantidad: 1},
    {id:36, tipo: "joggin", prenda: "Joggin gris oscuro", precio: 12500, img: "../img/joggins/9.jpg", tarjeta: "tarjeta9", cantidad: 1},
    {id:37, tipo: "perfume", prenda: "Perfume fragancia oceanica", precio: 11000, img: "../img/perfumes/1.jpg", tarjeta: "tarjeta1", cantidad:1},
    {id:38, tipo: "perfume", prenda: "Perfume fragancia polinesica", precio: 11000, img: "../img/perfumes/2.avif", tarjeta: "tarjeta2", cantidad:1},
    {id:39, tipo: "perfume", prenda: "Perfume fragancia marina", precio: 11000, img: "../img/perfumes/3.avif", tarjeta: "tarjeta3", cantidad:1},
    {id:40, tipo: "perfume", prenda: "Perfume fragancia vainilla", precio: 10500, img: "../img/perfumes/4.avif", tarjeta: "tarjeta4", cantidad:1},
    {id:41, tipo: "perfume", prenda: "Perfume fragancia mediterranea", precio: 10500, img: "../img/perfumes/5.avif", tarjeta: "tarjeta5", cantidad:1},
    {id:42, tipo: "perfume", prenda: "Perfume fragancia orietal", precio: 10500, img: "../img/perfumes/6.avif", tarjeta: "tarjeta6", cantidad:1},
    {id:43, tipo: "perfume", prenda: "Perfume fragancia tulipan", precio: 10000, img: "../img/perfumes/7.avif", tarjeta: "tarjeta7", cantidad:1},
    {id:44, tipo: "perfume", prenda: "Perfume fragancia lavanda", precio: 10000, img: "../img/perfumes/8.avif", tarjeta: "tarjeta8", cantidad:1},
    {id:45, tipo: "perfume", prenda: "Perfume fragancia orquideas", precio: 10000, img: "../img/perfumes/9.avif", tarjeta: "tarjeta9", cantidad:1},
    {id:46, tipo: "reloj", prenda: "Reloj Benyar acero azul", precio: 25000, img: "../img/relojes/1.jpg", tarjeta: "tarjeta1", cantidad:1},
    {id:47, tipo: "reloj", prenda: "Reloj Benyar acero azul c/ malla de silicona", precio: 20000, img: "../img/relojes/2.jpg", tarjeta: "tarjeta2", cantidad:1},
    {id:48, tipo: "reloj", prenda: "Reloj Benyar acero negro c/ malla de silicona", precio: 25000, img: "../img/relojes/3.jpg", tarjeta: "tarjeta3", cantidad:1},
    {id:49, tipo: "reloj", prenda: "Reloj Benyar acero negro", precio: 20000, img: "../img/relojes/4.jpg", tarjeta: "tarjeta4", cantidad:1},
    {id:50, tipo: "reloj", prenda: "Reloj Modiya negro de acero y cuarzo", precio: 70000, img: "../img/relojes/5.jfif", tarjeta: "tarjeta5", cantidad:1},
    {id:51, tipo: "reloj", prenda: "Reloj Modiya blanco de acero y cuarzo", precio: 70000, img: "../img/relojes/6.jfif", tarjeta: "tarjeta6", cantidad:1},
    {id:52, tipo: "reloj", prenda: "Reloj Modiya blanco c/ malla de cuero", precio: 65000, img: "../img/relojes/7.jfif", tarjeta: "tarjeta7", cantidad:1},
    {id:53, tipo: "reloj", prenda: "Reloj Modiya negro c/ malla de cuero", precio: 65000, img: "../img/relojes/8.jfif", tarjeta: "tarjeta8", cantidad:1},
    {id:54, tipo: "remera", prenda: "Chomba blanco c/ azul", precio: 14500, img: "../img/remeras/remera1.webp", tarjeta: "tarjeta1", cantidad:1},
    {id:55, tipo: "remera", prenda: "Chomba blanco c/ negro", precio: 14500, img: "../img/remeras/remera2.webp", tarjeta: "tarjeta2", cantidad:1},
    {id:56, tipo: "remera", prenda: "Chomba blanco c/ rojo", precio: 14500, img: "../img/remeras/remera3.webp", tarjeta: "tarjeta3", cantidad:1},
    {id:57, tipo: "remera", prenda: "Remera California rosa", precio: 14000, img: "../img/remeras/remera4.jpg", tarjeta: "tarjeta4", cantidad:1},
    {id:58, tipo: "remera", prenda: "Remera California celeste", precio: 14000, img: "../img/remeras/remera5.jpg", tarjeta: "tarjeta5", cantidad:1},
    {id:59, tipo: "remera", prenda: "Remera California blanco", precio: 13500, img: "../img/remeras/remera6.jpg", tarjeta: "tarjeta6", cantidad:1},
    {id:60, tipo: "remera", prenda: "Remera rayada blanck & white", precio: 13500, img: "../img/remeras/remera7.jpg", tarjeta: "tarjeta7", cantidad:1},
    {id:61, tipo: "remera", prenda: "Remera Los Angeles negro", precio: 13000, img: "../img/remeras/remera8.jpg", tarjeta: "tarjeta8", cantidad:1},
    {id:62, tipo: "remera", prenda: "Remera rayada beige & white", precio: 13000, img: "../img/remeras/remera9.jpg", tarjeta: "tarjeta9", cantidad:1},
    {id:63, tipo: "zapatilla", prenda: "Adidas Grand Court negro", precio: 24500, img: "../img/zapatillas/1.webp", tarjeta: "tarjeta1", cantidad:1},
    {id:64, tipo: "zapatilla", prenda: "Adidas Grand Court blanco", precio: 24500, img: "../img/zapatillas/2.webp", tarjeta: "tarjeta2", cantidad:1},
    {id:65, tipo: "zapatilla", prenda: "Nike Air Force 1 negro", precio: 28000, img: "../img/zapatillas/3.jfif", tarjeta: "tarjeta3", cantidad:1},
    {id:66, tipo: "zapatilla", prenda: "Nike Air Force 1 naranja", precio: 28000, img: "../img/zapatillas/4.jfif", tarjeta: "tarjeta4", cantidad:1},
    {id:67, tipo: "zapatilla", prenda: "Vans U Old Skool", precio: 23500, img: "../img/zapatillas/5.jfif", tarjeta: "tarjeta5", cantidad:1},
    {id:68, tipo: "zapatilla", prenda: "Vans U SK8-HI", precio: 23500, img: "../img/zapatillas/6.webp", tarjeta: "tarjeta6", cantidad:1},
    {id:69, tipo: "zapatilla", prenda: "DC Crisis TX SS", precio: 23000, img: "../img/zapatillas/7.webp", tarjeta: "tarjeta7", cantidad:1},
    {id:70, tipo: "zapatilla", prenda: "DC Pure WNT", precio: 23000, img: "../img/zapatillas/8.webp", tarjeta: "tarjeta8", cantidad:1},
]

let layoutRopa = document.querySelector(".layout-ropa")
let layoutPerfumes = document.querySelector(".layout-perfumes")
let layoutRelojes = document.querySelector(".layout-relojes")
let layoutIndex = document.querySelector(".layout-index")

let idCamisasBtn = document.querySelector("#camisas-btn")
let idCamperasBtn = document.querySelector("#camperas-btn")
let idJeansBtn = document.querySelector("#jeans-btn")
let idJogginsBtn = document.querySelector("#joggins-btn")
let idPerfumesBtn = document.querySelector("#perfumes-btn")
let idRelojesBtn = document.querySelector("#relojes-btn")
let idRemerasBtn = document.querySelector("#remeras-btn")
let idZapatillasBtn = document.querySelector("#zapatillas-btn")

let btnCamisas = document.querySelector(".camisas-btn")
let btnCamperas = document.querySelector(".camperas-btn")
let btnJeans = document.querySelector(".jeans-btn")
let btnJoggins = document.querySelector(".joggins-btn")
let btnPerfumes = document.querySelector(".perfumes-btn")
let btnRelojes = document.querySelector(".relojes-btn")
let btnRemeras = document.querySelector(".remeras-btn")
let btnZapatillas = document.querySelector(".zapatillas-btn")
let btnInicio = document.querySelector("#inicio-btn")

let mostrarDisplayRopa = () => {
    layoutIndex.classList.add("display-none")
    layoutRopa.classList.remove("display-none")
    layoutPerfumes.classList.add("display-none")
    layoutRelojes.classList.add("display-none")
}
let mostrarDisplayPerfumes = () => {
    layoutIndex.classList.add("display-none")
    layoutRopa.classList.add("display-none")
    layoutPerfumes.classList.remove("display-none")
    layoutRelojes.classList.add("display-none")
}
let mostrarDisplayRelojes = () => {
    layoutIndex.classList.add("display-none")
    layoutRopa.classList.add("display-none")
    layoutPerfumes.classList.add("display-none")
    layoutRelojes.classList.remove("display-none")
}
let mostrarDisplayInicio = () => {
    layoutIndex.classList.remove("display-none")
    layoutRopa.classList.add("display-none")
    layoutPerfumes.classList.add("display-none")
    layoutRelojes.classList.add("display-none")
}

btnCamisas.addEventListener("click",() => {
    mostrarDisplayRopa()
    layoutRopa.innerHTML = ""
    verPrenda("camisa")
})
btnCamperas.addEventListener("click",() => {
    mostrarDisplayRopa()
    layoutRopa.innerHTML = ""
    verPrenda("campera")
})
btnJeans.addEventListener("click",() => {
    mostrarDisplayRopa()
    layoutRopa.innerHTML = ""
    verPrenda("jean")
})
btnJoggins.addEventListener("click",() => {
    mostrarDisplayRopa()
    layoutRopa.innerHTML = ""
    verPrenda("joggin")
})
btnPerfumes.addEventListener("click",() => {
    mostrarDisplayPerfumes()
    layoutPerfumes.innerHTML = ""
    verPrenda("perfume")
})
btnRemeras.addEventListener("click",() => {
    mostrarDisplayRopa()
    layoutRopa.innerHTML = ""
    verPrenda("remera")
})
btnRelojes.addEventListener("click",() => {
    mostrarDisplayRelojes()
    layoutRelojes.innerHTML = ""
    verPrenda("reloj")
})
btnZapatillas.addEventListener("click",() => {
    mostrarDisplayRelojes()
    layoutRelojes.innerHTML = ""
    verPrenda("zapatilla")
})
btnInicio.addEventListener("click",() => {
    mostrarDisplayInicio()
})


idCamisasBtn.addEventListener("click",() => {
    mostrarDisplayRopa()
    layoutRopa.innerHTML = ""
    verPrenda("camisa")
})
idCamperasBtn.addEventListener("click",() => {
    mostrarDisplayRopa()
    layoutRopa.innerHTML = ""
    verPrenda("campera")
})
idJeansBtn.addEventListener("click",() => {
    mostrarDisplayRopa()
    layoutRopa.innerHTML = ""
    verPrenda("jean")
})
idJogginsBtn.addEventListener("click",() => {
    mostrarDisplayRopa()
    layoutRopa.innerHTML = ""
    verPrenda("joggin")
})
idRemerasBtn.addEventListener("click",() => {
    mostrarDisplayRopa()
    layoutRopa.innerHTML = ""
    verPrenda("remera")
})
idPerfumesBtn.addEventListener("click",() => {
    mostrarDisplayPerfumes()
    layoutPerfumes.innerHTML = ""
    verPrenda("perfume")
})
idRelojesBtn.addEventListener("click",() => {
    mostrarDisplayRelojes()
    layoutRopa.innerHTML = ""
    verPrenda("reloj")
})
idZapatillasBtn.addEventListener("click",() => {
    mostrarDisplayRelojes()
    layoutRelojes.innerHTML = ""
    verPrenda("zapatilla")
})



function verPrenda(tipo){
    prendas.forEach((prenda) =>{
        let contenido = document.createElement("div")
        if (tipo == prenda.tipo){
            contenido.innerHTML = `
            <div class="tarjeta ${prenda.tarjeta}" style="--i:url(${prenda.img})">
                <div class="contenido">
                    <a>$${prenda.precio}</a>
                    <a onclick="carritoOn(), agregarAlCarrito(${prenda.id})" href="#">AGREGAR AL CARRITO</a>
                </div>
            </div>
            `
            if (tipo == "camisa") {
                layoutRopa.appendChild(contenido)
            } else if (tipo == "campera") {
                layoutRopa.appendChild(contenido)
            } else if (tipo == "jean") {
                layoutRopa.appendChild(contenido)
            } else if (tipo == "joggin") {
                layoutRopa.appendChild(contenido)
            } else if (tipo == "remera") {
                layoutRopa.appendChild(contenido)
            } else if (tipo == "zapatilla") {
                layoutRelojes.appendChild(contenido)
            } else if (tipo == "reloj") {
                layoutRelojes.appendChild(contenido)
            } else if (tipo == "perfume") {
                layoutPerfumes.appendChild(contenido)
            }
        }
    })
}

// CARRITO

let carritoIcon1 = document.getElementById("carrito1")
let carritoIcon2 = document.getElementById("carrito2")
let carritoDiv = document.querySelector(".carrito-div")
let carritoUl = document.getElementById("carrito-ul")
let botonVaciar = document.getElementById('boton-vaciar')
let total = document.getElementById('total')

let carrito = JSON.parse(localStorage.getItem("carrito")) || []
let guardarLocal = () => { localStorage.setItem("carrito",JSON.stringify(carrito)) }
let carritoOn = () => { carritoDiv.classList.add("carrito-div-active") }

carritoIcon1.addEventListener("click",() => {
    carritoDiv.classList.toggle("carrito-div-active")
})

carritoIcon2.addEventListener("click", () => {
    carritoDiv.classList.toggle("carrito-div-active")
})

let agregarAlCarrito = (idProducto) => {
    let existe = carrito.some(producto => producto.id === idProducto)
    if (existe) {
        carrito.map(producto => {
            if (producto.id === idProducto) {
                producto.cantidad++
            }
        })
    } else {
        const item = prendas.find((producto) => producto.id === idProducto)
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
    prendas.forEach((prenda) => {
        prenda.cantidad = 1
    })
    total.innerText = "0"
    actualizarCarrito();
}
botonVaciar.addEventListener('click', vaciarCarrito)

verPrenda()
actualizarCarrito()