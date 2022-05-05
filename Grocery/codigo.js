const btnSubmit = document.querySelector(".div_input_dos button");
const input = document.querySelector(".div_input_dos input");
const newText = document.querySelector(".div_text");
const textSubmit = document.querySelector(".div_input_dos");
const textEdit = document.querySelector(".div_input_editar");
const btnEdit = document.querySelector(".div_input_editar button");
const inputEdit = document.querySelector(".div_input_editar input");
const clearAllBtn = document.getElementById("clearAllBtn");
const advertInfoAdd = document.getElementById("add");
const advertInfoEdit = document.getElementById("edit");
const advertInfoRemove = document.getElementById("remove");



let lista = [];

btnSubmit.addEventListener("click", (e)=>{
    e.preventDefault();

    lista.push(input.value);

    newText.innerHTML += mostrarLista();

    advertInfoAdd.style.display = "block";
    advertInfoRemove.style.display = "none";
    advertInfoEdit.style.display ="none";
});



btnSubmit.addEventListener("click", ()=>{

const borrarBtns = document.querySelectorAll(".borrar");
const editarBtns = document.querySelectorAll(".editar");

    borrarBtns.forEach(function(btn){
        
        btn.addEventListener("click",(e)=>{
            
            e.preventDefault();
            let currentIDElement = e.target.dataset.id;



            borrarElemento(currentIDElement);

            advertInfoAdd.style.display = "none";
            advertInfoRemove.style.display = "block";
            advertInfoEdit.style.display ="none";


            
        });
    });

    editarBtns.forEach(function(btnE){
        btnE.addEventListener("click", (e)=>{
            e.preventDefault();

            inputEdit.value = e.target.dataset.id; 

            textSubmit.classList.add("noshow");
            textEdit.classList.add("show")

            encontrarElemento(inputEdit.value);

            advertInfoAdd.style.display = "none";
            advertInfoRemove.style.display = "none";
            advertInfoEdit.style.display ="block";
        
        });
    });

});

btnEdit.addEventListener("click", (e)=>{
    
e.preventDefault();
textSubmit.classList.remove("noshow");

textEdit.classList.remove("show");

});


function mostrarLista(){

        return `<div>
        <p class="s${input.value}"> ${input.value} </p>
        <button data-id="${input.value}" class="boton borrar">Borrar</button>
        <button data-id="${input.value}" class="boton editar">Editar</button>
        </div>`

}

function mostrarNuevaListaBorrar(){
    return ``
}

function borrarElemento(a){

    for (item of lista){
        if (item == a){
            let nuevaLista = lista.filter((item) => item !== a); 
            lista = nuevaLista;
            console.log(lista)

            const newTextElement =  document.querySelector(`.s${item}`).parentNode;

            newTextElement.innerHTML = mostrarNuevaListaBorrar();
        }
    }

}

function mostrarNuevaListaEdit(newValue){

    return `<p class="s${newValue}"> ${newValue} </p>
    <button data-id="${newValue}" class="boton borrar">Borrar</button>
    <button data-id="${newValue}" class="boton editar">Editar</button>`;

}

function encontrarElemento(a){
    const indice = lista.indexOf(a);

    btnEdit.addEventListener("click", (e)=>{

        for (item of lista){
            if (item == a){
                e.preventDefault();

                lista[indice] = `${inputEdit.value}`;
        
                let newValue = inputEdit.value;
        
              
        
                console.log(lista);

                const newTextP =  document.querySelector(`.s${item}`).parentNode;

                newTextP.innerHTML = mostrarNuevaListaEdit(newValue);

            }
        }
    
    });

}

clearAllBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    deleteProcess();
});

function allDataDelete(){
    return ``
}

function deleteProcess(){
    const clearText = document.querySelector(".div_text");

    clearText.innerHTML = allDataDelete();

    lista=[];
    console.log(lista)
}