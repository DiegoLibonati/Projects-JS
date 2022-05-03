const mealRandomImgContainer = document.querySelector(".randommeal_container_general_img img");
const mealRandomTitleContainer = document.querySelector(".randommeal_container_general_fav h2");
const btnRandomMeal = document.querySelector(".randommeal_container_general_img button");
const btnFav = document.querySelector(".randommeal_container_general_fav button");
const btnFavIcon = document.querySelector(".randommeal_container_general_fav button i");
const historyContainer = document.querySelector(".history_container");
const informationHistoryContainer = document.querySelector(".informationhistory_container"); 

let mealStatus = false;


const getMeals = async ()=>{

    let randomMeal = await axios("https://www.themealdb.com/api/json/v1/1/random.php");

    randomMealData = randomMeal.data.meals[0];

    addMeal(randomMealData)
}

getMeals();
resetFavMeal();

function addMeal (randomMeal){

    mealRandomImgContainer.setAttribute("src", `${randomMeal.strMealThumb}`);
    mealRandomTitleContainer.textContent = `${randomMeal.strMeal}`;

}

btnRandomMeal.addEventListener("click", ()=>{

    btnFavIcon.classList.remove("newfav");
    mealStatus = false;
    getMeals();
});

btnFav.addEventListener("click", ()=>{

    btnFavIcon.classList.toggle("newfav");

    
    addToLocalStorage(randomMealData.idMeal, randomMealData.strMeal, randomMealData.strInstructions, randomMealData.strMealThumb);


});

function addToLocalStorage(id, title, instructions, img){
    console.log("added to local storage");

    const historydivs = document.querySelectorAll(".divhistory");
   
    const mealItem = {id: id, title:title, instructions: instructions, img: img};

    let itemsMeal = getLocalStorage(); 

    if (itemsMeal.length == 0){
        itemsMeal.push(mealItem);
        localStorage.setItem("list", JSON.stringify(itemsMeal));
        addFavMeal(mealItem);

    } else {
            
        for(i = 0; i < itemsMeal.length; i++){

            if (mealItem.id == itemsMeal[i].id){
                mealStatus = true;
            }
        }

        if (mealStatus == false) {
            itemsMeal.push(mealItem);
            localStorage.setItem("list", JSON.stringify(itemsMeal));
            addFavMeal(mealItem);

        } else {
            
            itemsMeal = itemsMeal.filter(function(item){
                if(item.id !== id){
                    return item;
                }
            })

            historydivs.forEach(function(history){
                if (history.id === mealItem.title){
                    history.remove();
                }
            });

            localStorage.setItem("list", JSON.stringify(itemsMeal));

            mealStatus = false;
        }

    }

}

function getLocalStorage(){
    return localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[];
}


function resetFavMeal(){

    let itemsMeal = getLocalStorage(); 

    for (let i = 0; i < itemsMeal.length; i++){
        historyContainer.innerHTML += `
        <div class="divhistory" id="${itemsMeal[i].title}">
            <img src="${itemsMeal[i].img}" alt="${itemsMeal[i].title}">
            <h3>${itemsMeal[i].title}</h3>
        </div>
        `
    }

    const historydivsImgs = document.querySelectorAll(".divhistory img");

    historydivsImgs.forEach(function(img){
        img.addEventListener("click", ()=>{
            for(let i = 0; i < itemsMeal.length; i++){
                if (img.alt === itemsMeal[i].title){

                    informationHistoryContainer.classList.add("open-info");

                    informationHistoryContainer.innerHTML = `
                    
                    <h2>${itemsMeal[i].title}</h2>

                    <img src="${itemsMeal[i].img}" alt="${itemsMeal[i].title}">
        
                    <p>${itemsMeal[i].instructions}</p>
        
                    <button type="button" id="close">CLOSE</button>
        
                    <button type="button" id="desfav">UNFAV</button>
        
                    
                    `;

                    const btnClose = document.getElementById("close");

                    btnClose.addEventListener("click", ()=>{
                        informationHistoryContainer.innerHTML = "";
                        informationHistoryContainer.classList.remove("open-info");
                    });
                }
            }
        });
    });


}

function addFavMeal(mealItem){

    historyContainer.innerHTML += `
    <div class="divhistory" id="${mealItem.title}">
        <img src="${mealItem.img}" alt="${mealItem.title}">
        <h3>${mealItem.title}</h3>
    </div>
    `

    const historydivs = document.querySelectorAll(".divhistory");
    const historydivsImgs = document.querySelectorAll(".divhistory img");

    historydivsImgs.forEach(function(img){
        
        img.addEventListener("click", ()=>{

            img.style.border = "2px solid rgba(255, 77, 0, 0.204)"
            
            informationHistoryContainer.classList.add("open-info");

            informationHistoryContainer.innerHTML = `
            
            <h2>${mealItem.title}</h2>

            <img src="${mealItem.img}" alt="${mealItem.title}">

            <p>${mealItem.instructions}</p>

            <button type="button" id="close">CLOSE</button>

            <button type="button" id="desfav">UNFAV</button>
            
            `;

            const btnClose = document.getElementById("close");
            const btnDesFav = document.getElementById("desfav");

            btnClose.addEventListener("click", ()=>{
                informationHistoryContainer.innerHTML = "";
                informationHistoryContainer.classList.remove("open-info");
            });

            btnDesFav.addEventListener("click", ()=>{

                let itemsMeal = getLocalStorage();

                itemsMeal = itemsMeal.filter(function(item){
                    if(item.id !== mealItem.id){
                        return item;
                    }
                })
    
                historydivs.forEach(function(history){
                    if (history.id === mealItem.title){
                        history.remove();
                    }
                });
    
                localStorage.setItem("list", JSON.stringify(itemsMeal));
    
                mealStatus = false;

                btnFavIcon.classList.remove("newfav");


            });

        });

    });



}


