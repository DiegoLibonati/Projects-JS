const hyperLinks = document.querySelectorAll(".hyperlink");
const navContainer = document.querySelector(".nav_container");
const sectionsContainers = document.querySelectorAll(".section");
const btnExploreTours = document.querySelector(".section_home button");

hyperLinks.forEach(function(link){

    link.addEventListener("click", (e)=>{

        e.preventDefault();

        const id = link.getAttribute("href").slice(1);
        const navPosition = navContainer.getBoundingClientRect();

        sectionsContainers.forEach(function(section){
            if (section.id === id){
                
                const sectionPosition = section.offsetTop;

        
                const pos = sectionPosition - navPosition.height;

                console.log(pos)

                window.scrollTo({
                    left: 0, top:pos,
                })
                
            }
        })

    });

});

btnExploreTours.addEventListener("click", ()=>{

    window.scrollTo({
        left: 0, top:2687,
    })

});