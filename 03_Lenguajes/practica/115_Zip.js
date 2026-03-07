/*
Crea una función zipObject tal que acepte un array de claves como primer argumento y un array de valores como segundo argumento y cuyo objetivo sea crear un objeto uniendo las claves con sus valores. 
Asumir que el array de claves tiene como mínimo la misma longitud que el de valores:

Challenge
Si no hay valores suficientes para todas las claves evita que aparezcan como undefined.
// Ejemplo:
console.log(zipObject(["spanish", "english", "french"], ["hola"])); // {spanish: "hola"}
*/

function zipObject(keys, values) {

  const map = new Map();
  for (let index = 0; index < keys.length; index++) {
    map.set(keys[index], values[index] ?? " ");    
  }

  return Object.fromEntries(map);
}

// Ejemplo
console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])); // {spanish: "hola", english: "hi", french: "salut"}
console.log(zipObject(["spanish", "english", "french"], ["hola"])); // {spanish: "hola"}