/**
    *  Dato un array, genera randomicamente due numeri:
    *   il primo numero che dovrà essere sempre minore del numero degli elementi dell'array
    *   il secondo numero che dovrà essere sempre minore del primo numero
    *
    * Scrivi una funzione che accetti tre argomenti: l'array e i due numeri nell'ordine scritto prima.
    * La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra il primo numero e il secondo numero
*/

const myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

let firstNum = Math.floor(Math.random() * (myArray.length - 1));

console.log(firstNum);

let secondNum = Math.floor(Math.random() * (firstNum - 1));
console.log(secondNum);


function randomArray (array, num1, num2){
    const newArray = [];
    for(let i = num2; i < num1; i++ ){
        newArray.push(array[i]);
    }
    return newArray;
}

function reverseRandomArray (array, num1, num2){
    const newArray = [];
    for(let i = 0; i < num2; i++ ){
        newArray.push(array[i]);
    }
    for(let x = num1; x < array.length; x++){
        newArray.push(array[x]);
    }
    return newArray;
}

console.table(randomArray(myArray, firstNum, secondNum));
console.table(reverseRandomArray(myArray, firstNum, secondNum));