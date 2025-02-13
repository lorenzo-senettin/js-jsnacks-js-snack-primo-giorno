// crea un array vuoto
// chiedi per 6 volte all'utente di inserire un numero
// se è dispari inseriscilo nell'array

let array = [];

for (let i = 1; i <= 6; i++) {
  let number = parseFloat(prompt(`Inserisci numero ${i} di 6:`));

  if (!isNaN(number)) {
    number = parseFloat(number);
    if (number % 2 !== 0) {
      array.push(number);
    }
  } else {
    alert("Inserisci un numero valido");
    i--; // return to previus number input
  }
}

console.log(array);