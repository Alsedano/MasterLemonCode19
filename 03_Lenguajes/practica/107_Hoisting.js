/*
Hoisting
NOTA: Realiza estos ejercicios en vanilla JS. Si estás utilizando un playground de TypeScript obtendrás errores.

Apartado A
¿Cual crees que será el resultado de la consola y porqué?

TIP: escribe el código equivalente.

function f() {
  console.log(a);
  console.log(g());

  var a = "good job!";
  function g() {
    return a;
  }
  console.log(a);
}

f();
*/

function f() {
  console.log(a);
  console.log(g());

  var a = "good job!";
  function g() {
    return a;
  }
  console.log(a);
}

f();

/* B */
var a = 1;

(function() {
  console.log(a);
  var a = 2;
  b = 4;
  var c = 3;
})();

console.log(a);
console.log(b);
console.log(c);

/*
Explicación de ChatGPT:
You get a ReferenceError for var c but not for var b because of how variable declarations and hoisting work in JavaScript:

var c is declared inside the IIFE (the function), so it is function-scoped. When you try to access c outside the function, it is not defined in the global scope, resulting in a ReferenceError.
b = 4; assigns a value to b without a var, let, or const declaration. In non-strict mode, this creates a global variable b, so you can access it outside the function.
In summary:

c is not accessible outside the function (function-scoped).
b becomes global because it was assigned without a declaration.
*/

/* C */
f();
var a = 1;

function f() {
  console.log(a);
  b = 4;
  var c = 3;
}

console.log(a);
console.log(b);
console.log(c);


