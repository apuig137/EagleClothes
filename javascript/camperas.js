let camperas = [
    {id:10, prenda: "campera", precio: 14500, img: "https://http2.mlstatic.com/D_NQ_NP_821790-MLA45212422597_032021-O.webp", tarjeta: "tarjeta1"},
    {id:11, prenda: "campera", precio: 14500, img: "https://http2.mlstatic.com/D_NQ_NP_785179-MLA49741175272_042022-W.webp", tarjeta: "tarjeta2"},
    {id:12, prenda: "campera", precio: 14000, img: "https://http2.mlstatic.com/D_NQ_NP_771779-MLA49044633353_022022-W.webp", tarjeta: "tarjeta3"},
    {id:13, prenda: "campera", precio: 14000, img: "https://http2.mlstatic.com/D_NQ_NP_982977-MLA49946607917_052022-W.webp", tarjeta: "tarjeta4"},
    {id:14, prenda: "campera", precio: 13500, img: "https://http2.mlstatic.com/D_NQ_NP_613565-MLA50158884131_062022-W.webp", tarjeta: "tarjeta5"},
    {id:15, prenda: "campera", precio: 13500, img: "https://http2.mlstatic.com/D_NQ_NP_720103-MLA49946621775_052022-W.webp", tarjeta: "tarjeta6"},
    {id:16, prenda: "campera", precio: 13000, img: "https://http2.mlstatic.com/D_NQ_NP_874095-MLA52348786698_112022-W.webp", tarjeta: "tarjeta7"},
    {id:17, prenda: "campera", precio: 13000, img: "https://http2.mlstatic.com/D_NQ_NP_969258-MLA51916812730_102022-W.webp", tarjeta: "tarjeta8"},
    {id:18, prenda: "campera", precio: 12500, img: "https://http2.mlstatic.com/D_NQ_NP_699562-MLA49828935010_052022-W.webp", tarjeta: "tarjeta9"},
]

let layoutCamperas = document.getElementById("layout-camperas")

function verCamperas(){
    camperas.forEach((campera) => {
        let acc=1
        let contenido = document.createElement("div")
        contenido.innerHTML = `
        <div class="tarjeta ${campera.tarjeta}" style="--i:url(${campera.img})">
            <div class="contenido">
                <a>$${campera.precio}</a>
                <a href="#">AGREGAR AL CARRITO</a>
            </div>
        </div>
        `
        layoutCamperas.appendChild(contenido)
        acc++
    });
}

verCamperas()