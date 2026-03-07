/*
Crea una función que reciba una frase en formato string y devuelva la palabra más larga. En caso de haber varias con longitud máxima que devuelva siempre la primera. 
Ten en cuenta que consideramos una palabra a aquello que esté separado por espacios.
*/

function biggestWord(phrase) {
  const words = phrase.split(" ");
  let biggestWord = "";
  for (let i = 0; i < words.length; i++) {
    biggestWord = biggestWord.length < words[i].length ? words[i] : biggestWord;
  }  
  return biggestWord;
}

console.log(biggestWord("Esta frase puede contener muchas palabras"));
console.log(biggestWord("Ejercicios básicos de JavaScript"));