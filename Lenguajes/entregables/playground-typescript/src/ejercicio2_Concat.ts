//Ejercicio

const testArray1: number[] = [1, 2, 3, 4];
const testArray2: string[] = ["a", "b", "c", "d"];

const concat = (a: any[], b: any[]): any[] => {
  return [...a, ...b];
};

console.log(concat(testArray1, testArray2));

//Opcional

const concatMulti = (...inputArrays: any[]): any[] => {
  let arrayConcat: any[] = [];
  for (const element of inputArrays) {
    arrayConcat = [...arrayConcat, ...element];
  }
  return arrayConcat;
};

const testArray3 = [5, 6];
const testArray4 = ["7", "8", "9", "0"];

console.log(concatMulti(testArray1, testArray2, testArray3, testArray4));