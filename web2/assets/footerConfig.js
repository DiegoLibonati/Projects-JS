const ageOfHtml = document.querySelector(".footer_container h2 span");

const currentDate = new Date();

const currentDateAge = currentDate.getFullYear();

ageOfHtml.textContent = `${currentDateAge}`;