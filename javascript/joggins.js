let joggins = [
    {id:19, prenda: "joggin", precio: 14500, img: "../img/joggins/1.jpg", tarjeta: "tarjeta1"},
    {id:20, prenda: "joggin", precio: 14500, img: "../img/joggins/2.jpg", tarjeta: "tarjeta2"},
    {id:21, prenda: "joggin", precio: 14000, img: "../img/joggins/3.jpg", tarjeta: "tarjeta3"},
    {id:22, prenda: "joggin", precio: 14000, img: "../img/joggins/4.jpg", tarjeta: "tarjeta4"},
    {id:23, prenda: "joggin", precio: 13500, img: "../img/joggins/5.jpg", tarjeta: "tarjeta5"},
    {id:24, prenda: "joggin", precio: 13500, img: "../img/joggins/6.jpg", tarjeta: "tarjeta6"},
    {id:25, prenda: "joggin", precio: 13000, img: "../img/joggins/7.jpg", tarjeta: "tarjeta7"},
    {id:26, prenda: "joggin", precio: 13000, img: "../img/joggins/8.jpg", tarjeta: "tarjeta8"},
    {id:27, prenda: "joggin", precio: 12500, img: "../img/joggins/9.jpg", tarjeta: "tarjeta9"},
]

let layoutJoggins = document.getElementById("layout-joggins")

function verJoggins(){
joggins.forEach((joggin) => {
        let acc=1
        let contenido = document.createElement("div")
        contenido.innerHTML = `
        <div class="tarjeta ${joggin.tarjeta}" style="--i:url(${joggin.img})">
            <div class="contenido">
                <a>$${joggin.precio}</a>
                <a href="#">AGREGAR AL CARRITO</a>
            </div>
        </div>
        `
        layoutJoggins.appendChild(contenido)
        acc++
    });
}

verJoggins()