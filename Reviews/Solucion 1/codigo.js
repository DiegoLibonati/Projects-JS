

const nombrePersona = document.getElementById("nombre");
const cargoPersona = document.getElementById("cargo");
const textoPersona = document.getElementById("texto");

const btnNext = document.getElementById("btnnext");
const btnPrev = document.getElementById("btnprev");
const btnRandom = document.getElementById("btnrandom");

class Reviews{
    constructor(imagen, nombre, cargo, texto){
        this.imagen = imagen;
        this.nombre = nombre;
        this.cargo = cargo;
        this.texto = texto;
    }

    changeP(){
        document.getElementById("foto").src=`${this.imagen}`;
    }

    insertar(){
        nombrePersona.innerHTML = this.nombre;
        cargoPersona.innerHTML = this.cargo;
        textoPersona.innerHTML = this.texto;
    }

}

const review1 = new Reviews("https://image.shutterstock.com/image-vector/cross-stitch-lotus-on-black-260nw-566411167.jpg", "Susan Smith", "WEB DEVELOPER", "im baby meggings twee health goth+1")
const review2 = new Reviews("https://www.satvix.com/wp-content/uploads/2016/05/PostgreSQL_logo.3colors.120x120.png", "Carlo Calvin", "BACKEND DEVELOPER", "SKERE XD")
const review3 = new Reviews("https://branding.convertimage.es/herramienta-en-linea-transformar-una-foto-en-pintura-digital.jpg", "Caasdasdasd", "BACKEND DEVELOPER", "SKERE XD")


let reviews = [review1, review2, review3];

let pos = 0;
let i = 0;

reviews[pos].insertar();
reviews[pos].changeP();

function pasarRew(i){
    if (i < (reviews.length -1)){
        i++
        reviews[i].insertar();
        reviews[i].changeP();
        pos = i;
    }else {
        pos = 0;
        reviews[pos].insertar();
        reviews[pos].changeP();
    }
}

function prevRew(i){
    if (i == 0){
        i = reviews.length -1;
        pos = i;
        console.log(pos);
        reviews[pos].insertar();
        reviews[pos].changeP();
    } else {
        i--;
        pos = i;
        reviews[i].insertar();
        reviews[i].changeP();
    }
}



//btnNext.addEventListener("click", function() {pasarRew (pos)});

btnNext.addEventListener("click", ()=>{

    pasarRew(pos);

});

btnPrev.addEventListener("click", ()=>{

    prevRew(pos);

});

btnRandom.addEventListener("click", ()=>{

    i = Math.floor(Math.random() * reviews.length);
    reviews[i].insertar();
    reviews[i].changeP();

});


