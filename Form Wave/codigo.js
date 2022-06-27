const labels = document.querySelectorAll(".section_container_article_form_box label")

labels.forEach(function(label){

    label.innerHTML = label.innerText.split("").map((letter, index) => `<span style="transition-delay:${index * 100}ms">${letter}</span>`).join("");

});