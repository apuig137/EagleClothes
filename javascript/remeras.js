let remeras = [
    {id:45, prenda: "joggin", precio: 14500, img: "../img/remeras/remera1.webp", tarjeta: "tarjeta1"},
    {id:46, prenda: "joggin", precio: 14500, img: "../img/remeras/remera2.webp", tarjeta: "tarjeta2"},
    {id:47, prenda: "joggin", precio: 14500, img: "../img/remeras/remera3.webp", tarjeta: "tarjeta3"},
    {id:48, prenda: "joggin", precio: 14000, img: "../img/remeras/remera4.jpg", tarjeta: "tarjeta4"},
    {id:49, prenda: "joggin", precio: 14000, img: "../img/remeras/remera5.jpg", tarjeta: "tarjeta5"},
    {id:50, prenda: "joggin", precio: 13500, img: "../img/remeras/remera6.jpg", tarjeta: "tarjeta6"},
    {id:51, prenda: "joggin", precio: 13500, img: "../img/remeras/remera7.jpg", tarjeta: "tarjeta7"},
    {id:52, prenda: "joggin", precio: 13000, img: "../img/remeras/remera8.jpg", tarjeta: "tarjeta8"},
    {id:53, prenda: "joggin", precio: 13000, img: "../img/remeras/remera9.jpg", tarjeta: "tarjeta9"},
]

let layoutRemeras = document.getElementById("layout-remeras")

function verRemeras(){
remeras.forEach((remera) => {
        let acc=1
        let contenido = document.createElement("div")
        contenido.innerHTML = `
        <div class="tarjeta ${remera.tarjeta}" style="--i:url(${remera.img})">
            <div class="contenido">
                <a>$${remera.precio}</a>
                <a href="#">AGREGAR AL CARRITO</a>
            </div>
        </div>
        `
        layoutRemeras.appendChild(contenido)
        acc++
    });
}

verRemeras()