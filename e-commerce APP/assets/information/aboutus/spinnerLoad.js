const loadPage = document.querySelector(".loadPage");

window.onload = () => {

    loadPage.style.opacity = "0";

    setTimeout(() => {
        loadPage.style.display = "none";
    }, 1000);

    document.body.style.overflow = "initial";

};