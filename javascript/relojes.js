let relojes = [
    {id:37, prenda: "joggin", precio: 25000, img: "../img/relojes/1.jpg", tarjeta: "tarjeta1"},
    {id:38, prenda: "joggin", precio: 20000, img: "../img/relojes/2.jpg", tarjeta: "tarjeta2"},
    {id:39, prenda: "joggin", precio: 25000, img: "../img/relojes/3.jpg", tarjeta: "tarjeta3"},
    {id:40, prenda: "joggin", precio: 20000, img: "../img/relojes/4.jpg", tarjeta: "tarjeta4"},
    {id:41, prenda: "joggin", precio: 70000, img: "../img/relojes/5.jfif", tarjeta: "tarjeta5"},
    {id:42, prenda: "joggin", precio: 70000, img: "../img/relojes/6.jfif", tarjeta: "tarjeta6"},
    {id:43, prenda: "joggin", precio: 65000, img: "../img/relojes/7.jfif", tarjeta: "tarjeta7"},
    {id:44, prenda: "joggin", precio: 65000, img: "../img/relojes/8.jfif", tarjeta: "tarjeta8"},
]

let layoutRelojes = document.getElementById("layout-relojes")

function verRelojes(){
relojes.forEach((reloj) => {
        let acc=1
        let contenido = document.createElement("div")
        contenido.innerHTML = `
        <div class="tarjeta ${reloj.tarjeta}" style="--i:url(${reloj.img})">
            <div class="contenido">
                <a>$${reloj.precio}</a>
                <a href="#">AGREGAR AL CARRITO</a>
            </div>
        </div>
        `
        layoutRelojes.appendChild(contenido)
        acc++
    });
}

verRelojes()