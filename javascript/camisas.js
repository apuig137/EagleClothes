let camisas = [
    {id:1, prenda: "camisa", precio: 6500, img: "../img/camisas/1.webp", tarjeta: "tarjeta1"},
    {id:2, prenda: "camisa", precio: 6500, img: "../img/camisas/2.webp", tarjeta: "tarjeta2"},
    {id:3, prenda: "camisa", precio: 6000, img: "../img/camisas/3.webp", tarjeta: "tarjeta3"},
    {id:4, prenda: "camisa", precio: 6000, img: "../img/camisas/4.webp", tarjeta: "tarjeta4"},
    {id:5, prenda: "camisa", precio: 5500, img: "../img/camisas/5.webp", tarjeta: "tarjeta5"},
    {id:6, prenda: "camisa", precio: 5500, img: "../img/camisas/6.webp", tarjeta: "tarjeta6"},
    {id:7, prenda: "camisa", precio: 5000, img: "../img/camisas/7.webp", tarjeta: "tarjeta7"},
    {id:8, prenda: "camisa", precio: 5000, img: "../img/camisas/8.webp", tarjeta: "tarjeta8"},
    {id:9, prenda: "camisa", precio: 4500, img: "../img/camisas/9.webp", tarjeta: "tarjeta9"},
]

let layoutCamisas = document.getElementById("layout-camisas")

function verCamisas(){
    camisas.forEach((camisa) => {
        let acc=1
        let contenido = document.createElement("div")
        contenido.innerHTML = `
        <div class="tarjeta ${camisa.tarjeta}" style="--i:url(${camisa.img})">
            <div class="contenido">
                <a>$${camisa.precio}</a>
                <a href="#">AGREGAR AL CARRITO</a>
            </div>
        </div>
        `
        layoutCamisas.appendChild(contenido)
        acc++
    });
}

verCamisas()