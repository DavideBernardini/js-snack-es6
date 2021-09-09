/*Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal*/


// Creo un array di biciclette che hanno come proprietà nome e peso
const biciclette = [
    {
        'nome': 'bike1',
        'peso': 13
    },
    {
        'nome': 'bike2',
        'peso': 8
    },
    {
        'nome': 'bike3',
        'peso': 15
    },
    {
        'nome': 'bike4',
        'peso': 10
    },
    {
        'nome': 'bike5',
        'peso': 7
    }
];

console.log(biciclette);

// metto i pesi in un array attraverso un ciclo
let listaPesi = [];

for ( let i = 0; i < biciclette.length; i++) {

    let {peso} = biciclette[i];

    listaPesi.push(peso);

}

// creo una funzione che trova il numero minore e creo una variabile per il peso minore
const numeroMinoreArray = (array) => Math.min(...array);

let pesoMinore = numeroMinoreArray(listaPesi);

// metto in una variabile l'oggetto della bicicletta più leggera con un ciclo che scorre gli array dei pesi e delle biciclette
let biciclettaLeggera;

for (let i = 0; i < listaPesi.length; i++) {

        if ( listaPesi[i] == pesoMinore) {

            biciclettaLeggera = biciclette[i];

        }
}

// metto in variabili le proprietà nome e peso con destructuring e li stampo nella console
let {nome, peso} = biciclettaLeggera;

console.log(`La bicicletta più leggera è la ${nome} con un peso di ${peso} kg.`);