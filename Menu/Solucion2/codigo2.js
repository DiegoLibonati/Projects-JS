// SIN ARTICLE EN HTML dejamos solo el section-center. Porque lo agregamos los article desde aca. De la siguiente forma:

const menu = [
    {
        id: 1,
        category: "breakfast",
        title:"buttermilk panckaes",
        price: 15.99,
        img: "image",
        desc: "descripcion",
    },{
    id: 2,
    category: "breakfast",
    title:"buttermilk ",
    price: 152.99,
    img: "image",
    desc: "descripcion",
    },{
        id: 3,
        title:"buttelk ",
        category: "lunch",
        price: 1522.99,
        img: "image",
        desc: "descripcion",
        }
];

const sectionCenter = document.querySelector(".section-center");

const container = document.querySelector(".btn-container");



// load items
window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu);

    displayMenuButtons();

});



function displayMenuItems(menuItems){

    let displayMenu = menuItems.map(function(item){


        return `<article class="menu-item">
        <img src="${item.img}" class="photo" alt="${item.title}">
        
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </header>

            <p class="item-text">${item.desc}</p>
        </div>

    </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML=displayMenu;
}

function displayMenuButtons(){
    
    // get online unique categories

    const categories = menu.reduce(function(values, item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values // Siempre retornar values en reduce
    },["all"]); // Array
    const categoryBtns = categories.map(function(category){
        return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
    }).join("");
    container.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".filter-btn");

    // filter items
filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const category = e.currentTarget.dataset.id; // data funciona como categorias en html. Y con dataset obtenemos lo que se guarada en data del html
        const menuCategory = menu.filter(function(menuItems){
            if (menuItems.category === category){
                return menuItems
            }
        })
        if (category === "all"){
            displayMenuItems(menu);
        } else{
            displayMenuItems(menuCategory);
        }
    });
});
}