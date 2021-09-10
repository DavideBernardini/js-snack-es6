/*Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.*/


// funzione numero random
const rndNum = (num) => Math.floor(Math.random() * num);

// creo un array dell'alfabeto con l'operatore spread
const alfabeto = [...'abcdefghilmnopqrstuvz'];

// genero due numeri random uno più piccolo dell'altro
let numB = rndNum(alfabeto.length) + 1;
let numA = rndNum(numB);

console.log(numA);
console.log(numB);

// creo un array con le lettere comprese fra gli indici che corrispondono ai numeri generati
const intervalloAlfabeto = alfabeto.filter((elm, i) => 
    i >= numA && i <= numB
);

console.log(intervalloAlfabeto);
