const sectionCenter = document.querySelector(".section_container_article");
const btnAll = document.getElementById("all");
const btnBreakfast = document.getElementById("breakfast");
const btnLunch = document.getElementById("lunch");
const btnShakes = document.getElementById("shakes");

class Comida{
    constructor(nombre, precio, descripcion, img){
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.img = img;
    }

    insertarInfo(){
     return `<article class="section_container_article-item">
                
        <div class="item-imagen">
        <img src="${this.img}" alt="${this.nombre}">
        </div>

        <div class="section_container_article-informacion">
            <div class="item-informacion">
            <h3>${this.nombre}</h3>
            <h3>${this.precio}</h3>
            </div>

            <div class="item-descripcion">
                <p>${this.descripcion}</p>
            </div>
        </div>

    </article>`
    }
}

const breakfastUno = new Comida("bf", "$15", "asdasdasdasdasdasdasdasdasdasd", "https://media.istockphoto.com/photos/breakfast-with-bacon-eggs-pancakes-and-toast-picture-id533645537?k=20&m=533645537&s=612x612&w=0&h=KJXCpAo9XQvMI_djcnRMSsz_Y7OGS6z3-8VThxWyR0Q=");
const breakfastDos = new Comida("bf2", "$30", "asdasdasdasdasdasdasdasdasdasd", "https://media.istockphoto.com/photos/breakfast-with-bacon-eggs-pancakes-and-toast-picture-id533645537?k=20&m=533645537&s=612x612&w=0&h=KJXCpAo9XQvMI_djcnRMSsz_Y7OGS6z3-8VThxWyR0Q=");
const breakfastTres = new Comida("bf3", "$30", "asdasdasdasdasdasdasdasdasdasd", "https://media.istockphoto.com/photos/breakfast-with-bacon-eggs-pancakes-and-toast-picture-id533645537?k=20&m=533645537&s=612x612&w=0&h=KJXCpAo9XQvMI_djcnRMSsz_Y7OGS6z3-8VThxWyR0Q=");
const breakfastCuatro = new Comida("bf4", "$30", "asdasdasdasdasdasdasdasdasdasd", "https://media.istockphoto.com/photos/breakfast-with-bacon-eggs-pancakes-and-toast-picture-id533645537?k=20&m=533645537&s=612x612&w=0&h=KJXCpAo9XQvMI_djcnRMSsz_Y7OGS6z3-8VThxWyR0Q=");

breakfastDesayunos = [breakfastUno, breakfastDos,breakfastTres,breakfastCuatro];

const lunchUno = new Comida("lunch", "$15", "asdasdasdasdasdasdasdasdasdasd", "https://media.istockphoto.com/photos/breakfast-with-bacon-eggs-pancakes-and-toast-picture-id533645537?k=20&m=533645537&s=612x612&w=0&h=KJXCpAo9XQvMI_djcnRMSsz_Y7OGS6z3-8VThxWyR0Q=");
const lunchDos = new Comida("lunch2", "$15", "asdasdasdasdasdasdasdasdasdasd", "https://media.istockphoto.com/photos/breakfast-with-bacon-eggs-pancakes-and-toast-picture-id533645537?k=20&m=533645537&s=612x612&w=0&h=KJXCpAo9XQvMI_djcnRMSsz_Y7OGS6z3-8VThxWyR0Q=");

lunchDesayunos = [lunchUno, lunchDos];

const shakesUno = new Comida("Bakctipsew32", "$15", "asdasdasdasdasdasdasdasdasdasd", "https://media.istockphoto.com/photos/breakfast-with-bacon-eggs-pancakes-and-toast-picture-id533645537?k=20&m=533645537&s=612x612&w=0&h=KJXCpAo9XQvMI_djcnRMSsz_Y7OGS6z3-8VThxWyR0Q=");
const shakesDos = new Comida("shakes2", "$15", "asdasdasdasdasdasdasdasdasdasd", "https://media.istockphoto.com/photos/breakfast-with-bacon-eggs-pancakes-and-toast-picture-id533645537?k=20&m=533645537&s=612x612&w=0&h=KJXCpAo9XQvMI_djcnRMSsz_Y7OGS6z3-8VThxWyR0Q=");

shakesDesayunos = [shakesUno, shakesDos];

let desayunos = [breakfastUno,breakfastDos,breakfastTres,breakfastCuatro, lunchUno,lunchDos, shakesUno, shakesDos];

window.addEventListener("DOMContentLoaded", ()=>{

let displayMenu = desayunos.map(function(item){
    return item.insertarInfo();
});

    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;

    btnAll.addEventListener("click", ()=>{
        sectionCenter.innerHTML = displayMenu;
    });

    btnBreakfast.addEventListener("click", ()=>{
        let displayMenuBreakfast = breakfastDesayunos.map(function(bf){

            return bf.insertarInfo();
        });
        displayMenuBreakfast = displayMenuBreakfast.join("");
        sectionCenter.innerHTML = displayMenuBreakfast;
    });

    btnLunch.addEventListener("click", ()=>{
        let displayMenuLunch = lunchDesayunos.map(function(lunch){

            return lunch.insertarInfo();
        });
        displayMenuLunch = displayMenuLunch.join("");
        sectionCenter.innerHTML = displayMenuLunch;
    });

    btnShakes.addEventListener("click", ()=>{
        let displayMenuShakes = shakesDesayunos.map(function(shakes){

            return shakes.insertarInfo();
        });
        displayMenuShakes = displayMenuShakes.join("");
        sectionCenter.innerHTML = displayMenuShakes;
    });
});

