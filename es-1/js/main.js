/**
 * Crea un array di 10 oggetti che rappresentino una zucchina.
 * indicando per ognuna varietà, peso e lunghezza.
 *
 * A - Calcola quanto pesano tutte le zucchine
 * B - Dividi in due array separati le zucchine che misurano più o meno di 15cm
 * C - Stampa separatamente quanto pesano i due gruppi di zucchine
 *
 * */

const zucchine =[
    {
        varietà : 'romane',
        peso : 1,
        lunghezza : 12,
    },
    {
        varietà : 'napoletane',
        peso : 3,
        lunghezza : 25,
    },
    {
        varietà : 'gialle',
        peso : 2,
        lunghezza : 21,
    },
    {
        varietà : 'friulane',
        peso : 6,
        lunghezza : 6,
    },
    {
        varietà : 'rotonde',
        peso : 2,
        lunghezza : 14,
    },
    {
        varietà : 'emiliane',
        peso : 2,
        lunghezza : 19,
    },
    {
        varietà : 'venete',
        peso : 9,
        lunghezza : 18,
    },
    {
        varietà : 'lombarde',
        peso : 3,
        lunghezza : 20,
    },
    {
        varietà : 'marchigiane',
        peso : 2,
        lunghezza : 25,
    },
    {
        varietà : 'pugliesi',
        peso : 1,
        lunghezza : 6,
    }
];

let somma = 0;

let pesoMature = 0;
const zucchineMature =[];

let pesoAcerbe = 0;
const zucchineAcerbe = [];

zucchine.forEach((element) => {
    somma += element.peso;
    if(element.lunghezza >= 15){
        zucchineMature.push(element);
        pesoMature += element.peso;
    }else{
        zucchine.push(zucchineAcerbe);
        pesoAcerbe += element.peso;
    }

})

console.log(somma);
console.log(zucchineMature);
console.log(zucchineAcerbe);



// const newZucchine = zucchine.map((element) => {
//     let somma ='';
//     somma += element.peso;
// });
// console.log(newZucchine);