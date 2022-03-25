// Select items

const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery"); // Input
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option

let editElement;
let editFlag = false;
let editID = "";

// Event listeners

// submit form
form.addEventListener("submit", addItem)

// clear items
clearBtn.addEventListener("click", clearItems)

// load items
window.addEventListener("DOMContentLoaded", setupItems);

// functions

function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString() // Generamos un ID con getTime (Devuelve MS) y lo hacemos String.

    if(value && !editFlag){ // If the value is not empty y edit flag is false
        console.log("add item to the list")
        createListItem(id,value);
       // display alert
       displayAlert("item added to the list", "success")
       // show container
       container.classList.add("show-container");

       // add to local Storage

       addToLocalStorage(id, value);

       // set back to default

       setBackToDefault();

    }else if (value && editFlag) { // If the value is not empty y edit flag is true
        console.log("editing")
        editElement.innerHTML = value;
        displayAlert("value changed", "success");
        setBackToDefault();
        editLocalStorage(editID, value);
    } else{
        console.log("empty value")
        displayAlert("please enter value", "danger");
    }
}

function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // remove alert
    setTimeout(function(){
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    },1000)
}

function setBackToDefault(){ // input to ""
    console.log("set back to default");
    grocery.value = ""; 
    editFlag = false;
    editID = "";

    submitBtn.textContent = "submit";
}

function clearItems(){
    const items = document.querySelectorAll(".grocery-item");

    if (items.length > 0){
        items.forEach(function(item){
            list.removeChild(item)
        });
    }

    container.classList.remove("show-container");

    displayAlert("empty list", "danger");

    localStorage.removeItem("list"); // Remuevo la Key llamada list
    setBackToDefault();
}

function deleteItem(e){
    console.log("item deleted")
    const element = e.currentTarget.parentElement.parentElement; // Para llegar al grosery-item
    const id = element.dataset.id;
    list.removeChild(element);

    if (list.children.length === 0){
        container.classList.remove("show-container");
    }

    displayAlert("item removed", "danger");
    setBackToDefault();

    //remove from local Storage
    removeFromLocalStorage(id);
}

function editItem(e){
    console.log("edit item")
    const element = e.currentTarget.parentElement.parentElement; // Para llegar al grosery-item
    // set Edit item
    editElement = e.currentTarget.parentElement.previousElementSibling; // Para obtener el P con class title
    // set form value. Set input
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit";
}

// local storage
function addToLocalStorage(id, value){
    console.log("added to local storage")
    const grocery = {id: id, value:value};
    console.log(grocery);
    let items = getLocalStorage(); // si no existe list no se puede obtener por ende la vamos a crear como [], sino pasa lo anterior

    console.log(items)

    // AL PRINCIPIO ITEMS VA A SER IGUAL A [] PQ LIST NO EXISTE
    items.push(grocery);

    localStorage.setItem("list", JSON.stringify(items)); // ACA EMPIEZA A EXISTIR. CUANDO SE CREA Y SE AGREGAN ELEMENTOS.
}

function removeFromLocalStorage(id){
    let items = getLocalStorage(); // Obtenemos el array vacio o no.

    items = items.filter(function(item){
        if(item.id !== id){ // Remove el item que sea igual al id que pase y los que no son iguales hace un nuevo array
            return item;
        }
    })
    localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value){
let items = getLocalStorage(); // Obtenemos el array vacio o no

items = items.map(function(item){
    if (item.id === id){
        item.value = value;
    }
    return item; // Si el id no matchea para editar, retorna el item.
});
localStorage.setItem("list", JSON.stringify(items));

}

function getLocalStorage(){
    return localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[];
}

// localStorage API

//setItem

//getItem

// removeItem

// save as string
// localStorage.setItem("list", JSON.stringify(["item", "item2"])); // Using stringfy cuando queremos guardar

// const lists = JSON.parse(localStorage.getItem("list"));// parse cuando queremos obtener los items

//console.log(lists)

//localStorage.removeItem("list");

// setup items
function setupItems(){
    let items = getLocalStorage();

    if(items.length > 0){
        items.forEach(function(item){
            createListItem(item.id, item.value);
        });
        container.classList.add("show-container");
    }
}

function createListItem(id, value){
    const element = document.createElement("article"); // Queremos crear un grocery-item
    // add class
    element.classList.add("grocery-item");
    // add id
    const attr = document.createAttribute("data-id")
    attr.value = id;

    element.setAttributeNode(attr) // adding attribute

    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>
      <button type="button" class="delete-btn"><i class="fas fa-fa-trash"></i></button>
    </div>`;

     const deleteBtn = element.querySelector(".delete-btn");
     const editBtn = element.querySelector(".edit-btn");

     deleteBtn.addEventListener("click", deleteItem);
     editBtn.addEventListener("click", editItem);

    // append child
    // Select Grocery-list
    list.appendChild(element);
}