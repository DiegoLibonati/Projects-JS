const openSideBar = document.querySelector(".header_container_logo button");
const closeSideBar = document.querySelector(".sidebar_container_logo button");

const sidebarContainer = document.querySelector(".sidebar_container");

openSideBar.addEventListener("click", ()=>{

    sidebarContainer.classList.add("show-sidebar");

});


closeSideBar.addEventListener("click", ()=>{

    sidebarContainer.classList.remove("show-sidebar");

});
