const scrollLinks = document.querySelectorAll(".scrollLink");
const sections = document.querySelectorAll(".section");

const navHeight = 70;

scrollLinks.forEach(function(scrollLink){

    scrollLink.addEventListener("click", (e) => {

        e.preventDefault()

        const id = e.currentTarget.href.split("#").pop();

        if (mediaQuery1024Px.matches){
            navContainerListItemsSections.forEach(function(navContainerListItemsSection){
                navContainerListItemsSection.classList.remove("openSubMenu");
                navContainerListItemsSection.parentElement.children[0].children[1].setAttribute("class", "fa-solid fa-chevron-down downArrow");
            });
        } else {
            navContainerList.classList.remove("openNav");
        }
        
        sections.forEach(function(section){

            if (section.id == id){
                
                let scrollToSize = section.offsetTop - navHeight;

                window.scrollTo({
                    left: 0, top: scrollToSize,
                });
            }

        })

    });

});