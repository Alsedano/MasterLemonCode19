/*
El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda.

Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando. 
Cuando se llame al método play el número de monedas debe incrementar de forma automática y debe generar tres booleanos aleatorios. 
En caso de que los tres booleanos sean true debe salir un mensaje por consola:

Congratulations!!!. You won <número de monedas> coins!!

y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:

Good luck next time!!
*/


class SlothMachine {

    constructor() {
        this.coins = 0;
        this.bool1 = false;
        this.bool2 = false;
        this.bool3 = false;
    }

    play() {
        this.coins++;
        this.generateBooleans();
        this.checkResult();
    }

    generateBooleans() {
        this.bool1 = this.getRandomBoolean();
        this.bool2 = this.getRandomBoolean();
        this.bool3 = this.getRandomBoolean();
    }

    getRandomBoolean() {
        return Math.floor(Math.random() * 2); //0, 1
    }

    checkResult() {
        if (this.bool1 && this.bool2 && this.bool3) {
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
            this.coins = 0;
        } else {
            console.log(`Good luck next time!!`);
        }
    }
}

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"