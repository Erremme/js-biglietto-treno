/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/

//1 Il programma chiede all'utente il numero di chilometri che vuole percorrere
const userKm = prompt(" Quanti km devi percorrere?");
//2 Il programma chiede all'utente l'eta
const userAge = prompt("Quanti anni hai?");
//3 Dichiaro il prezzo del biglietto per km
let priceForKm = 0.21;
// 4 dchiaro la variabile con lo sconto del 20%
let discountTwenty = 20;
// 5 dchiaro la variabile con lo sconto del 40%
let discountFourty = 40;
//6 dichiaro il costo del ticket senza sconti
let ticketPrice = userKm * priceForKm
//7dichiaro lo sconto per i minorenni 
let under18Discount = (ticketPrice * discountTwenty) / 100
//8dichiaro lo sconto per gli over 65 
let over65Discount = (ticketPrice * discountFourty) / 100
//9 dichiaro il prezzo finale
if( userAge < 18){
    ticketPrice = ticketPrice - under18Discount
   
} else if( userAge >= 65){
  ticketPrice = ticketPrice - over65Discount
}else{
    ticketPrice= ticketPrice
}

alert(`Il costo del biglietto è : €${ticketPrice.toFixed(2)}`);
