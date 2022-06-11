const fragmentHtml = document.createDocumentFragment();
const mainContainer = document.querySelector(".main_container");
const adressContainer = document.querySelector(".adress_container_article h3");
const loadPage = document.querySelector(".loadPage");

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
