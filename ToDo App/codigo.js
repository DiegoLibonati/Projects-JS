// Obtengo datos
const tasksContainers = document.querySelectorAll(".list");
const tasksBtnsAccept = document.querySelectorAll(".btnAccept");

// Al hacer click, obtengo los valores necesarios para agregarlos al LocalStorage
tasksBtnsAccept.forEach(function(tasksBtnAccept){

    tasksBtnAccept.addEventListener("click", ()=>{

        let tasksInputValue = tasksBtnAccept.parentElement.children[0].value;
        let tasksId = idGenerator(); 
        let tasksCategory = tasksBtnAccept.parentElement.parentElement.id;
        let tasksComplete = false;
        
        addLocalStorageItem(tasksId, tasksCategory, tasksInputValue, tasksComplete);

    });

});

// Se crea el localstorage
const addLocalStorageItem = (id, category, text, complete)=>{

    let arrayLocalStorage = getLocalStorage();
    insertTaskInContainer(id, category, text);

    const task = {id: id,category: category, text: text, complete: complete};

    arrayLocalStorage.push(task);

    localStorage.setItem("list", JSON.stringify(arrayLocalStorage));

}

// Se obtiene el localStorage
const getLocalStorage = ()=>{

    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];

}

// Se genera un ID, en base a la longitud del LocalStorage
const idGenerator = ()=>{

    let arrayLocalStorage = getLocalStorage();

    if (arrayLocalStorage.length === 0){
        let contador = 0;
        contador++
        return contador;
    } else {
        let contador = arrayLocalStorage.length;
        contador++
        return contador;
    }

};

const deleteTaskMobile = ()=>{

    const btnsDeleteTask = document.querySelectorAll(".deleteTask");
    
    let arrayLocalStorage = getLocalStorage();


    btnsDeleteTask.forEach(function(btnDeleteTask){

        btnDeleteTask.addEventListener("click", (e)=>{

            const liContainer = e.currentTarget.parentElement.parentElement;
            const idContainer = e.currentTarget.parentElement.parentElement.id.replace( /^\D+/g, '');

            liContainer.remove();

            for (let i = 0; i < arrayLocalStorage.length; i++){
                if (idContainer == arrayLocalStorage[i].id){
                    const index = arrayLocalStorage.indexOf(arrayLocalStorage[i]);

                    arrayLocalStorage.splice(index, 1);

                    localStorage.setItem("list", JSON.stringify(arrayLocalStorage));

                }

            }

        });
    
    });
    

}

const removeAndLineThroughInDesktop = ()=>{

    const lisContainers = document.querySelectorAll(".li");
    let arrayLocalStorage = getLocalStorage();

    lisContainers.forEach(function(liContainer){

        liContainer.addEventListener("mousedown", (e)=>{

            switch (e.which){
                case 1:
                    const idContainer = e.currentTarget.id.replace( /^\D+/g, '');

                    for (let i = 0; i < arrayLocalStorage.length; i++){

                        if (idContainer == arrayLocalStorage[i].id){
                            
                            if (!liContainer.classList.contains("line")) {
                                liContainer.classList.add("line");
                                arrayLocalStorage[i].complete = true;
                                localStorage.setItem("list", JSON.stringify(arrayLocalStorage));
                            } else {
                                liContainer.classList.remove("line")
                                arrayLocalStorage[i].complete = false;
                                localStorage.setItem("list", JSON.stringify(arrayLocalStorage));
                            }

                        }

                    }

                break;

                case 3:

                break;
            }

        });

    });

}

// Con cada click, se genera un LI en la respectiva categoria
const insertTaskInContainer = (id, category,text)=>{

    tasksContainers.forEach(function(tasksContainer){

        const idContainer = tasksContainer.parentElement.parentElement.id;

        if (category === idContainer){
            tasksContainer.innerHTML += `
            
            <li class="li" id="${category}-${id}">
                <div>
                    <h2>${text}</h2>
                    <button type="button" class="deleteTask"><i class="fa-solid fa-trash"></i></button>
                </div>
            </li>

            `;
        }

    });

}

// lee el LocalStorage, cada vez que se refresca la pagina. En caso de que haya elementos los completa en el DOM, donde corresponde
const loadTasksInLocalStorage = ()=>{

    let arrayLocalStorage = getLocalStorage();

    tasksContainers.forEach(function(tasksContainer){

        const idContainer = tasksContainer.parentElement.parentElement.id;

        for (let i = 0; i < arrayLocalStorage.length; i++){

            if (arrayLocalStorage[i].category === idContainer){

                tasksContainer.innerHTML += `
                
                <li class="li" id="${arrayLocalStorage[i].category}-${arrayLocalStorage[i].id}">
                    <div>
                        <h2>${arrayLocalStorage[i].text}</h2>
                        <button type="button" class="deleteTask"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </li>
    
                `;

                if (arrayLocalStorage[i].complete === true){
                    tasksContainer.children[i].classList.add("line");
                }
            }

        }

    });

    deleteTaskMobile();
    removeAndLineThroughInDesktop();

}


loadTasksInLocalStorage();

