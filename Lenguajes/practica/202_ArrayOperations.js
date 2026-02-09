/*
Apartado A. Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
*/

const testArray = [1, 2, 3, 4, 5, 6];

//Usando rest
const headRest = ([first, ...others]) => {
  console.log(first);
};

const head = (arr) => {
  const [first] = arr;
  console.log(first);
};

console.log("Head");
head(testArray);

/* Apartado B. Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.*/

const tail = ([first, ...others]) => {
  console.log(others);
};

console.log("Tail");
tail(testArray);

/* Apartado C. Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.*/

const init = (arr) => {
  console.log(arr.slice(0, arr.length - 1));
};

console.log("Init");
init(testArray);

/* Apartado D. Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento. */
const last = (arr) => {
  console.log(arr[arr.length - 1]);
};

console.log("Last");
last(testArray);

console.log("Array origin");
console.log(testArray);
