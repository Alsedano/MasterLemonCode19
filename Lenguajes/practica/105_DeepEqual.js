/*
Apartado A
Suponiendo objetos sin anidamiento y con propiedades primitivas, construye una función que compare el contenido de 2 objetos.

TIP: Recuerda, los objetos tienen un método hasOwnProperty que nos indica si dicho objeto tiene o no una propiedad concreta. 
Ejemplo a.hasOwnProperty("name"), si a tiene una propiedad name nos devolverá true, en caso contrario false.
*/

var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };

console.log('Is equal: ' + user === clonedUser); // false

function isEqual(a, b) {

    if (Object.keys(a).length !== Object.keys(b).length) return false;

    for (const key in a) {
        if (!b.hasOwnProperty(key)) return false;

        if (a[key] !== b[key]) return false;        
    }

    return true;
}

console.log('Is equal: ' + isEqual(user, clonedUser)); // true

/*
Apartado B
Vamos a mejorar la solución del apartado A suponiendo ahora que si puede existir anidamiento de objetos.

TIP: Recuerda que el operador typeof en Javascript nos devuelve un string indicando el tipo de una variable de entre tipos primitivos, 
objetos o funciones. Ejemplo, typeof 12 // "number" o typeof {} // "object".
*/

var user = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};
var clonedUser = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};

function isDeepEqual(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length) return false;

    for (const key in a) {
        if (!b.hasOwnProperty(key)) return false;

        if (typeof a[key] === "object" && typeof b[key] === "object") {
            return isDeepEqual(a[key], b[key]);
        }
        else return a[key] === b[key];
    }

    return true;
}

console.log('Deep equal: ' + isDeepEqual(user, clonedUser)); // true