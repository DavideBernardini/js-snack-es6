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

for ( let i = 0; i < squadre.length; i++ ) {

    squadre[i].puntiFatti = numeroRandom(10, 100);
    squadre[i].falliSubiti = numeroRandom(250, 400);

    let {nome, falliSubiti} = squadre[i];

    let sNf = {
        nome,
        falliSubiti
    };

    squadreNomeFalli.push(sNf);

    console.log(`Squadra: ${nome} - Falli subiti: ${falliSubiti}`);
}