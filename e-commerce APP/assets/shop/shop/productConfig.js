const fragmentHtml = document.createDocumentFragment();
const mainContainer = document.querySelector(".main_container");
const adressContainer = document.querySelector(".adress_container_article h3");
const loadPage = document.querySelector(".loadPage");
const carShopContainer = document.getElementById("carShop");
const carIcon = document.getElementById("carIcon");

let totalMoney = 0;

const getAllProducts = async () => {

    let petition = await fetch("https://fakestoreapi.com/products");
    let result = await petition.json();

    return result;

}

const getInformationOfLocalStorage = () => {
    
    const product = localStorage.getItem("itemClicked");

    return JSON.parse(product);
}

const getInformationAboutTheProduct = async () => {

    let allProducts = await getAllProducts();

    for (let i = 0; i < allProducts.length; i++){

        if (allProducts[i].title === getInformationOfLocalStorage().title){
            fragmentHtml.append(createHtmlTemplate(allProducts[i].image, allProducts[i].title, allProducts[i].price, allProducts[i].description, allProducts[i].category))
            adressContainer.textContent = `Home / Shop / ${allProducts[i].category} / ${allProducts[i].title}`;
        }

    }

    mainContainer.appendChild(fragmentHtml);
    createCarShopLocalStorageList(document.querySelector(".product_container button"));
}

const createHtmlTemplate = (img, title, price, descripcion, category) => {

    const section = document.createElement("section");

    section.innerHTML = `<article class="product_container_article_img">
                            <img src="${img}" alt="${title}">
                        </article>

                        <article class="product_container_article_information">
                            <div class="product_container_article_information_header">
                                <h3>${title}</h3>
                                <p>☆☆☆☆☆</p>
                                <p>$${price}</p>
                            </div>

                            <p>${descripcion}</p>

                            <button type="button">Add to cart</button>

                            <div class="product_container_article_information_base">
                                <p>SKU: 027</p>
                                <p>Category: ${category}</p>
                            </div>
                        </article>`;

    section.setAttribute("class", "product_container");

    return section;
}

window.onload = async () => {

    await getInformationAboutTheProduct();

    loadPage.style.opacity = "0";

    setTimeout(() => {
        loadPage.style.display = "none";
    }, 1000);

    document.body.style.overflow = "initial";

};

function getLocalStorage(){
    return localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[];
}

const addToCarShop = async (e) => {

    const localStorageProducts = await getLocalStorage();
    const product = await getInformationOfLocalStorage();

    localStorageProducts.push(product);

    localStorage.setItem("list", JSON.stringify(localStorageProducts));

    carShopContainer.innerHTML = `<div class="product-in-car-total">
                                    <h3>Total: $0</h3>
                                    <a href="../../index.html"><button type="button" id="buy">Buy</button></a>
                                </div>`;

    const btnBuy = document.getElementById("buy");

    btnBuy.addEventListener("click", ()=> {

        alert("Thanks for your purchase!");

        localStorage.clear();

    });

    totalMoney = 0;

    setElementsInCarShop();

}

function createCarShopLocalStorageList (btn) {

    btn.addEventListener("click", addToCarShop)

} 

const htmlProductsInCarShop = (img, title, price) => {

    const div = document.createElement("div");

    div.innerHTML = `<div class="product-in-car-img">
                        <img src="${img}" alt="${title}">
                    </div>

                    <div class="product-in-car-information">
                        <h3>${title}</h3>
                        <p>$${price}</p>
                    </div>`;

    div.setAttribute("class", "product-in-car");

    return div;

}

const setElementsInCarShop = async () => {

    const localStorageProducts = await getLocalStorage();

    for (let i = 0; i < localStorageProducts.length; i++){

        fragmentHtml.append(htmlProductsInCarShop(localStorageProducts[i].image, localStorageProducts[i].title, localStorageProducts[i].price))
        totalMoney += parseInt(localStorageProducts[i].price);
    }

    carShopContainer.insertBefore(fragmentHtml, document.querySelector(".product-in-car-total"));

    if (localStorageProducts.length > 0){
        
        carIcon.style.color = `#FF0000`;
        carIcon.textContent = `${localStorageProducts.length}`;
        document.querySelector(".product-in-car-total h3").textContent = `Total: $${totalMoney}`;

    } else {
        document.querySelector(".product-in-car-total h3").textContent = `Total: $0`;
        carIcon.style.color = `#000`;
        carIcon.textContent = ``;
    }
    
}

setElementsInCarShop();

const btnBuy = document.getElementById("buy");

btnBuy.addEventListener("click", ()=> {

    alert("Thanks for your purchase!");

    carShopContainer.innerHTML = `<div class="product-in-car-total">
                                    <h3>Total: $0</h3>
                                    <button type="button">Buy</button>
                                </div>`;

    localStorage.clear();

});