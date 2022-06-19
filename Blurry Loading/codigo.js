const img = document.querySelector(".blur_container_article img");
const h2 = document.querySelector(".blur_container_article h2");

let porcentaje = 100;
let count = 10;

const loadPage = () => {

    porcentaje--
    
    if (porcentaje === 0 ||
        porcentaje === 10 ||
        porcentaje === 20 ||
        porcentaje === 30 ||
        porcentaje === 40 ||
        porcentaje === 50 ||
        porcentaje === 60 ||
        porcentaje === 70 ||
        porcentaje === 80 ||
        porcentaje === 90 ){
            count--
    }

    img.style.filter = `blur(${count}px)`;
    h2.style.opacity = `${count}`;
    checkIfPorcentajeIsZero(porcentaje);

}

const checkIfPorcentajeIsZero = (porcentaje) =>{

    if (porcentaje <= 0){
        h2.textContent = `0%`;
        clearInterval(blurInterval);
    } else {
        h2.textContent = `${porcentaje}%`;
    }

}

window.addEventListener("load", loadPage);

const blurInterval = setInterval(loadPage, 50);