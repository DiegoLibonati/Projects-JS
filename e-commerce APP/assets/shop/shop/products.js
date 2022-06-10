const productsContainer = document.querySelector(".grid_container_article");
const btnProductsPageContainer = document.querySelector(".pagination_container_pages");

let currentPage = 1;

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
    console.log(fragmento)
    const allProducts = await getAllProducts();

    const howManyButtonsCreate = Math.ceil(allProducts.length / 9);

    for (let i = 0; i < howManyButtonsCreate; i++){

        btnProductsPageContainer.innerHTML += `<button type="button">${i + 1}</button>`

    }

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

        } else {

            for (let i = (currentPage * 9) - 9; i < currentPage * 9; i++){

                fragmento.append(htmlTemplate(allProducts[i].image, allProducts[i].title, allProducts[i].rating.rate, allProducts[i].price));

            }

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



createBtns();
createProducts();
