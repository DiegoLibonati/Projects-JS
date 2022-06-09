const timerContainer = document.querySelector(".comingsoon_container_article_count");

const oneMonth = 30 * 24 * 60 * 60 * 1000 
const oneDay = 24 * 60 * 60 * 1000 // 24 hs * 60 min * 60 s * 1000 -> MS en un DIA.
const oneHour = 60 * 60 * 1000 // MS en una HORA
const oneMinute = 60 * 1000 // Ms en un minuto


const timerConfig = () => {

    const actualDate = new Date();
    const summerDate = new Date("December 21, 2022 00:00:00");
    const differenceTimeOfDates = summerDate - actualDate;

    let getMonths = Math.floor(differenceTimeOfDates / oneMonth);
    let getDays = Math.floor(differenceTimeOfDates / oneDay);
    let getHours = Math.floor ((differenceTimeOfDates % oneDay) / oneHour);
    let getMinutes = Math.floor((differenceTimeOfDates % oneHour) / oneMinute);
    let getSeconds = Math.floor((differenceTimeOfDates % oneMinute) / 1000);

    timerContainer.innerHTML = `
    
        <div class="timer-box">
            <span class="time" id="months">${addZero(getMonths)}</span>
            <span class="text">Months</span>
        </div>

        <div class="timer-box">
            <span class="time" id="days">${addZero(getDays)}</span>
            <span class="text">Days</span>
        </div>

        <div class="timer-box">
            <span class="time" id="hours">${addZero(getHours)}</span>
            <span class="text">Hours</span>
        </div>

        <div class="timer-box">
            <span class="time" id="minutes">${addZero(getMinutes)}</span>
            <span class="text">Minutes</span>
        </div>

        <div class="timer-box">
            <span class="time" id="seconds">${addZero(getSeconds)}</span>
            <span class="text">Seconds</span>
        </div>

    `;

}

const addZero = (a) => {

    if (a < 10){
       return `0${a}`;
    } else {
        return a;
    }

}
timerConfig();
setInterval(timerConfig, 1000);


