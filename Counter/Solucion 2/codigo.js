

const btns = document.querySelectorAll(".btn");
const numberCounter = document.getElementById("number_counter");

let count = 0;

btns.forEach(function (btn){
    btn.addEventListener("click", function (e){
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")){
            count--;
        } else if (styles.contains("increase")){
            count++;
        } else {
            count = 0;
        }

        if (count > 0) {
            numberCounter.style.color = "green";
        }
        if (count <0){
            numberCounter.style.color = "red";
        }
        if (count == 0){
            numberCounter.style.color = "black";
        }
        numberCounter.textContent = count;
    });
});