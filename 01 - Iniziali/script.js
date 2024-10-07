/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function First_word (names){
    return names.map(names => names.split(' ')[0].charAt(0))
}



// Invoca la funzione qui e stampa il risultato in console

console.log(First_word(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]