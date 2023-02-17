let zapatillas = [
    {id:54, prenda: "joggin", precio: 14500, img: "../img/zapatillas/1.webp", tarjeta: "tarjeta1"},
    {id:55, prenda: "joggin", precio: 14500, img: "../img/zapatillas/2.webp", tarjeta: "tarjeta2"},
    {id:56, prenda: "joggin", precio: 14000, img: "../img/zapatillas/3.jfif", tarjeta: "tarjeta3"},
    {id:57, prenda: "joggin", precio: 14000, img: "../img/zapatillas/4.jfif", tarjeta: "tarjeta4"},
    {id:58, prenda: "joggin", precio: 13500, img: "../img/zapatillas/5.jfif", tarjeta: "tarjeta5"},
    {id:59, prenda: "joggin", precio: 13500, img: "../img/zapatillas/6.webp", tarjeta: "tarjeta6"},
    {id:60, prenda: "joggin", precio: 13000, img: "../img/zapatillas/7.webp", tarjeta: "tarjeta7"},
    {id:61, prenda: "joggin", precio: 13000, img: "../img/zapatillas/8.webp", tarjeta: "tarjeta8"},
]

let layoutZapatillas = document.getElementById("layout-zapatillas")

function verZapatillas(){
zapatillas.forEach((zapatilla) => {
        let acc=1
        let contenido = document.createElement("div")
        contenido.innerHTML = `
        <div class="tarjeta ${zapatilla.tarjeta}" style="--i:url(${zapatilla.img})">
            <div class="contenido">
                <a>$${zapatilla.precio}</a>
                <a href="#">AGREGAR AL CARRITO</a>
            </div>
        </div>
        `
        layoutZapatillas.appendChild(contenido)
        acc++
    });
}

verZapatillas()