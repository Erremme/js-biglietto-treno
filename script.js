/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/

//1 Il programma chiede all'utente il numero di chilometri che vuole percorrere
let userKm = prompt(" Quanti km devi percorrere?");
//2 Il programma chiede all'utente l'eta
let userAge = prompt("Quanti anni hai?");
//3 Dichiaro il prezzo del biglietto per km
const priceForKm = 0.21;
//4 dichiaro il costo del ticket senza sconti
let ticketPrice = userKm * priceForKm
// inizializzo la variabile discount
let discount = 0;
//5 dichiaro il prezzo finale
if( userAge < 18){
   discount = ticketPrice * 0.2;
   ticketPrice -= discount;    
} else if( userAge >= 65){
  discount = ticketPrice * 0.4;
  ticketPrice -= discount;
}

alert(`Il costo del biglietto è : €${ticketPrice.toFixed(2)}`);
