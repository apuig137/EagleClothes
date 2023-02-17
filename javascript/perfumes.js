let perfumes = [
    {id:28, prenda: "joggin", precio: 11000, img: "../img/perfumes/1.jpg", tarjeta: "tarjeta1"},
    {id:29, prenda: "joggin", precio: 11000, img: "../img/perfumes/2.avif", tarjeta: "tarjeta2"},
    {id:30, prenda: "joggin", precio: 11000, img: "../img/perfumes/3.avif", tarjeta: "tarjeta3"},
    {id:31, prenda: "joggin", precio: 10500, img: "../img/perfumes/4.avif", tarjeta: "tarjeta4"},
    {id:32, prenda: "joggin", precio: 10500, img: "../img/perfumes/5.avif", tarjeta: "tarjeta5"},
    {id:33, prenda: "joggin", precio: 10500, img: "../img/perfumes/6.avif", tarjeta: "tarjeta6"},
    {id:34, prenda: "joggin", precio: 10000, img: "../img/perfumes/7.avif", tarjeta: "tarjeta7"},
    {id:35, prenda: "joggin", precio: 10000, img: "../img/perfumes/8.avif", tarjeta: "tarjeta8"},
    {id:36, prenda: "joggin", precio: 10000, img: "../img/perfumes/9.avif", tarjeta: "tarjeta9"},
]

let layoutPerfumes = document.getElementById("layout-perfumes")

function verPerfumes(){
perfumes.forEach((perfume) => {
        let acc=1
        let contenido = document.createElement("div")
        contenido.innerHTML = `
        <div class="tarjeta ${perfume.tarjeta}" style="--i:url(${perfume.img})">
            <div class="contenido">
                <a>$${perfume.precio}</a>
                <a href="#">AGREGAR AL CARRITO</a>
            </div>
        </div>
        `
        layoutPerfumes.appendChild(contenido)
        acc++
    });
}

verPerfumes()