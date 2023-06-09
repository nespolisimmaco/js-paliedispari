// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userChoice = prompt("Ciao utente! Scegli: pari o dispari?").toLowerCase();
console.log(userChoice);
let userNumber = parseInt(prompt("Adesso inserisci un numero da 1 a 5"));
// SE il numero non è nel range
while ((userNumber < 1) || (userNumber > 5)) {
    userNumber = parseInt(prompt("Il numero non è compreso nel range, reinserisci"));
}
console.log("User number", userNumber);
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
const computerNumber = getRndInteger(1, 5);
console.log("Computer number", computerNumber);
// Sommo i due numeri
const sum = userNumber + computerNumber;
console.log("Somma", sum);
// La somma è pari o dispari
const oddOrEvenCheck = oddOrEven(sum);
console.log(oddOrEvenCheck);
// Dichiaro chi ha vinto
let result = "";
if (userChoice === "pari" && oddOrEvenCheck === "pari") {
    result = ("Hai vinto!");
} else if (userChoice === "pari" && oddOrEvenCheck === "dispari") {
    result = ("Computer vince!");
} else if (userChoice === "dispari" && oddOrEvenCheck === "dispari") {
    result = ("Hai vinto!");
} else if (userChoice === "dispari" && oddOrEvenCheck === "pari") {
    result = ("Computer vince!");
}
document.writeln(result);

////////////////////
// FUNCTIONS
/**
 * Description
 * @param {number} min
 * @param {number} max
 * @returns {number} a random number between 1 and 5
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

/**
 * Description
 * @param {number} numbersSum
 * @returns {string} pari o dispari
 */
function oddOrEven(numbersSum) {
    if (numbersSum % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}