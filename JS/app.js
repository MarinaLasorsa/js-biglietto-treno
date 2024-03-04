
/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
oppure applicato uno sconto del 40% per gli over 65.*/

//1. determinare costanti numero di chilometri e età del passeggero tramite prompt

const kilometers = prompt("Inserisci il numero di chilometri che vuoi percorrere"); //string
const age = prompt("Inserisci la tua età"); //string

//2. definire prezzo biglietto iniziale moltiplicando 0.21 per la costante chilometri dichiarata

var ticketPrice = (parseFloat(kilometers) * 0.21); //number 

//console.log("il prezzo del tuo biglietto è " + ticketPrice)

//3. SE costante età è minore di 18:
//moltiplicare prezzo biglietto per 0.2
//sottrarre risultato a prezzo biglietto
//stampare risultato finale come prezzo finale del biglietto

if (parseFloat(age) < 18) {
    var ticketPrice = (ticketPrice - (ticketPrice * 0.2))
    
    console.log("il prezzo del tuo biglietto è " + ticketPrice.toPrecision(3) + " euro");
}

//ALTRIMENTI SE costante età è maggiore di 65:
//moltiplicare prezzo biglietto per 0.4
//sottrarre risultato a prezzo biglietto
//stampare risultato finale come prezzo finale del biglietto

else if (parseFloat(age) > 65) {
    var ticketPrice = (ticketPrice - (ticketPrice * 0.4))

    console.log("il prezzo del tuo biglietto è " + ticketPrice.toPrecision(3) + " euro");
}

//ALTRIMENTI 
//stampare risultato finale come prezzo finale del biglietto

else {
    console.log("il prezzo del tuo biglietto è " + ticketPrice.toPrecision(3) + " euro")
}