const btnOpenFilter = document.querySelector(".filter_container_article h3");
const filterContainerList = document.querySelector(".filter_container_article_list");

const btnSortBy = document.querySelector(".grid_header_container_header_list h3");
const sortByContainerMenu = document.querySelector(".grid_header_container_header_sortMenu");

const openFilter = () => {

    if (filterContainerList.classList.contains("showFilter")){
        filterContainerList.classList.remove("showFilter");
        
        setTimeout(() => {
            filterContainerList.style.display = "none";
        }, 1100);

    } else {
        filterContainerList.style.display = "flex";

        setTimeout(() => {
            filterContainerList.classList.add("showFilter");
        }, 250);

    }
}

btnOpenFilter.addEventListener("click", openFilter);

const openSortByMenu = () => {

    sortByContainerMenu.classList.toggle("showSortMenu");

}

btnSortBy.addEventListener("click", openSortByMenu);