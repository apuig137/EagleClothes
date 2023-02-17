let productos = [
    {id:1, prenda: "camisa", precio: 6500, img: "../img/camisas/1.webp", tarjeta: "tarjeta1"},
    {id:2, prenda: "camisa", precio: 6500, img: "../img/camisas/2.webp", tarjeta: "tarjeta2"},
    {id:3, prenda: "camisa", precio: 6000, img: "../img/camisas/3.webp", tarjeta: "tarjeta3"},
    {id:4, prenda: "camisa", precio: 6000, img: "../img/camisas/4.webp", tarjeta: "tarjeta4"},
    {id:5, prenda: "camisa", precio: 5500, img: "../img/camisas/5.webp", tarjeta: "tarjeta5"},
    {id:6, prenda: "camisa", precio: 5500, img: "../img/camisas/6.webp", tarjeta: "tarjeta6"},
    {id:7, prenda: "camisa", precio: 5000, img: "../img/camisas/7.webp", tarjeta: "tarjeta7"},
    {id:8, prenda: "camisa", precio: 5000, img: "../img/camisas/8.webp", tarjeta: "tarjeta8"},
    {id:9, prenda: "camisa", precio: 4500, img: "../img/camisas/9.webp", tarjeta: "tarjeta9"},
    {id:10, prenda: "campera", precio: 14500, img: "https://http2.mlstatic.com/D_NQ_NP_821790-MLA45212422597_032021-O.webp", tarjeta: "tarjeta1"},
    {id:11, prenda: "campera", precio: 14500, img: "https://http2.mlstatic.com/D_NQ_NP_785179-MLA49741175272_042022-W.webp", tarjeta: "tarjeta2"},
    {id:12, prenda: "campera", precio: 14000, img: "https://http2.mlstatic.com/D_NQ_NP_771779-MLA49044633353_022022-W.webp", tarjeta: "tarjeta3"},
    {id:13, prenda: "campera", precio: 14000, img: "https://http2.mlstatic.com/D_NQ_NP_982977-MLA49946607917_052022-W.webp", tarjeta: "tarjeta4"},
    {id:14, prenda: "campera", precio: 13500, img: "https://http2.mlstatic.com/D_NQ_NP_613565-MLA50158884131_062022-W.webp", tarjeta: "tarjeta5"},
    {id:15, prenda: "campera", precio: 13500, img: "https://http2.mlstatic.com/D_NQ_NP_720103-MLA49946621775_052022-W.webp", tarjeta: "tarjeta6"},
    {id:16, prenda: "campera", precio: 13000, img: "https://http2.mlstatic.com/D_NQ_NP_874095-MLA52348786698_112022-W.webp", tarjeta: "tarjeta7"},
    {id:17, prenda: "campera", precio: 13000, img: "https://http2.mlstatic.com/D_NQ_NP_969258-MLA51916812730_102022-W.webp", tarjeta: "tarjeta8"},
    {id:18, prenda: "campera", precio: 12500, img: "https://http2.mlstatic.com/D_NQ_NP_699562-MLA49828935010_052022-W.webp", tarjeta: "tarjeta9"},
    {id:19, prenda: "jean", precio: 8000, img: "../img/jeans/1.jpg", tarjeta: "tarjeta1"},
    {id:20, prenda: "jean", precio: 8000, img: "../img/jeans/2.jpg", tarjeta: "tarjeta2"},
    {id:21, prenda: "jean", precio: 7500, img: "../img/jeans/3.jpg", tarjeta: "tarjeta3"},
    {id:22, prenda: "jean", precio: 7500, img: "../img/jeans/4.jpg", tarjeta: "tarjeta4"},
    {id:23, prenda: "jean", precio: 7000, img: "../img/jeans/5.jpg", tarjeta: "tarjeta5"},
    {id:24, prenda: "jean", precio: 7000, img: "../img/jeans/6.jpg", tarjeta: "tarjeta6"},
    {id:25, prenda: "jean", precio: 6500, img: "../img/jeans/7.jpg", tarjeta: "tarjeta7"},
    {id:26, prenda: "jean", precio: 6500, img: "../img/jeans/8.jpg", tarjeta: "tarjeta8"},
    {id:27, prenda: "jean", precio: 6000, img: "../img/jeans/9.jpg", tarjeta: "tarjeta9"},
    {id:28, prenda: "joggin", precio: 14500, img: "../img/joggins/1.jpg", tarjeta: "tarjeta1"},
    {id:29, prenda: "joggin", precio: 14500, img: "../img/joggins/2.jpg", tarjeta: "tarjeta2"},
    {id:30, prenda: "joggin", precio: 14000, img: "../img/joggins/3.jpg", tarjeta: "tarjeta3"},
    {id:31, prenda: "joggin", precio: 14000, img: "../img/joggins/4.jpg", tarjeta: "tarjeta4"},
    {id:32, prenda: "joggin", precio: 13500, img: "../img/joggins/5.jpg", tarjeta: "tarjeta5"},
    {id:33, prenda: "joggin", precio: 13500, img: "../img/joggins/6.jpg", tarjeta: "tarjeta6"},
    {id:34, prenda: "joggin", precio: 13000, img: "../img/joggins/7.jpg", tarjeta: "tarjeta7"},
    {id:35, prenda: "joggin", precio: 13000, img: "../img/joggins/8.jpg", tarjeta: "tarjeta8"},
    {id:36, prenda: "joggin", precio: 12500, img: "../img/joggins/9.jpg", tarjeta: "tarjeta9"},
    {id:37, prenda: "perfume", precio: 11000, img: "../img/perfumes/1.jpg", tarjeta: "tarjeta1"},
    {id:38, prenda: "perfume", precio: 11000, img: "../img/perfumes/2.avif", tarjeta: "tarjeta2"},
    {id:39, prenda: "perfume", precio: 11000, img: "../img/perfumes/3.avif", tarjeta: "tarjeta3"},
    {id:40, prenda: "perfume", precio: 10500, img: "../img/perfumes/4.avif", tarjeta: "tarjeta4"},
    {id:41, prenda: "perfume", precio: 10500, img: "../img/perfumes/5.avif", tarjeta: "tarjeta5"},
    {id:42, prenda: "perfume", precio: 10500, img: "../img/perfumes/6.avif", tarjeta: "tarjeta6"},
    {id:43, prenda: "perfume", precio: 10000, img: "../img/perfumes/7.avif", tarjeta: "tarjeta7"},
    {id:44, prenda: "perfume", precio: 10000, img: "../img/perfumes/8.avif", tarjeta: "tarjeta8"},
    {id:45, prenda: "perfume", precio: 10000, img: "../img/perfumes/9.avif", tarjeta: "tarjeta9"},
    {id:46, prenda: "reloj", precio: 25000, img: "../img/relojes/1.jpg", tarjeta: "tarjeta1"},
    {id:47, prenda: "reloj", precio: 20000, img: "../img/relojes/2.jpg", tarjeta: "tarjeta2"},
    {id:48, prenda: "reloj", precio: 25000, img: "../img/relojes/3.jpg", tarjeta: "tarjeta3"},
    {id:49, prenda: "reloj", precio: 20000, img: "../img/relojes/4.jpg", tarjeta: "tarjeta4"},
    {id:50, prenda: "reloj", precio: 70000, img: "../img/relojes/5.jfif", tarjeta: "tarjeta5"},
    {id:51, prenda: "reloj", precio: 70000, img: "../img/relojes/6.jfif", tarjeta: "tarjeta6"},
    {id:52, prenda: "reloj", precio: 65000, img: "../img/relojes/7.jfif", tarjeta: "tarjeta7"},
    {id:53, prenda: "reloj", precio: 65000, img: "../img/relojes/8.jfif", tarjeta: "tarjeta8"},
    {id:54, prenda: "remera", precio: 14500, img: "../img/remeras/remera1.webp", tarjeta: "tarjeta1"},
    {id:55, prenda: "remera", precio: 14500, img: "../img/remeras/remera2.webp", tarjeta: "tarjeta2"},
    {id:56, prenda: "remera", precio: 14500, img: "../img/remeras/remera3.webp", tarjeta: "tarjeta3"},
    {id:57, prenda: "remera", precio: 14000, img: "../img/remeras/remera4.jpg", tarjeta: "tarjeta4"},
    {id:58, prenda: "remera", precio: 14000, img: "../img/remeras/remera5.jpg", tarjeta: "tarjeta5"},
    {id:59, prenda: "remera", precio: 13500, img: "../img/remeras/remera6.jpg", tarjeta: "tarjeta6"},
    {id:60, prenda: "remera", precio: 13500, img: "../img/remeras/remera7.jpg", tarjeta: "tarjeta7"},
    {id:61, prenda: "remera", precio: 13000, img: "../img/remeras/remera8.jpg", tarjeta: "tarjeta8"},
    {id:62, prenda: "remera", precio: 13000, img: "../img/remeras/remera9.jpg", tarjeta: "tarjeta9"},
    {id:63, prenda: "zapatilla", precio: 14500, img: "../img/zapatillas/1.webp", tarjeta: "tarjeta1"},
    {id:64, prenda: "zapatilla", precio: 14500, img: "../img/zapatillas/2.webp", tarjeta: "tarjeta2"},
    {id:65, prenda: "zapatilla", precio: 14000, img: "../img/zapatillas/3.jfif", tarjeta: "tarjeta3"},
    {id:66, prenda: "zapatilla", precio: 14000, img: "../img/zapatillas/4.jfif", tarjeta: "tarjeta4"},
    {id:67, prenda: "zapatilla", precio: 13500, img: "../img/zapatillas/5.jfif", tarjeta: "tarjeta5"},
    {id:68, prenda: "zapatilla", precio: 13500, img: "../img/zapatillas/6.webp", tarjeta: "tarjeta6"},
    {id:69, prenda: "zapatilla", precio: 13000, img: "../img/zapatillas/7.webp", tarjeta: "tarjeta7"},
    {id:70, prenda: "zapatilla", precio: 13000, img: "../img/zapatillas/8.webp", tarjeta: "tarjeta8"},
]

let layouts = [
    layoutCamisas = document.getElementById("layout-camisas"),
    layoutCamperas = document.getElementById("layout-camperas"),
    layoutJeans = document.getElementById("layout-jeans"),
    layoutJoggins = document.getElementById("layout-joggins"),
    layoutPerfumes = document.getElementById("layout-perfumes"),
    layoutRelojes = document.getElementById("layout-relojes"),
    layoutRemeras = document.getElementById("layout-remeras"),
    layoutZapatillas = document.getElementById("layout-zapatillas"),
]




//function verCamisas(){
//    productos.forEach((camisa) => {
//        if (camisa.prenda == "camisa") {
//            let contenido = document.createElement("div")
//            contenido.innerHTML = `
//            <div class="tarjeta ${camisa.tarjeta}" style="--i:url(${camisa.img})">
//                <div class="contenido">
//                    <a>$${camisa.precio}</a>
//                    <a href="#">AGREGAR AL CARRITO</a>
//                </div>
//            </div>
//            `
//            
//        }
//    });
//}
//
//verCamisas()

function verProducto(){
    productos.forEach((producto) => {
        let str = producto.prenda
        let str2 = str.charAt(0).toUpperCase() + str.slice(1);
        let strFinal = "layout" + str2
        let contenido = `
        <div class="tarjeta ${producto.tarjeta}" style="--i:url(${producto.img})">
                <div class="contenido">
                    <a>$${producto.precio}</a>
                    <a href="#">AGREGAR AL CARRITO</a>
                </div>
            </div>
        `
        strFinal.appendChild(layout+strFinal)
    })
}

verProducto()
