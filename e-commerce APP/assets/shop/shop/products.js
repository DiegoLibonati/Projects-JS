const productsContainer = document.querySelector(".grid_container_article");
const btnProductsPageContainer = document.querySelector(".pagination_container");
const textResults = document.querySelector(".grid_header_container_header p");
const containerFilterList = document.querySelector(".filter_container_article_list");
const loadPage = document.querySelector(".loadPage");

let currentPage = 1;
let howManyElectronics = 0;
let howManyJewellery = 0;
let howManyMan = 0;
let howManyWoman = 0;

const fragmento = document.createDocumentFragment();

const getAllProducts = async () => {

    let petition = await fetch("https://fakestoreapi.com/products");
    let result = await petition.json();

    return result;

}

const createProducts = async () => {

    const allProducts = await getAllProducts();

    for (let i = 0; i < 9; i++){

        fragmento.append(htmlTemplate(allProducts[i].image, allProducts[i].title, allProducts[i].rating.rate, allProducts[i].price));

    }

    productsContainer.appendChild(fragmento);

};

const createBtns = async () => {

    const allProducts = await getAllProducts();

    const howManyButtonsCreate = Math.ceil(allProducts.length / 9);

    fragmento.append(htmlButtons(howManyButtonsCreate));

    btnProductsPageContainer.appendChild(fragmento);

    htmlFilterCategories(allProducts);

    const allButtonsPageProducts = document.querySelectorAll(".pagination_container_pages button");

    allButtonsPageProducts.forEach(function(btn){

        btn.addEventListener("click", btnPageFunction);

    });

    function btnPageFunction(e){

        const pageClicked = parseInt(e.currentTarget.outerText);

        currentPage = pageClicked;

        productsContainer.innerHTML = "";

        if (currentPage === howManyButtonsCreate){

            for (let i = (currentPage * 9) - 9; i < allProducts.length; i++){

                fragmento.append(htmlTemplate(allProducts[i].image, allProducts[i].title, allProducts[i].rating.rate, allProducts[i].price));

            }

            textResults.textContent = `Showing ${(pageClicked * 9) - 9}–${allProducts.length} of ${allProducts.length} results`;

        } else {

            for (let i = (currentPage * 9) - 9; i < currentPage * 9; i++){

                fragmento.append(htmlTemplate(allProducts[i].image, allProducts[i].title, allProducts[i].rating.rate, allProducts[i].price));

            }

            textResults.textContent = `Showing ${(pageClicked * 9) - 9}–${pageClicked * 9} of ${allProducts.length} results`;

        }

        productsContainer.appendChild(fragmento);

    }

}

const htmlTemplate = (image, title, rate, price) => {

    const div = document.createElement("div");

    div.innerHTML = `<div class="grid_container_article_product_img">
                        <img src="${image}" alt="${title}">
                    </div>

                    <div class="grid_container_article_product_description">
                        <h2>${title}</h2>
                        <p>Rating: ${rate}</p>
                        <p>$${price}</p>
                    </div>`;

    div.setAttribute("class", "grid_container_article_product");

    return div;

}

const htmlButtons = (howManyButtonsCreate) => {

    const article = document.createElement("article");

    for (let i = 0; i < howManyButtonsCreate; i++){

        article.innerHTML += `<button type="button">${i + 1}</button>`;

    }

    article.setAttribute("class", "pagination_container_pages");

    return article;
}

const htmlFilterCategories = (allProducts) => {

    for (let i = 0; i < allProducts.length; i++){

        switch (allProducts[i].category){
            case "electronics":
                howManyElectronics++;
                break;
            case "jewelery":
                howManyJewellery++;
                break;
            case "men's clothing":
                howManyMan++;
                break;
            case "women's clothing":
                howManyWoman++;
                break;
        }

    }

    const li = document.createElement("li");

    li.innerHTML = `<h4>Categories</h4>
                    <a href="#" id="electronics" >Electronics(${howManyElectronics})</a>
                    <a href="#" id="jewelery" >Jewellery(${howManyJewellery})</a>
                    <a href="#" id="men's clothing" >Men´s clothes(${howManyMan})</a>
                    <a href="#" id="women's clothing" >Women´s clothes(${howManyWoman})</a>`;

    li.setAttribute("class", "filter_container_article_list_categories");

    fragmento.append(li);

    containerFilterList.appendChild(fragmento);

    const btnsCategories = document.querySelectorAll(".filter_container_article_list_categories a");

    btnsCategories.forEach(function(btnCategory){

        btnCategory.addEventListener("click", filterCategory);

    });

    function filterCategory(e) {

       const categoryId = e.currentTarget.id;

        productsContainer.innerHTML = "";

       for (let i = 0; i < allProducts.length; i++){
            
            if (allProducts[i].category === categoryId){

                fragmento.append(htmlTemplate(allProducts[i].image, allProducts[i].title, allProducts[i].rating.rate, allProducts[i].price));

                textResults.textContent = `Showing ${allProducts[i].category} products`;

            } 

        productsContainer.appendChild(fragmento);

       }
    }

}

window.onload = async () => {

    await createBtns();
    await createProducts();

    loadPage.style.opacity = "0";

    setTimeout(() => {
        loadPage.style.display = "none";
    }, 1000);

    document.body.style.overflow = "initial";

};

