/*
This
¿Cual es la salida de los logs en el siguiente código? Intenta razonar, no te limites a ejecutar la solución.
*/

var surname = "Pérez";
var person = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function() {
      return this.surname;
    },
  },
};

console.log(person.wife.getSurname());
 //Jiménez
var surnameFunction = person.wife.getSurname;
console.log(surnameFunction()); 
//undefined . this es llamado por el objeto Global que no tiene surname
console.log(surnameFunction.call(person));
 //González