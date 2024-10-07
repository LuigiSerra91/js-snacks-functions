/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filter_word(array, lettera) {
    let iniziale;
    let filter_names = [];
    for (let i = 0; i < array.length; i++) {
        iniziale = array[i].charAt(0);
        if(lettera === iniziale){
            filter_names.push(array[i]);
        }
        
    }
    console.log(filter_names);
    
}

// Invoca la funzione qui e stampa il risultato in console

filter_word(names , "A");


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]