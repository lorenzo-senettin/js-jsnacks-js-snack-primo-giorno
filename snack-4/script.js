// crea un array vuoto
// chiedi per 6 volte all'utente di inserire un numero
// se è dispari inseriscilo nell'array

let array = [];

for (let i = 1; i <= 6; i++) {
  let numero = parseInt(prompt(`Inserisci numero ${i} di 6:`));

  if (numero % 2 !== 0) {
    array.push(numero);
  }
}

console.log(array);