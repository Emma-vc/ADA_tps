// Actividades:

/* -----Ejercicio 1: ¿Positivo, negativo o cero?
Consigna:
Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa que le pida al usuario un número cualquiera. El programa deberá analizar si el número ingresado es positivo, negativo o cero. Utiliza estructuras if para resolverlo y muestra un mensaje explicativo en cada caso.*/
console.log('\n ⁘⁘⁘⁘⁘ Ejercicio 1 ⁘⁘⁘⁘⁘')
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


/* -----Ejercicio 2: Semáforo inteligente
Consigna: Vamos a programar un semáforo. Escribe un programa que le pida al usuario ingresar un color del semáforo: rojo, amarillo o verde. Dependiendo del color ingresado, el programa debe imprimir un mensaje con la acción correspondiente:
Rojo: "Alto, no puedes avanzar."
Amarillo: "Precaución, prepárate para avanzar."
Verde: "Avanza con seguridad." Si el usuario ingresa un color inválido, el programa debe mostrar un mensaje: "Color no reconocido, ingresa rojo, amarillo o verde." Utiliza un switch para resolver este ejercicio.*/
console.log('\n ⁘⁘⁘⁘⁘ Ejercicio 2 ⁘⁘⁘⁘⁘')
let color= prompt('Ingrese un color del semaforo 🔴🟡🟢: ')
color=color.charAt(0).toUpperCase() + color.slice(1).toLowerCase();
switch (color){
    case "Rojo":
    console.log('Alto, no puedes avanzar');
    break;
    case "Amarillo":
    console.log('Precaución, prepárate para avanzar');
    break;
    case "Verde":
    console.log('Avanza con seguridad');
    break;
    default:
    console.log('Color no reconocido, ingresa rojo, amarillo o verde');
}    

/*------Ejercicio 3: ¿Sabes contar?
Consigna: Crea un programa que le pida al usuario un número positivo. El programa deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola. Usa un ciclo for para realizar la tarea.*/
console.log('\n ⁘⁘⁘⁘⁘ Ejercicio 3 ⁘⁘⁘⁘⁘')
let positivo=parseInt(prompt('Ingrese un numero positivo: '));
console.log("Contamos hasta: " + positivo);
for (let i = 1; i <= positivo; i++) {
  console.log(i);
}

/*------Ejercicio 4: ¿Es par o impar?
Consigna: Los números pueden ser pares o impares. Escribe un programa que le pida al usuario un número y determine si es par o impar. Muestra un mensaje explicativo indicando qué significa cada caso.*/
console.log('\n ⁘⁘⁘⁘⁘ Ejercicio 4 ⁘⁘⁘⁘⁘')
let pares= parseInt(prompt('Ingrese un numero y determinaremos si es par o impar:  '));
let valor='';
if(pares %2==0){
    valor=`El numero ingresado ${pares} es par`;
}else{
    valor=`El numero ingresado ${pares} es impar`;
}
console.log(valor);

/*------Ejercicio 5: Encuentra los números pares entre dos valores
Consigna: Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El programa debe mostrar todos los números pares que se encuentran entre esos dos valores, incluyendo los límites si son pares. Utiliza un ciclo for para recorrer los números entre el inicio y el fin. Si el número inicial es mayor que el final, el programa debe mostrar un mensaje indicando que los valores son inválidos.*/
console.log('\n ⁘⁘⁘⁘⁘ Ejercicio 5 ⁘⁘⁘⁘⁘')
let inicio=parseInt(prompt('Ingrese el 1er numero entero: '));
let fin=parseInt(prompt('Ingrese el 2do numero entero: '));

if (inicio<fin){
  console.log(`Los numeros pares en el rango ${inicio} - ${fin} son: `);
  for (let i= inicio; i<= fin; i++) {
   if (i%2==0){
    console.log(i);
  }
 }
}else{
  console.log(`Los numeros pares en el rango ${inicio} - ${fin} son: `);
  for (let i= inicio; i>= fin; i--) {
   if (i%2==0){
    console.log(i);
  }
 }
}

// 🟡🟡 son dos bloques de condicionales porque no sabria como expresar i++ e i-- en una sola linea o si se puede de otra forma.

/* ------Ejercicio 6: La tabla de multiplicar
Consigna: Crea un programa que le pida al usuario un número y luego imprima su tabla de multiplicar desde el 1 hasta el 10. Usa un ciclo for.*/
console.log('\n ⁘⁘⁘⁘⁘ Ejercicio 6 ⁘⁘⁘⁘⁘')
let num= parseInt(prompt('Ingresa un numero y te muestro su tabla de multiplicar: '))
console.log(`Tabla de multiplicar del ${num} 🧮`);
for(let i=1; i<=10;i++){
  let resultado=num*i;   
  console.log(`${num} x ${i}: ${resultado}`);
}

/*------ Ejercicio 8: Encuentra los múltiplos de un número
Consigna: Escribe un programa que le pida al usuario un número entero positivo y muestre todos los múltiplos de ese número entre 1 y 100. Utiliza un ciclo for para resolverlo.*/
console.log('\n ⁘⁘⁘⁘⁘ Ejercicio 8 ⁘⁘⁘⁘⁘')
let ingreso=parseInt(prompt('Por favor ingresa un numero positivo y entero y te doy sus multiplos : '));
console.log(`Los Multiplos de ${ingreso} son 😃`);
for (let i =1; i<=100;i++){
  if(i%ingreso===0){
    console.log(i);
   }
}
// si i es divisible por el numero ingresado con resto cero es multiplo


/* ------ Ejercicio 9: Cuenta regresiva para el despegue
Consigna: Crea un programa que simule la cuenta regresiva para el lanzamiento de un cohete. El programa debe contar desde 10 hasta 0 e imprimir "¡Despegue!" al final. Usa un ciclo for para realizar la cuenta regresiva.*/
console.log('\n ⁘⁘⁘⁘⁘ Ejercicio 9 ⁘⁘⁘⁘⁘');
console.log('\n Atencion!!! cuenta regresiva para el lanzamiento 🚀');
for (let i =10; i>=0;i--)
  console.log(i);
  console.log("¡Despegue! 🎇🎉✨");

/*   Ejercicio 7: Calculadora simple
Consigna: Crea un programa que le pida al usuario dos números y una operación matemática a realizar: suma, resta, multiplicación o división. Según la operación ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario ingresa una operación inválida, el programa debe mostrar un mensaje de error. Usa switch para resolverlo.*/
console.log('\n ⁘⁘⁘⁘⁘ Ejercicio 7 ⁘⁘⁘⁘⁘')
// 🎵con macht case
//
let num1=parseFloat(prompt('Ingrese el 1er valor: '));
let num2=parseFloat(prompt('Ingrese el 2do valor: '));
let operacion= prompt('Que operacion matematica desea resolver con  los numeros ingresados? sumar, restar, multiplicar, o dividir?: ');
operacion=operacion.toLowerCase();
let resolucion;
switch (operacion) {
  case 'sumar':
    resolucion= num1 + num2;
    break;
  case 'restar':
    resolucion= num1 - num2;
    break;
  case 'multiplicar':
    resolucion= num1 * num2;
    break;
  case 'dividir':
    resolucion= num1 / num2;
    break;
  default:
    resolucion='Error!!!!! Operacion invalida ❌❌';
}
console.log('Resultado:', resolucion);

//😃con while

let menu=prompt(
  'Ingrese una opcion:\n 1-Sumar \n 2-Restar \n 3-Multiplicar \n 4- Dividir \n -5 Salir');
let nume1=parseFloat(prompt('Ingrese el 1er valor: '));
let nume2=parseFloat(prompt('Ingrese el 2do valor: '));
let respuesta;
while(menu !=5){
  if (menu==1){
    respuesta=nume1+nume2
  }else if (menu==2){
    respuesta=nume1-nume2
  }else if(menu==3){
    respuesta=nume1*nume2
  }else if(menu==4){
    respuesta=nume1/nume2
  }else{
    console.log('Opcion invalida');
  }
  console.log('Respuesta:', respuesta);
  menu=prompt(
  'Ingrese una opcion:\n 1-Sumar \n 2-Restar \n 3-Multiplicar \n 4- Dividir \n -5 Salir');
}


/*   
           Ejercicio 10: Adivina el número
Consigna: Crea un programa donde la computadora seleccione un número al azar entre 1
y 10. Luego, pide al usuario que adivine el número hasta 3 intentos. Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén los intentos restantes. Si no acierta después de los 3 intentos, muestra el número secreto. Usa un for para resolver este ejercicio */
// en este ej se utiliza un similar a randint de python
//console.log('\n ⁘⁘⁘⁘⁘ Ejercicio 10 ⁘⁘⁘⁘⁘')
