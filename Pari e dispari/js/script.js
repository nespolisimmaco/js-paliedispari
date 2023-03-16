// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userChoice = prompt("Ciao utente! Scegli: pari o dispari?").toLowerCase();
console.log(userChoice);
let userNumber = parseInt(prompt("Adesso inserisci un numero da 1 a 5"));
while (5 > userNumber < 1) {
    userNumber = parseInt(prompt("Il numero non è compreso nel range, reinserisci"));
}
console.log("User number", userNumber);
const computerNumber = getRndInteger(1, 5);
console.log("Computer number", computerNumber);
/**
 * Description
 * @param {number} min
 * @param {number} max
 * @returns {number} a random number between 1 and 5
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }