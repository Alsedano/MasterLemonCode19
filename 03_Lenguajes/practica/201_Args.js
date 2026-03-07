/*
Dada la siguiente función:
*/

function f(a, { b } = {}, c = 100) {
  console.log(arguments.length);
  console.log(a, a === arguments[0]);
  console.log(b, b === arguments[1]);
  console.log(c, c === arguments[2]);
}

/* Apartado A   ¿Qué muestra por consola esta llamada?*/
f("JS rocks!", { b: "b" });
/*
arguments.length es 2 (se pasan dos argumentos).
a es "JS rocks!", igual a arguments[0] → true.
b es "b" (de { b: "b" }), pero arguments[1] es { b: "b" } (el objeto completo), así que "b" === { b: "b" } → false.
c toma el valor por defecto 100, pero arguments[2] es undefined (no se pasó un tercer argumento), así que 100 === undefined → false.
*/

/* Apartado B  ¿Y con estos argumentos? */
f({ b: "b" });
/*
arguments.length es 1 (solo un argumento).
a es { b: "b" }, igual a arguments[0] → true.
{ b } = {}: como no se pasa segundo argumento, se usa el valor por defecto {}. Así que b es undefined (no hay propiedad b en {})
          , y b === arguments[1] es true porque arguments[1] es undefined.
c es 100 (por defecto), y arguments[2] es undefined, así que 100 === undefined → false.
*/

/*Apartado C  ¿Y ahora? */
f("JS sucks!", null, 13);
//Petardazo por el null, que no toma los valores por defecto
