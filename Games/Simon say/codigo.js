let array = [1,2,5,7];
let array2 = [1,2,5,7];

const arraysEqual = (a, b) => {

    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++){
        if (a[i] !== b[i]) return false
    }

    return true;

}

let resultArray = arraysEqual(array, array2);

console.log(resultArray);