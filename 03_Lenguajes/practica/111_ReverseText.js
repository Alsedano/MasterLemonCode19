/*
Dado un texto cualquiera, invierte el orden de las palabras.
Ejemplo: "Uno dos tres" --> "tres dos Uno"
*/

function reverseText(text) {
    console.log(text.split(" ").reverse().join(" "));
}

reverseText("Uno dos tres");