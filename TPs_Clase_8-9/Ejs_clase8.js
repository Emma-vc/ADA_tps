// ACTIVIDAD CLASE 8 📒🖋️📕
const prompt = require("prompt-sync")({ sigint: true });
/*             EJERCICIO 1: Calcula el doble de un número
Enunciado:
En este ejercicio, practicarás el uso de variables y operadores aritméticos. Debes
escribir un programa en JavaScript que:
1. Solicite al usuario que ingrese un número cualquiera.
2. Calcule el doble de ese número.
3. Muestre el resultado en la consola.
Requisitos: 
Utiliza la función prompt() para solicitar el dato al usuario.
Almacena el número ingresado en una variable.
Utiliza un operador aritmético para calcular el doble del número.*/

console.log('\n⁘⁘⁘⁘⁘ Ejercicio 1 ⁘⁘⁘⁘⁘')
let azar= parseInt(prompt("Por favor, Ingrese un numero cualquiera 😊:  "));
console.log('El doble del numero que ud eligio es:', azar * 2);

// ⭐😼 en los ejercicios hago uso de variables para guardar resultados individuales y despues al final el resultado se muestra con console.log

/*              EJERCICIO 2: Verificar si un número es positivo, negativo o cero
Enunciado:
En este ejercicio, practicarás el uso de condicionales (if, else). Escribe un
programa en JavaScript que:
1. Pida al usuario que ingrese un número.
2. Verifique si el número es positivo, negativo o igual a cero.
3. Muestre un mensaje indicando cuál es el caso.
Requisitos:
-Utiliza una estructura de control de flujo (if, else if, else) para hacer las
verificaciones.
-Usa parseFloat() para convertir la entrada del usuario a un número.*/

console.log('\n ⁘⁘⁘⁘⁘ Ejercicio 2 ⁘⁘⁘⁘⁘')
let numero=parseFloat(prompt("Ingrese un numero: "));
let resultado=''
if (numero > 0) {
    resultado='El numero ingresado es positivo';
}else if (numero === 0){
    resultado='El numero ingresado es cero';
}else{
    resultado='El numero ingresado es negativo';
}

console.log(resultado);

/*             EJERCICIO 3: Suma de dos números ingresados por el usuario
Enunciado:
Este ejercicio te ayudará a practicar la entrada de datos y el uso de operadores
aritméticos. Escribe un programa que:
1. Pida al usuario que ingrese dos números.
2. Sume ambos números.
3. Muestre el resultado de la suma.
Requisitos:
-Utiliza prompt() para recibir los números.
-Utiliza parseFloat() para convertir las entradas a números.
-Almacena los resultados en variables adecuadas y muestra el resultado.*/

console.log('\n⁘⁘⁘⁘⁘ Ejercicio 3 ⁘⁘⁘⁘⁘')
let suma_t=''
let num1=parseFloat(prompt('Ingrese el primer numero: '));
let num2=parseFloat(prompt('Ingrese el segundo numero: '));
suma_t=num1+num2;
console.log('La suma de los numeros ingresados es de',suma_t);

/*            EJERCICIO 4: Determinar si un número es par o impar
Enunciado:
En este ejercicio, aprenderás a utilizar operadores aritméticos y condicionales.
Debes escribir un programa que:
1. Solicite al usuario que ingrese un número entero.
2. Determine si el número es par o impar.
3. Muestre un mensaje indicando si el número es par o impar.
Requisitos:
-Utiliza el operador módulo (%) para comprobar si el número es divisible
por 2.
-Usa una estructura if-else para mostrar el mensaje adecuado.*/

console.log('\n⁘⁘⁘⁘⁘ Ejercicio 4 ⁘⁘⁘⁘⁘')
let number=parseInt(prompt('Ingrese un numero entero: '));
let final='';
if (number %2==0){
    final=number+ ' Es un numero par';
} else{
    final=number+ ' Es un numero impar';
}
console.log(final);


/*           EJERCICIO 5: Saludo personalizado
Enunciado:
Este ejercicio es ideal para familiarizarse con la manipulación de cadenas de
texto y la función prompt(). Escribe un programa que:
1. Solicite al usuario que ingrese su nombre.
2. Muestre un saludo personalizado usando el nombre ingresado.
Requisitos:
-Utiliza prompt() para recibir el nombre del usuario.
-Muestra un mensaje utilizando concatenación de cadenas */
// ⭐ En este ejercicio hago uso de las backticks
console.log('\n⁘⁘⁘⁘⁘ Ejercicio 5 ⁘⁘⁘⁘⁘')
let mensaje= 'Bienvenido a nuestro curso Introduccion a js, esperemos que sea de su agrado 😊';
let usuario=prompt('Ingrese su nombre de pila 🤗 : ')
console.log(`Hola, ${usuario}, ${mensaje}`);