// ACTIVIDAD CLASE 9 📒📘🖋️
const prompt = require("prompt-sync")({ sigint: true });
// ⭐Agrego saltos de linea para que se vea mas prolijo en la terminal 🫠
//🔺espero haber interpretado bien los enunciados 🤔

/*      EJERCICIO 1: ✔️ resuelto 
Declara dos variables numéricas numero1 y numero2. Pide al usuario
que ingrese dos números y muestra cuál es mayor o si son iguales.*/

console.log('\n ---- EJERCICIO 1 (clase 9) ---- \n');
let num_1=parseInt(prompt('Ingrese el primer numero: '));
let num_2=parseInt(prompt('Ingrese el segundo numero: '));
let respuesta='';
if (num_1>num_2){
    respuesta=`El primer numero ${num_1}, es mayor que el segundo ${num_2}`;
}else if (num_2>num_1){
    respuesta=`El segundo numero ${num_2}, es mayor que el primero ${num_1}`;
}else{
    respuesta=`El primer numero ingresado ${num_1} y el segundo ${num_2} son iguales`;
}
console.log(respuesta);

/*Ejercicio 2: ✔️ resuelto 
Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con
valores numéricos de tu elección. Pide al usuario que ingrese un
número y verifica si está dentro del rango definido por las constantes.*/

console.log('\n---- EJERCICIO 2 (clase 9) ---- \n');
const RANGO_MINIMO= 5;
const RANGO_MAXIMO=32;
let estado='';

let num_uno= parseInt(prompt('Por favor, ingrese un numero: '));
if (num_uno >= RANGO_MINIMO && num_uno<= RANGO_MAXIMO){
    estado='se encuentra dentro del rango establecido 🍀';
} else {
    estado='no se encuentra dentro del rango establecido 😞';
}

console.log(`El numero ingresado ${num_uno}, ${estado}`);

/*Ejercicio 3: ✔️ resuelto 
Declara dos variables booleanas condicion1 y condicion2. Pide al
usuario que ingrese dos valores booleanos (true o false) y muestra el
resultado de diversas combinaciones lógicas.*/

// OPCION 1 🟡🟡 este ejercicio funciona a veces, puede faltar un similar a lower, alguna otra validacion y creo que el ingreso me lo esta tomando como string, por algo no funciona siempre.

console.log('\n ---- EJERCICIO 3 opcion 1 🤐 ---- \n');

let valor1 = prompt("Ingrese un valor booleano true/false: ");
let valor2 = prompt("Ingrese otro valor booleano (true/false): ");

console.log(`\n El valor 1 ingresado por el usuario es: ${valor1}`);
console.log(` El valor 2 ingresado por el usuario: ${valor2}\n`);

console.log(`Con el uso de && es decir valor1 && valor2, el resultado es: ${valor1 && valor2}`);
console.log(`Con el uso de OR valor 1 || valor2 la combinacion da como resultado: ${valor1 || valor2}`);
console.log(`Al usar el valor logico NOT, el resultado es diferente al ingresado o sea opuesto a nuestro !valor1: ${!valor1}`);
console.log(`Al usar el valor logico NOT, el resultado es diferente al ingresado o sea opuesto a nuestro !valor2:${!valor2}`);

////////////////////////////////////////////////////////////
// OPCION 2 🟩🟩🟩Esta 2da opcion del ejercicio funciona pero reemplace la entrada por numeros porque  asi el ingreso de datos se toma como booleano, (aclaro a que corresponde cada uno) La desventaja es que el usuario puede ingresar cualquier numero o letra, solo faltarian esa validaciones.

console.log('\n ---- EJERCICIO 3 opcion 2 💚💚💚 😅 🫠 ---- \n');
console.log("El valor 0 corresponde a FALSO y el valor 1 es igual a VERDADERO \n")
let val1 = parseInt(prompt("Ingrese un valor numerico 0 (falso), o 1 (verdadero): "));
let val2 = parseInt(prompt("Ingrese otro valor numerico 0 (falso), o 1 verdadero): "));

console.log(`\n El 1°valor ingresado por el usuario es: ${val1}`);
console.log(` El 2° valor ingresado por el usuario: ${val2}\n`);

console.log(`Con el uso de && es decir valor1 && valor2, el resultado es: ${val1 && val2}`);
console.log(`Con el uso de OR valor 1 || valor2 la combinacion da como resultado: ${val1 || val2}`);
console.log(`Al usar el valor logico NOT, el resultado es diferente al ingresado o sea opuesto a nuestro !valor1: ${!val1}`);
console.log(`Al usar el valor logico NOT, el resultado es diferente al ingresado o sea opuesto a nuestro !valor2:${!val2}`);

/*Ejercicio 4: ✔️ resuelto 
Declara una variable nombre y pide al usuario que ingrese su nombre.
Verifica si el nombre ingresado es igual a tu nombre.*/
// ⭐el nombre de usuario se ingresa como un similar a capitalize, pero en este caso serian 2 funciones separadas para que coincida con la variable nombre. Se podia hacer con un similar a lower pero me gusta asi. 

console.log('\n ---- Ejercicio 4- clase 9 ---- \n');
let nombre='Ulises';
let usuario=prompt('Ingrese su nombre: ');
usuario=usuario.charAt(0).toUpperCase() + usuario.slice(1).toLowerCase();
let igualdad='';
if (nombre==usuario){
    igualdad=`El nombre ingresado ${usuario}, coincide con usuario registrado, tiene permiso para ingresar 🫡`;
}else{
    igualdad=`El nombre ingresado ${usuario}, no coincide con un usuario registrado, 
              No se permite su ingreso ❌💀❌ `;
}

console.log(igualdad);

/*Ejercicio 5: ✔️ resuelto 
Escribe un programa que pida al usuario que ingrese tres números y
determine cuál es el mayor de los tres.*/

console.log('\n ---- Ejercicio 5 (clase 9) ----\n ');
let numer1=parseInt(prompt('Ingrese el primer numero: '));
let numer2=parseInt(prompt('Ingrese el segundo numero: '));
let numer3=parseInt(prompt('Ingrese el tercer numero: '));
let mayor='';
if (numer1>numer2 && numer1>numer3){
    mayor=`El numero mayor es el primer valor que ingreso que es el numero ${numer1}`;
}else if(numer2>numer1 && numer2>numer3){
    mayor=`El numero mayor es el segundo numero que ingreso que corresponde al valor ${numer2}`;
}else{
    mayor=`El numero mayor es la tercer cifra que ingreso, que es el numero ${numer3}`;
}

console.log(mayor);

/*Ejercicio 6: ✔️ resuelto 
Pide al usuario que ingrese su edad y verifica si es mayor o menor de
edad. Muestra un mensaje personalizado según el caso.*/

console.log('\n ---- Ejercicio 6 clase 9 ---- \n');
const mayoredad=18;
let edad=parseInt(prompt('Ingrese su edad: '));
let ingreso='';
if(edad < mayoredad){
    ingreso=`Ud todavia es menor de edad 🐣`
}else{
    ingreso='Ud es mayor de edad ⌛'
}
console.log(ingreso);

/*Ejercicio 7: ✔️ resuelto 
Pide al usuario que ingrese su peso en kilogramos y conviértelo a
libras. Muestra el resultado con un mensaje. (Averigua como pasar de
kg a libras, Pista: 2.20462) */

console.log('\n ---- EJERCICIO 7 (clase 9) ---- \n');
const libra1k=2.20462;
let cdp=parseFloat(prompt('Por favor ingrese su peso en kg: '));
let conversion= cdp*libra1k;
console.log(`El peso ingresado ${cdp} kgs, corresponde a ${conversion.toFixed(2)} libras`)

/*Ejercicio 8: ✔️ resuelto 
Pide al usuario que ingrese las longitudes de los tres lados de un
triángulo. Determina y muestra si el triángulo es equilátero, isósceles o
escaleno. (Investiga sobre los triángulos para determinar la formula)*/

console.log('\n ---- EJERCICIO 8 (clase 9) ---- \n');
console.log('Dado un determinado triangulo 📐 ingrese el valor de cada uno de sus lados');
let formageom='';
let long1=parseFloat(prompt('La longitud en cm, de 1 de los lados es de: '));
let long2=parseFloat(prompt('La longitud en cm, del 2° de los lados es de: '));
let long3=parseFloat(prompt('La longitud en cm, del 3° de los lados es de: '));
if (long1==long2 && long2==long3){
    formageom='triangulo equilatero';
}else if(long1==long2 || long1==long3){
    formageom='triangulo isósceles';
}else{
    formageom='triangulo escaleno';
}
console.log(`De acuerdo a los valores ingresados, el poligono corresponde a un ${formageom} `);

/*Ejercicio 9: ✔️ resuelto 
Define una constante PI con el valor de pi (3.14159). Pide al usuario
que ingrese el radio de un círculo y calcula su área y perímetro
utilizando la constante PI. */

console.log('\n ---- EJERCICIO 9 (clase 9)---- \n');
const PI = 3.14159;

let radio= parseFloat(prompt('Cual es el valor del radio en cm, del circulo que quiere dibujar? ingreselo: '));
let perimetro= radio*2;
let area= PI * radio**2;
console.log(`De acuerdo al valor del radio proporcionado, el circulo tiene un perimetro de ${perimetro} cm y un area de ${area.toFixed(2)} cm`);

/*Ejercicio 10: ✔️ resuelto 
Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la
semana correspondiente. Si el número no está dentro de ese rango,
muestra un mensaje de error. */
// ⭐🔺ej con swich case 

console.log('\n ---- EJERCICIO 10 clase 9 ---- \n');
let dias=prompt('Elija un numero del 1 al 7 e ingreselo: ');

switch (dias) {
  case "1":
    console.log('El numero elegido corresponde al dia lunes');
    break;
  case "2":
    console.log('El numero elegido corresponde al dia Martes');
    break;
  case "3":
    console.log('El numero elegido corresponde al dia miercoles');
    break;
  case "4":
    console.log('El numero elegido corresponde al dia jueves');
    break;
  case "5":
    console.log('El numero elegido corresponde al dia viernes');
    break;
  case "6":
    console.log('El numero elegido corresponde al dia sabado');
    break;
  case "7":
    console.log('El numero elegido corresponde al dia domingo');
    break;  
  default:
    console.log('Error!!! ☠️  no esta dentro del rango establecido / No es un valor numerico');
}
console.log('\n')


//🔺🔺🔺 quise hacer ejemplo con if else y listas muy parecido a python pero no se va al else, si ingreso un numero fuera del rango, da un mensaje corresponde al dia undefined 😢

// console.log('\n ---- EJERCICIO 10 clase 9 ---- \n');
// let days=["lunes", "martes", "miercoles","jueves", "viernes","sabado", "domingo"]
// let numer=prompt('Elija un numero del 1 al 7 e ingreselo: ');
// let correlativo='';
// if(numer>=1 || numer<=7){
//     correlativo= `El numero ingresado ${numer}, corresponde al dia ${days[numer-1]}`
// }else{
//     correlativo='Error!! numero fuera del rango';
// }
// console.log(correlativo);

