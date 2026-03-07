/* 
Implementa una función para calcular el n-enésimo termino de la sucesión de Fibonacci. Esta sucesión tiene sus dos primeros términos prefijados:

fib(0) = 0
fib(1) = 1
Y a partir de aqui, el siguiente término se calcula a partir de los dos anteriores:

fib(2) = fib(1) + fib(0)
...
fib(n + 1) = fib(n) + fib(n - 1)
TIP: Es el clásico problema donde el término siguiente depende del actual y el anterior.

TIP: También se puede abordar con recursividad, pero buscamos una solución iterativa para hacer uso de destructuring con múltiples asignaciones.

0, 1, 1, 2, 3, 5, 8, 13, 21, 34,...
 */

const fib = (n) => {
  if (n === 0 || n === 1) return n;

  let prev = 0; // f(n-2)
  let current = 1; // f(n-1)

  for (let i = 2; i <= n; i++) {
    [prev, current] = [current, prev + current];
  }

  return current;
};

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
