/*
1. Array operations
*/

const testArray: number[] = [1, 2, 3, 4, 5, 6];

console.log("Array origin");
console.log(testArray);

//Head
const head = (arr: any[]): any => {
  const [first] = arr;
  return first;
};

console.log("Head");
console.log(head(testArray));

//Tail
const tail = ([first, ...others]: any[]): any[] => {
  return others;
};

console.log("Tail");
console.log(tail(testArray))

//Init
const init = (arr: any[]): any[] => {
  return arr.slice(0, arr.length - 1);
};

console.log("Init");
console.log(init(testArray));

//Last
const last = (arr: any[]): any => {
  return arr[arr.length - 1];
};

console.log("Last");
console.log(last(testArray));

console.log("Array origin");
console.log(testArray);