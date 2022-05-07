const btnAddNote = document.querySelector(".header_container");
const cardsContainer = document.querySelector(".section_container");

loadCardsInLocalStorage();

btnAddNote.addEventListener("click", ()=>{

    let i = setIdCards();

        cardsContainer.innerHTML += `
    
        <div class="card" id="card-${i}">
            <div class="card_header">
                <button type="button" class="btnEdit"><i class="fa-solid fa-pen-to-square"></i></button>
                <button type="button" class="btnDelete"><i class="fa-solid fa-trash"></i></button>
            </div>

            <div class="card_container">
                <textarea rows="5" cols="2" disabled>Ingrese texto</textarea>
            </div>
        </div>
    
    `;
    

    editCard();

});


function editCard(){

    const btnsEdit = document.querySelectorAll(".btnEdit");

    btnsEdit.forEach(function(btnEdit){

        btnEdit.addEventListener("click", ()=>{

            let cardTextArea = btnEdit.parentElement.parentElement.children[1].children[0];
            cardTextArea.disabled = false;

            let cardContainerBtns = btnEdit.parentElement.parentElement.children[0];
            cardContainerBtns.innerHTML +=  `<button type="button" class="btnFinishEdit">✓</button>`;

            const btnFinishEdit = document.querySelector(".btnFinishEdit");

            btnFinishEdit.addEventListener("click", ()=>{

                cardContainerBtns.children[2].remove();
                cardTextArea.innerHTML = cardTextArea.value;
                cardTextArea.disabled = true;

                editCard();

            });
        });

    });

}

function addCardToLocalStorage(id, text){

    let cardsStorage = getLocalStorage();

    const card = {id: id, text:  text};

    cardsStorage.push(card);

    localStorage.setItem("list", JSON.stringify(cardsStorage));

}

function getLocalStorage(){
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}

function setIdCards(){

    let cardsStorage = getLocalStorage();

        if (cardsStorage == null){
            let contador = 0;
            contador++
            addCardToLocalStorage(contador, "Ingrese texto");
            return contador;
        } else {
            let contador = cardsStorage.length;
            contador++
            addCardToLocalStorage(contador, "Ingrese texto");
            return contador;
        }

}

function loadCardsInLocalStorage(){

    let cardsStorage = getLocalStorage();

    for (let i = 0; i < cardsStorage.length; i++){
        cardsContainer.innerHTML += `
    
        <div class="card" id="card-${i}">
            <div class="card_header">
                <button type="button" class="btnEdit"><i class="fa-solid fa-pen-to-square"></i></button>
                <button type="button" class="btnDelete"><i class="fa-solid fa-trash"></i></button>
            </div>

            <div class="card_container">
                <textarea rows="5" cols="2" disabled>${cardsStorage[i].text}</textarea>
            </div>
        </div>
    
    `;

    }

    editCard();
}