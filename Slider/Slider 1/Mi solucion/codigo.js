const imgContainer = document.querySelector(".imgs-center");

const containerBtns = document.querySelectorAll(".button");

class Galeria {
    constructor(img){
        this.img = img;
    }

    mostrarImagenes(){
        return `<img src="${this.img}">`;
    }
}

const imagenUno = new Galeria("https://cdn-3.expansion.mx/dims4/default/e7886b4/2147483647/strip/true/crop/900x506+0+0/resize/1200x675!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F8f%2F08%2Fa72fbe49448a97f323d9bf8940bb%2Fp-p.jpg");
const imagenDos = new Galeria("https://www.viajarmiami.com/img/playas-miami.jpg");
const imagenTres = new Galeria("https://www.ngenespanol.com/wp-content/uploads/2018/08/Playas-espectaculares-en-Per%C3%BA-1280x720.jpg");
const imagenCuatro = new Galeria("https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/03/09/16468231897426.jpg");


let Galery = [imagenUno, imagenDos, imagenTres, imagenCuatro];

let i=0;

imgContainer.innerHTML = Galery[i].mostrarImagenes();

containerBtns.forEach(function(btn){
    btn.addEventListener("click", (e)=>{
        e.preventDefault();
        let valueButton = e.target.value;

        if (valueButton == "Next"){
            nextImg();
            btnF(i);
        } else if (valueButton == "Prev"){
            prevImg()
            btnF(i);
        } else {
            console.log("Error: No existe.")
        }
    });
});



function nextImg(){
    i++
    console.log(i)
    imgContainer.innerHTML = Galery[i].mostrarImagenes();
}

function prevImg(){
    i--
    console.log(i)
    imgContainer.innerHTML = Galery[i].mostrarImagenes();
}

function btnF(cont){
    if (cont >= 1){
        document.getElementById("prevBtn").style.visibility= "initial";
    } else {
        document.getElementById("prevBtn").style.visibility= "hidden";
    }
    if (cont >= (Galery.length - 1)){
        document.getElementById("nextBtn").style.visibility= "hidden";
    } else {
        document.getElementById("nextBtn").style.visibility= "initial";
    }
}