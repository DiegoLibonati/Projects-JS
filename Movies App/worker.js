importScripts('https://cdn.jsdelivr.net/npm/fuse.js@6.6.2');

let contador = 0;

const searchMovie = () =>{


        addEventListener("message", (e) =>{
            
            for (let i = 1; i < 20; i++){

                let moviesArray = getMoviesApi(i);
                
                    moviesArray.then(arrayMovies =>{
                        
                        const options = {
                            includeScore: true,
                            keys:[`title`],
                        }
                    
                        const fuse = new Fuse(arrayMovies, options);
                
                        const result = fuse.search(e.data);

                        for (let i = 0; i < result.length; i++){
                            if (result[i].item.title.match(e.data)){
                                console.log(result[i].item.title)
                            }
                        }

                        });
                        contador++;
                    };
        });



    }


const getMoviesApi = async (pageNum)=>{

    let peticion = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${pageNum}`);
    let result = await peticion.json();
    let moviesArray = result.results

    return moviesArray

}

searchMovie();