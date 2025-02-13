// il software deve chiedere per 10 volte all'utente di inserire un numero
// il programma stampa la somma di tutti i numeri inseriti

let sum = 0;

for (let i = 1; i <= 10; i++) {
  // ask i number
  let number = parseFloat(prompt("Inserisci numero ${i} di 10:"));

  // verify if input is valid
  if (!isNaN(number)) {
    sum += number;
  } else {
    alert("Inserisci un numero valido");
    i--; // return to previus number input
  }
}

console.log(sum);