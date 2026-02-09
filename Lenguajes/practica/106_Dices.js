/*
Empleando el concepto de closure, emula el comportamiento de 2 dados.

Utiliza un closure para almacenar el resultado de tirar 2 dados, y encapsula junto a estos datos, métodos que implementen la siguiente funcionalidad:

1. Hacer reset, poner a undefined o null ambos resultados.
2. Tirar los dados. TIP: Usa Math.random() para tiradas aleatorias.
3. Imprimir el resultado por consola. Ten en cuenta lo siguiente:
  a. Informa al usuario que debe tirar primero cuando corresponda.
  b. Si saca doble 6, ¡dale un premio!
*/

function createDiceGame() {
    let resultDado1;
    let resultDado2;

    return {
        reset: function() {
            resultDado1 = null;
            resultDado2 = null;
        },

        rollDices: function() {
            resultDado1 = Math.floor(Math.random() * 6) + 1;
            resultDado2 = Math.floor(Math.random() * 6) + 1;
        },

        printAction: function () {
            console.log("Por favor, tira los dados");
        },

        printGift: function () {
            if (resultDado1 === 6 && resultDado2 === 6) {
                console.log("Premio!!!!! Doble pareja de 6");
            }
        },

        printResult: function () {
            console.log(`El resultado es: ${resultDado1}, ${resultDado2}`);

            this.printGift();
        }
    }
}

const diceGame = createDiceGame();
for (let index = 0; index < 50; index++) {
    diceGame.printAction();
    diceGame.rollDices();
    diceGame.printResult();
}
