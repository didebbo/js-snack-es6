// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const array = [1,2,3,4,5,6,7,8,9,10];

const func = (a,b,array) => array.filter((el,index) => index >= a && index <= b);

console.log(func(2,8,array));