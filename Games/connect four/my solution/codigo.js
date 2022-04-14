const columns = document.querySelectorAll(".column");

columns.forEach(function(column){

    column.addEventListener("click", (e)=>{

        console.log(e.target.children)
        console.log(e.currentTarget.id)

    });
});