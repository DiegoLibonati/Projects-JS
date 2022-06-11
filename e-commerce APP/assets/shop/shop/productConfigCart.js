const cartIconMobile = document.querySelector(".cartMobile");
const fragmentHtml = document.createDocumentFragment();
const articleContainerProducts = document.querySelector(".cart_container_product");
const btnPurchase = document.querySelector(".cart_container_base button");
const loadPage = document.querySelector(".loadPage");

let totalMoney = 0;

function getLocalStorage(){
    return localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[];
}


const setProductsInCar = () => {

    const products = getLocalStorage();

    for (let i = 0; i < products.length; i++){

        fragmentHtml.append(productsTemplate(products[i].image, products[i].title, products[i].price));
        totalMoney += parseInt(products[i].price);
    }

    document.querySelector(".cart_container_base h3").textContent = `Total: $${totalMoney}`;
    articleContainerProducts.appendChild(fragmentHtml);

}

const productsTemplate = (img, title, price) => {

    const div = document.createElement("div");

    div.innerHTML = `<img src="${img}" alt="${title}">

                    <div class="cart_container_product_information">
                        <h3>${title}</h3>
                        <p>$${price}</p>
                    </div>`;


    div.setAttribute("class", "product-container");

    return div;

}

btnPurchase.addEventListener("click", ()=> {

    alert("Thanks for your purchase!");

    localStorage.clear();

});

window.onload = () => {

    setProductsInCar();

    loadPage.style.opacity = "0";

    setTimeout(() => {
        loadPage.style.display = "none";
    }, 1000);

    document.body.style.overflow = "initial";

};