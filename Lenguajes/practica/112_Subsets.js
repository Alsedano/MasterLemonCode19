/*
Escribe una función que acepte un string como argumento y devuelva todas las partes finales de dicha palabra:

Challenge
Repite el ejercicio anterior sin utilizar arrays auxiliares ni bucles for/do/while
*/

function subsets_ejercicio(word) {
    const newArray = []
    const arr = [...word];
    
    for (let index = 1; index < arr.length; index++) {
        let firstValue = arr.slice(index, arr.length).join("");
        newArray.push(firstValue);
    }

    console.log(newArray);    
}

//Challenge
function subsets(word) {
    if (word.length == 1) return Array.from(word);

    const remainingWord = word.substring(1);
    if (remainingWord.length == 1) return Array.from(remainingWord);

    return [remainingWord].concat(subsets(remainingWord));
}

// Ejemplo
console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]

