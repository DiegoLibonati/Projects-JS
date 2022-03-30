const btns = document.querySelectorAll(".buttons");
const bgImg = document.querySelectorAll(".imagen");

let isTrue = [];
let value;

btns.forEach(function(btn){
    btn.addEventListener("click", (e)=>{
        e.preventDefault();
    
        value = e.currentTarget.dataset.id;
        bg = e.currentTarget.children[0];

        rImg(bg,1);

        gameFunction(e);

        console.log(isTrue)

    });
});

function gameFunction(e){

    if (isTrue.includes(value)){
        console.log("Esta")
        
        isTrue.push(value);
            document.querySelectorAll(`.${value}`).forEach(function(img){
                 img.disabled = true;
                 img.classList.remove("imagen");
                 img.classList.remove(`${value}`);
            })

        isTrue = [];

    } else{

        console.log("No esta")

        isTrue.push(value);
        if (isTrue.length > 1){
            for (i of isTrue){
                document.querySelectorAll(".imagen", `.${i}`).forEach(function(img){
                        setTimeout(function() {rImg(img, 0);}, 2000);

                })


            }
            isTrue=[];
        }
    }
}

function rImg(img,v){
    img.style.opacity = `${v}`;
}

