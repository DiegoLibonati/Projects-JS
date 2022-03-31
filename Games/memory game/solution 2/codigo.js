const cardArray = [
    {
        name: "fries",
        img: ""
    },
    {
        name: "banana",
        img: ""
    },
    {
        name: "manzana",
        img: ""
    }
]


// Sort array
cardArray.sort(() => 0-5 - Math.random());

const gridDisplay = document.querySelector("#grid");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement("img");
        card.setAttribute("src", "?.png");
        card.setAttribute("data-id", i); // Data id y su data ID sera i
        card.addEventListener("click", flipCard());
        gridDisplay.append(card);
    }
}

createBoard();

function checkMatch(){
    const cards = document.querySelectorAll("img");



    if (cardsChosen[0] == cardsChosen[1]){
        cards[cardsChosenIds[0]].setAttribute("src", "match.png")
        cards[cardsChosenIds[1]].setAttribute("src", "match.png")
        cards[cardsChosenIds[0]].removeEventListener("click", flipCard);
        cards[cardsChosenIds[1]].removeEventListener("click", flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[cardsChosenIds[0]].setAttribute("src", "?.png")
        cards[cardsChosenIds[1]].setAttribute("src", "?.png")
    }

    document.querySelector("#result").textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == (cardArray.length/2)){
        document.querySelector("#result").textContent = "Congrats";
    }
}

function flipCard(){
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId);
    this.setAttribute("src", cardArray[cardId].img)

    if (cardsChosen.length === 2){
        setTimeout(checkMatch, 500);
    }
}