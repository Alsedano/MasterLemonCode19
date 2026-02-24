//Clone

function clone(source: object): object {
  return { ...source };  
}

function merge(source: object, target: object): object {
    return Object.assign(clone(target), source);
}

// Por ejemplo, dados estos 2 objetos:
var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

// El resultado de mezclar a sobre b sería:
//merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}

console.log('Object a');
console.log(a);
console.log('Object b');
console.log(b);
console.log('Merge result');
console.log(merge(a, b));