const containerOpacity = document.getElementById("opacity");
const containerTranslateX = document.getElementById("translatex");
const containerTranslateXNegative = document.getElementById("translatex-");
const containerScale = document.getElementById("scale");

const loadContent = (entrys, observer) => {

    entrys.forEach(function(entry){

        if (entry.isIntersecting){
            switch(entry.target.id){
                case "opacity":
                    entry.target.style.opacity = 1;
                    break;
                case "translatex":
                    entry.target.style.transform = "translateX(0%)"
                    break
                case "translatex-":
                    entry.target.style.transform = "translateX(0%)"
                    break
                case "scale":
                    entry.target.style.transform = "scale(1.0)"
                    break
            }
        }

    });
    
}

const observer = new IntersectionObserver(loadContent, {

    root: null,
    rootMargin: `0px 0px 0px 0px`,
    thereshold: 1.0

});

observer.observe(containerOpacity);
observer.observe(containerTranslateX);
observer.observe(containerTranslateXNegative);
observer.observe(containerScale);