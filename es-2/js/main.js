/**
 * 
    A - Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
    B - Scrivi una funzione che accetti un numero come argomento e ritorni il suo opposto (inverso additivo) es (34 -> -34)
    C - Data una lista di 10 numeri e 10 stringhe, restituisci una copia della lista con tutte le stringhe girate e i numeri opposti.
    * 
 */

function reverseString(str){
    return str.split("").reverse().join("");
};

console.log(reverseString('Ciao'));

function reverseNumber(num){
    return -num;
}

console.log(reverseNumber(5));

const myArray = [5, 6, 1, 2, 3, 4 , 7 , 8 , 9 , 10 , 'ciao' , 'hello' , 'boolean' , 'classe' , 'matteo' , 'snack' , 'javascript' , 'cane' , 'fame' , 'pranzo'];

myArray.forEach((element) => {
    if(isNaN(element)){
        console.log(reverseString(element));
    }else{
        console.log(reverseNumber(element));
    }
});