const optionA = document.getElementById("labelA");
const optionB = document.getElementById("labelB");
const optionC = document.getElementById("labelC");
const optionD = document.getElementById("labelD");

const quizAsk = document.querySelector(".section_container_quiz_up h2");
const btnSubmit = document.querySelector(".section_container_quiz_down button");
const quizUP = document.querySelector(".section_container_quiz_up");
const quizDOWN = document.querySelector(".section_container_quiz_down")

const optionsAble = document.querySelectorAll(".option");

let checkSelection = [];
let score = 0;
let currentQuiz = 0;


const dataQuiz = [
    {
        "ask": "¿Cuantos años tiene Diego?",
        "oA": "20",
        "oB": "23",
        "oC": "21",
        "oD": "15",
        "correct": "b",
    },

    {
        "ask": "¿Como se llama la Mascota de Diego?",
        "oA": "Otto",
        "oB": "Rudolf",
        "oC": "Caquita",
        "oD": "UwU",
        "correct": "a",
    }, 

    {
        "ask": "¿Donde estudia Diego?",
        "oA": "Unlam",
        "oB": "UBA",
        "oC": "UTN",
        "oD": "UNSAM",
        "correct": "a",
    }, 

    {
        "ask": "¿Como es el Apellido de Diego?",
        "oA": "Riqui",
        "oB": "Putof",
        "oC": "Frak",
        "oD": "Libonati",
        "correct": "d",
    }, 

    {
        "ask": "¿La frase de Diego termina con: Vive y deja... ?",
        "oA": "Cagar",
        "oB": "Vivir",
        "oC": "Soñar",
        "oD": "Roncar",
        "correct": "b",
    }
]


btnSubmit.addEventListener("click", (e)=>{
    e.preventDefault();

    let options = document.getElementsByName("opcion");
    for(let i=0;i<options.length;i++){
        options[i].checked = false;
    }


    if (currentQuiz === dataQuiz.length - 1){
        checkIfTrueOrFalse();
        quizUP.textContent = `QUIZ TERMINADA, TU RESULTADO FUE: ${score}/5`;
        quizDOWN.innerHTML = `<button type="button" class="resetBtn">RESET</button>`

        document.querySelector(".resetBtn").addEventListener("click", ()=>{
            location.reload();
        });
    } else {
        checkIfTrueOrFalse();
        checkSelection = [];
        currentQuiz++
        loadQuiz();
    }

});


optionsAble.forEach(function(option){
    option.addEventListener("click", ()=>{
        
        if (checkSelection.length >= 1){
            checkSelection = [];
            checkSelection.push(option.id);
        } else {
            checkSelection.push(option.id);
        }

    });
});

loadQuiz();

function loadQuiz(){

    quizAsk.textContent = dataQuiz[currentQuiz].ask; 

    optionA.textContent = dataQuiz[currentQuiz].oA; 
    optionB.textContent = dataQuiz[currentQuiz].oB; 
    optionC.textContent = dataQuiz[currentQuiz].oC; 
    optionD.textContent = dataQuiz[currentQuiz].oD; 


}

function checkIfTrueOrFalse(){
    if (checkSelection[0] == dataQuiz[currentQuiz].correct){
        score++
    } else{
        console.log(score);
    }
}