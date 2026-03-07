/*
Apartado A. Implementa una función concat, tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread.

TIP: Se hace en 1 línea. No utilices el método Array.prototype.concat(). 
*/

const testArray1 = [1, 2, 3, 4];
const testArray2 = ["a", "b", "c", "d"];

const concat = (a, b) => {
  console.log([...a, ...b]);
};

concat(testArray1, testArray2);

/* Apartado B. Repite el ejercicio anterior suponiendo cualesquiera arrays de entrada (no te limites solamente a 2). */

const concatMulti = (...inputArrays) => {
  let arrayConcat = [];
  for (const element of inputArrays) {
    arrayConcat = [...arrayConcat, ...element];
  }
  console.log(arrayConcat);
};

const testArray3 = [5, 6];
const testArray4 = ["7", "8", "9", "0"];

concatMulti(testArray1, testArray2, testArray3, testArray4);
