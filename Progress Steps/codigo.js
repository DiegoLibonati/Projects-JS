const btns = document.querySelectorAll(".article_progress_steps_btns button");
const progressWidth = document.querySelector(".progress");
const circles = document.querySelectorAll(".circle");

// Diego del Futuro: En esta variable declaramos el inicio del width del progress bar.
let actualWidth = 0;

// Diego del Futuro: En esta variable declaramos el index inicial de los Circulos.
let currentActive = 1;

// Diego del Futuro: En esta funcion obtenemos el boton que se clickeo a traves de su ID. Si es Next incrementara el width, cambiando el progreso de la barra y aumentara el index >
// de los circulos para saber cual activar.
// Por ende al final de esta funcion se ejecuta la funcion que checkea el width actual y el index actual
const progressFunction = (e) => {

    const whatWasTheButtonClicked = e.currentTarget.id;

    if (whatWasTheButtonClicked === "nextBtn"){
        actualWidth += 33.3;
        progressWidth.style.width = `${actualWidth}%`;
        currentActive++
    } else {
        actualWidth -= 33.3;
        progressWidth.style.width = `${actualWidth}%`;
        currentActive--
    }

    checkProgressWidth(actualWidth, currentActive);
}

// Diego del Futuro: En esta funcion a medida que se incrementa el width, vamos a modificar los botones. Si es menor a 33 se desactivara el prev en caso contrario se activa >
// En caso que se hable del boton next, al llegar a tanto width se desactivara y si es menor a eso se volvera a activar.
const checkProgressWidth = (width, currentCircleActive) => {

    if (width <= 33){

        document.getElementById("prevBtn").disabled = true;

    } else if (width >= 33 && width <= 99){

        document.getElementById("prevBtn").disabled = false;
        document.getElementById("nextBtn").disabled = false;

    } else if (width >= 99){

        document.getElementById("nextBtn").disabled = true

    }

    // Diego del Futuro: Aca se comprueba si el index del circulo actual es menor al circulo que ya tiene el active.
    circles.forEach(function(circle, index){
        if (index < currentCircleActive){
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    })

}

// Diego del Futuro: Aca se obtienen los botones y se aplica una funcion cada vez que se presionan.
btns.forEach(function(btn){

    btn.addEventListener("click", progressFunction);

})