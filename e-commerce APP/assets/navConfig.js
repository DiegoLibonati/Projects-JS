const openNav = document.querySelector(".nav_container_header i");
const navContainerList = document.querySelector(".nav_container_list");
const navContainerListItemsDiv = document.querySelectorAll(".nav_container_list_item_div");
const navContainer = document.querySelector(".nav_container");


const openNavbar = () => {

    navContainerList.classList.toggle("openNav");

    if (navContainerList.classList.contains("openNav")){
        navContainer.style.boxShadow = "0px 0px 0px 0px rgb(0, 0, 0)"
    } else {
        navContainer.style.boxShadow = "0px 4px 8px -8px rgb(0, 0, 0)"
    }
};

openNav.addEventListener("click", openNavbar);

const openSubMenu = (e) => {

    const navSubMenu = e.currentTarget.parentElement.children[1];
    let chevronConfig = e.currentTarget.children[1];

    if (navSubMenu.classList.contains("openSubMenu")){

        if (mediaQuery1024Px.matches){
            navSubMenu.classList.remove("openSubMenu");
            setTimeout(()=> {
                navContainer.style.boxShadow = "0px 4px 8px -8px rgb(0, 0, 0)"
            },100);
        } else {
            navSubMenu.classList.remove("openSubMenu");
            chevronConfig.setAttribute("class", "fa-solid fa-chevron-down downArrow");
        }

    } else {

        if (mediaQuery1024Px.matches){
            navSubMenu.classList.add("openSubMenu");
            navContainer.style.boxShadow = "0px 0px 0px 0px rgb(0, 0, 0)"
        } else {
            navSubMenu.classList.add("openSubMenu");
            chevronConfig.setAttribute("class", "fa-solid fa-chevron-up upArrow");
        }

    }

};

navContainerListItemsDiv.forEach(function(listItem){

    listItem.addEventListener("click", openSubMenu);

});