const mealRandomImgContainer = document.querySelector(".randommeal_container_general_img img");
const mealRandomTitleContainer = document.querySelector(".randommeal_container_general_fav h2");
const btnRandomMeal = document.querySelector(".randommeal_container_general_img button");
const btnFav = document.querySelector(".randommeal_container_general_fav button");
const btnFavIcon = document.querySelector(".randommeal_container_general_fav button i");

let mealStatus = false;

const getMeals = async ()=>{

    let randomMeal = await axios("https://www.themealdb.com/api/json/v1/1/random.php");

    randomMealData = randomMeal.data.meals[0];

    addMeal(randomMealData)
}

getMeals();

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

    
    addToLocalStorage(randomMealData.idMeal, randomMealData.strMeal);


});

function addToLocalStorage(id, title){
    console.log("added to local storage");

    const mealItem = {id: id, title:title};

    let itemsMeal = getLocalStorage(); 

    if (itemsMeal.length == 0){
        itemsMeal.push(mealItem);
        localStorage.setItem("list", JSON.stringify(itemsMeal));
    } else {
            
        for(i = 0; i < itemsMeal.length; i++){

            if (mealItem.id == itemsMeal[i].id){
                mealStatus = true;
            }
        }

        if (mealStatus == false) {
            itemsMeal.push(mealItem);
            localStorage.setItem("list", JSON.stringify(itemsMeal));
        }

    }

}

function getLocalStorage(){
    return localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[];
}