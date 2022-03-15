const reviews = [
    {
        id:1,
        name: "susan smith",
        job: "web developer",
        img: "link / png",
        text: "lorem"
},
{
    id:2,
    name: "carlin calvo",
    job: "web ",
    img: "link / png",
    text: "lorem x2"
}
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

// initial item

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
});

function showPerson(person){
    const item = reviews[person];
    img.src = item.img // reviews[currentItem].img
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function(){
    currentItem++;
    if (currentItem > (reviews.length - 1)){
        currentItem = 0;
}
    showPerson(currentItem);
})


prevBtn.addEventListener("click", function(){
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});