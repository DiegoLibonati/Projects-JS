const articleContainer = document.querySelector(".productsoftheweek_container_article");
const loadPage = document.querySelector(".loadPage");

const getRandomNumber = async () => {

    const allProductsArray = await getAllProducts();

    const randomNumber = Math.floor(Math.random() * allProductsArray.length);

    return randomNumber;

}

const informationOfProducts = async () => {

    const allProductsArray = await getAllProducts();
    const productsOfTheWeekArray = [];
    const ids = [];

    for (let i = 0; i < 3; i++){

        const randomNumber = await getRandomNumber();
        
        if (ids.includes(randomNumber)){
            i = i;
        } else {
            ids.push(randomNumber);
            productsOfTheWeekArray.push(allProductsArray[randomNumber]);
        }

    }

    return productsOfTheWeekArray;

}

const createHtml = async() => {

    const productsOfTheWeekArray = await informationOfProducts();

    for (let i = 0; i < productsOfTheWeekArray.length; i++){

        articleContainer.innerHTML += `   

        <div class="productoftheweek_container">

            <div class="productoftheweek_container_img">
                <img src="${productsOfTheWeekArray[i].image}" alt="${productsOfTheWeekArray[i].title}">
            </div>

            <div class="productoftheweek_container_information">
                <h4>${productsOfTheWeekArray[i].title}</h4>
                <p>$${productsOfTheWeekArray[i].price}</p>
            </div>

        </div>

        `

    }

}

window.onload = async () => {
    let createHtmlInPage = await createHtml();

    loadPage.style.opacity = "0";

    setTimeout(() => {
        loadPage.style.display = "none";
    }, 1000);

    document.body.style.overflow = "initial";

};