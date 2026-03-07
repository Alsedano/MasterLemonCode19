/*
El siguiente código implementa una sencilla clase que actúa como reminder, es decir, dado un mensaje, lo muestra por consola transcurrido (al menos) el tiempo indicado por el usuario:

Te animamos a que crees una nueva instancia de reminder y la utilices. Escribe el mensaje que tu quieras y añade unos pocos segundos de retardo. 
Comprueba la salida por consola ...  algo no funciona como esperábamos ¿verdad? ¿Sabrías decirnos que está pasando aquí? ¿Cómo lo arreglarías?
*/

class Reminder {
  constructor(text) {
    this.text = text;
  }

  remindMe(delay) {
    console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
    setTimeout(function() {
      console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
    }, delay * 1000);
  }
}

/* const rem = new Reminder("Texto de prueba del ejercicio");
rem.remindMe(2); */

/* Output: 
Your reminder after 2 seconds is: undefined*/

//SOLUCIÓN propuesta

class ReminderSol { 
  constructor(text) {
    this.text = text;
  }

  remindMe(delay) {
    setTimeout(function() {
      console.log(`Your reminder after ${delay} seconds is: ${arguments[0]}`);
    }, delay * 1000, this.text);
  }
}

const rem2 = new ReminderSol("Texto de prueba con la solución propuesta al ejercicio");
rem2.remindMe(1);
