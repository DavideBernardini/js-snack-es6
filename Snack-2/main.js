/*Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

const squadre = [
    {
        'nome': 'Lecce',
        'puntiFatti': 0,
        'falliSubiti': 0
    },
    {
        'nome': 'Milan',
        'puntiFatti': 0,
        'falliSubiti': 0
    },
    {
        'nome': 'Inter',
        'puntiFatti': 0,
        'falliSubiti': 0
    },
    {
        'nome': 'Juventus',
        'puntiFatti': 0,
        'falliSubiti': 0
    },
    {
        'nome': 'Roma',
        'puntiFatti': 0,
        'falliSubiti': 0
    },
    {
        'nome': 'Fiorentina',
        'puntiFatti': 0,
        'falliSubiti': 0
    },
    {
        'nome': 'Lazio',
        'puntiFatti': 0,
        'falliSubiti': 0
    },
    {
        'nome': 'Gallipoli',
        'puntiFatti': 0,
        'falliSubiti': 0
    }
];

console.log(squadre);

// creo la funzione per i numeri random
const numeroRandom = (min, max) => Math.floor(Math.random() *(max - min + 1)) + min;

// assegno alle proprietà punti fatti e falli subiti un valore random per ogni squadra
// creo un nuovo array con solo nome e falli subiti dalle squadre
const squadreNomeFalli = [];

console.log(squadreNomeFalli);

let puntiSquadre = [];
while (puntiSquadre.length < squadre.length) {
    let rndNum = numeroRandom(10, 100);
    if (puntiSquadre.includes(rndNum) == false) {
        puntiSquadre.push(rndNum);
    }
}

let falliSquadre = [];
while (falliSquadre.length < squadre.length) {
    let rndNum = numeroRandom(250, 400);
    if (falliSquadre.includes(rndNum) == false) {
        falliSquadre.push(rndNum);
    }
} 

for ( let i = 0; i < squadre.length; i++ ) {

    squadre[i].puntiFatti = puntiSquadre[i];
    squadre[i].falliSubiti = falliSquadre[i];

    let {nome, falliSubiti} = squadre[i];

    squadreNomeFalli.push({
        nome,
        falliSubiti
    });

    console.log(`Squadra: ${nome} - Falli subiti: ${falliSubiti}`);
}