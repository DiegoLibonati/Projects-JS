const months =[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2022, 4, 24, 11, 30, 0); // (Año, Mes, Dia, Hora, Min, Segundos) // EL mes es un array del 0 Enero y 11 Diciembre. // La hora va de 00 a 24

// Si quiero que se resete siempre que se refreque la pantalla y muestre 10 dias para que se termine todo.
// let template = new Date();
// let tempYear = tempDate.getFullYear(); / tempMonth = tempDate.getMonth(); / let tempDay = tempDate.getDate();

// New futureDate -> const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// console.log(futureDate) -> Current Date if Date is -> Date();

const year = futureDate.getFullYear(); // Obtenemos el Año de FutureDate
let day = futureDate.getDay();
let month = futureDate.getMonth();
const hour = futureDate.getHours();
const min = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${weekdays[day]}, ${day} ${months[month]} ${year}, ${hour}:${min} am`

// Future time in ms 
const futureTime = futureDate.getTime();
// console.log(futureTime) 

function getRemainingTime(){
const today = new Date().getTime();
// console.log(today);

const t = futureTime - today;

// console.log(t)

// 1s = 1000ms
// 1 m = 60s
// 1 hr = 60 min
// 1d = 24 hs

// Values in ms

const oneDay = 24 * 60 * 60 * 1000 // 24 hs * 60 min * 60 s * 1000 -> MS en un DIA.
const oneHour = 60 * 60 * 1000 // MS en una HORA
const oneMinute = 60 * 1000 // Ms en un minuto

// calculate all values
let days = t / oneDay;
days = Math.floor(days);
let hours = Math.floor ((t % oneDay) / oneHour);
let minutes = Math.floor((t % oneHour) / oneMinute);
let segundos = Math.floor((t % oneMinute) / 1000); // Obtenemos el resto. Con el resto sacamos las horas, minutos y segundos.

// set values array
const values = [days, hours, minutes, segundos];

// Agregar 0 cuando es menor a 10
function format(item){
    if (item < 10){
        return item = `0${item}`
    } 
    return item
}

items.forEach(function(item, index){
    item.innerHTML = format(values[index])
});

if (t < 0) { // Cuando se termina el tiempo
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class=expire>Sorry, this giveaway has expired</h4>`
}

}

//countdown

let countdown = setInterval(getRemainingTime, 1000); // Quiero llamar a esta funcion cada 1 segundo.



getRemainingTime();


