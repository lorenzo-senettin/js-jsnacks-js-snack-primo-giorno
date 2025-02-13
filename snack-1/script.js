// l'utente inserisce due numeri in successione, con due prompt
// il software stampa il maggiore

const first_number = parseInt(prompt("Inserisci il primo numero")); // ask the user for the first number

const second_number = parseInt(prompt("Inserisci il secondo numero")); // ask the user for the second number 

if (first_number > second_number) {
  console.log(first_number);
} else if (second_number == first_number) {
  console.log("I numeri inseriti sono uguali");
} else {
  console.log(second_number);
}