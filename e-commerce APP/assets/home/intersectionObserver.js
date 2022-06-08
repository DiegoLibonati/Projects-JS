const imgOne = document.querySelector(".intersectionOne");
const imgTwo = document.querySelector(".intersectionTwo");
const imgThree = document.querySelector(".intersectionThree");
const imgFour = document.querySelector(".intersectionFour");

const loadImgs = (entrys, observer) => {

    entrys.forEach(function(entry){

        if (entry.isIntersecting){
            entry.target.classList.add("intersectionOpacity");
        }

    });

}

const observer = new IntersectionObserver(loadImgs, {

    root: null,
    rootMargin: `0px 0px 0px 0px`,
    threshold: 1.0

});


observer.observe(imgOne);
observer.observe(imgTwo);
observer.observe(imgThree);
observer.observe(imgFour);