/**
 * 
 * 
    Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall'altro
    es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

 * 
 */

const firstArray = [1,2,3,4,5,6,7,8,9,10];
const secondArray =['a','b','c','d','e','f','g','h','i','j'];


const newArray = [];

for(let i = 0; i < firstArray.length ; i++){
    newArray.push(firstArray[i]);
    newArray.push(secondArray[i]);
}

console.log(newArray);


function arrayCoupler (firstArray, secondArray){
    const minimumLenght = Math.min(firstArray.length , secondArray.length);
    const coupledArray = [];
    for(let i = 0; i < minimumLenght; i++){
        coupledArray.push(firstArray[i], secondArray[i]);
    }
    return coupledArray;
}

console.table(arrayCoupler(firstArray, secondArray));