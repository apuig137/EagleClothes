let jeans = [
    {id:19, prenda: "jean", precio: 8000, img: "../img/jeans/1.jpg", tarjeta: "tarjeta1"},
    {id:20, prenda: "jean", precio: 8000, img: "../img/jeans/2.jpg", tarjeta: "tarjeta2"},
    {id:21, prenda: "jean", precio: 7500, img: "../img/jeans/3.jpg", tarjeta: "tarjeta3"},
    {id:22, prenda: "jean", precio: 7500, img: "../img/jeans/4.jpg", tarjeta: "tarjeta4"},
    {id:23, prenda: "jean", precio: 7000, img: "../img/jeans/5.jpg", tarjeta: "tarjeta5"},
    {id:24, prenda: "jean", precio: 7000, img: "../img/jeans/6.jpg", tarjeta: "tarjeta6"},
    {id:25, prenda: "jean", precio: 6500, img: "../img/jeans/7.jpg", tarjeta: "tarjeta7"},
    {id:26, prenda: "jean", precio: 6500, img: "../img/jeans/8.jpg", tarjeta: "tarjeta8"},
    {id:27, prenda: "jean", precio: 6000, img: "../img/jeans/9.jpg", tarjeta: "tarjeta9"},
]

let layoutJeans = document.getElementById("layout-jeans")

function verJeans(){
    jeans.forEach((jean) => {
        let acc=1
        let contenido = document.createElement("div")
        contenido.innerHTML = `
        <div class="tarjeta ${jean.tarjeta}" style="--i:url(${jean.img})">
            <div class="contenido">
                <a>$${jean.precio}</a>
                <a href="#">AGREGAR AL CARRITO</a>
            </div>
        </div>
        `
        //let agregar = document.getElementById("agregar")
        //agregar.addEventListener('click', () => {
        //    document.body.classList.toggle("negro")
        //});


        //let btn = document.createElement("button")
        //btn.classList.add("btn","btn-primary")
        //btn.textContent = "+"
        //btn.addEventListener('click', () => {
        //    agregarAlCarrito(jean.id)
        //});
        //contenido.appendChild(btn)
        

        layoutJeans.appendChild(contenido)
        acc++
    });
}

verJeans()
