// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

// Chiedo la parola all'utente
const userWord = prompt("Inserisci una parola, e io ti dirò se è palindroma");
console.log(userWord);
const palindromeCheck = palindrome(userWord);
console.log(palindromeCheck);
document.writeln(palindromeCheck);
// Creo una funzione per vedere se è palindroma
/**
 * Description
 * @param {string} word
 * @returns {string} ""è palindroma" oppure "non è palindroma"
 */
function palindrome(word) {
    let wordReverse = "";
    for (let i = word.length -1; i >= 0 ; i--) {
        wordReverse += word[i];
        console.log(word[i]);
    }
    console.log(wordReverse);
    if (word === wordReverse) {
        return "La parola è palindroma";
    } else {
        return "La parola non è palindroma";
    }
}