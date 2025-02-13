// l'utente inserisce due parole in successione, con due prompt
// il software stampa prima la parola più corta, poi la più lunga

const first_word = prompt("Inserisci la prima parola:")  // ask first word
const second_word = prompt("Inserisci la seconda parola:")  // ask second word

if (first_word.length > second_word.length) {  // if the first word is longer
  console.log(`${first_word}` - `${second_word}`);
} else if (second_word.length > first_word.length) {  // if the second word is longer
  console.log(`${second_word}` - `${first_word}`);
} else {  // if the words are the same length
  console.log("Le parole sono lunge uguali quindi non stampo niente")
}