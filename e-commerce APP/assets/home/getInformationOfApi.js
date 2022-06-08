const getAllProducts = async() => {

    let petition = await fetch("https://fakestoreapi.com/products");
    let result = await petition.json();

    return result

}

