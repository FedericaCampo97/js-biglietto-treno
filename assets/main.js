/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca nella documentazione di JS.
*/

//prompt x2
//const
//if/else
//const
//console.log

//Chiedo all'utente quanti km vuole fare
const kmUtente = prompt('Qaunti km vuole percorrere?');

//Chiedo all'utente quanti anni ha
const anniUtente = prompt('Quanti anni ha?');

//Controllo che l'utente abbia inserito entrambe le richieste
console.log(kmUtente , anniUtente);

//Calcolo il prezzo del biglietto in base ai km da percorrere
let calcoloPrezzo = kmUtente * 0.21

console.log(calcoloPrezzo);

//Applico gli sconti in base all'età del passeggiero
let risultato; 

if(anniUtente < 18) {
    risultato = calcoloPrezzo - ((calcoloPrezzo * 20) / 100 )
} else if(anniUtente >= 65) {
    risultato = calcoloPrezzo - ((calcoloPrezzo * 40) / 100 )
} else {
    risultato = calcoloPrezzo
}
console.log (risultato); 

//Stampo il prezzo finale 