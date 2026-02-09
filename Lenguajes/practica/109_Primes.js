/*
Crea una función tal que, dado un número entero de inicio from y otro de fin to, encuentre los números primos entre ellos y los muestre por pantalla.
Asi pues, la salida desde el 1 al 10 sería:
1 is not a prime
2 is PRIME!
3 is PRIME!
4 is not a prime
5 is PRIME!
8 is not a prime
9 is not a prime
10 is not a prime
*/

/*
Challenge
Se puede mejorar mucho el rendimiento del ejercicio anterior. Al buscar si un numero es primo, podemos dejar de comprobar si es divisible por cada entero mayor que 1 una vez alcancemos la raiz cuadrada de dicho número.
*/

/*
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 
*/

function isPrime(num) {
    //un número primo siempre es impar, excepto el número 2
    // los demás números primos a partir del 3 son impares
    //Para comprobar si un número n es un número primo, se puede dividir por todos los números primos menores que la raíz cuadrada de n. Si no se obtiene ningún divisor entero, entonces n es primo
    //prueba de divisibilidad básica. Por ejemplo, si un número termina en 0, 2, 4, 5, 6 u 8, podemos concluir rápidamente que no es primo, ya que puede ser divisible entre 2 o 5

    if (num === 1) return false;

    let sqrt = Math.floor(Math.sqrt(num));

    if (sqrt === 1) return true;

    const units = num % 10;
    if (units === 2 || units === 4 || units === 5 || units === 6 || units === 8) return false;

    let value = 2;
    while (value <= sqrt) {

        if (num % value === 0) return false;

        value++;
    }

    return true;
}

function showPrimes(from, to) {
    for (let n = from; n <= to; n++) {
        isPrime(n) ? console.log(`${n} is PRIME!`) : console.log(`${n} is not a prime!`)
    }
}

showPrimes(1, 100);