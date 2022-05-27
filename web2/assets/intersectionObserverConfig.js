const sectionSkills = document.getElementById("skills");
const sectionAbout = document.getElementById("about");
const sectionPortfolio = document.getElementById("portfolio");

const loadSections = (entrys, observador) =>{

    entrys.forEach(function(entry){

        if (entry.isIntersecting){

            setTimeout(()=>{

                entry.target.classList.add("show-section");

            }, 250);

        }

    });

}

const observer = new IntersectionObserver(loadSections, {

    root: null,
    rootMargin: "0px 0px 0px 10000px",
    thereshold: 1.0,

});

observer.observe(sectionSkills);
observer.observe(sectionAbout);
observer.observe(sectionPortfolio);