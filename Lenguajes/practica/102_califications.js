/*
Dada la calificación de alumnos de una clase en forma de objeto como el siguiente eso2o:

Implementa una función que muestre la media de la clase de forma textual, es decir, siguiendo el sistema de calificación español:

Matrícula de Honor = 10
Sobresaliente = entre 9 y 10
Notable = entre 7 y 9
Bien = entre 6 y 7
Suficiente = entre 5 y 6
Insuficiente = entre 4 y 5
Muy deficiente = por debajo de 4
*/

const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

function values(obj) {
    return Object.values(obj); //Es lo mismo que un for..in
}

function printAverage(classResults) {
    if (classResults === 10) {
        console.log("Según el sistema de calificación español: Matrícula de Honor");
    } else if (classResults >= 9 && classResults < 10) {
        console.log("Según el sistema de calificación español: Sobresaliente");
    } else if (classResults >= 7 && classResults < 9) {
        console.log("Según el sistema de calificación español: Notable");
    } else if (classResults >= 6 && classResults < 7) {         
        console.log("Según el sistema de calificación español: Bien");
    } else if (classResults >= 5 && classResults < 6) {
        console.log("Según el sistema de calificación español: Suficiente");
    } else if (classResults >= 4 && classResults < 5) {
        console.log("Según el sistema de calificación español: Insuficiente");
    } else if (classResults < 4) {
        console.log("Según el sistema de calificación español: Muy deficiente");
    } else {
        console.log("Error en la nota");
    }
}

function calculateClassAverage() {
    const notasArray = values(eso2o);
    const average = notasArray.reduce((acc, current) => acc + current) / notasArray.length;
    console.log(`La nota media de la clase es: ${average}`);
    printAverage(average)
}

calculateClassAverage();
