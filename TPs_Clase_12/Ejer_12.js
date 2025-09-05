//  ----- ACTIVIDAD 12 --------

/*        Ejercicio 1: While
Crea un programa que solicite al usuario ingresar números continuamente hasta que el usuario ingrese un número negativo. Luego, imprime la suma de todos los números ingresados.  */
console.log('\n ⁘⁘⁘⁘⁘ Ejercicio 1 ⁘⁘⁘⁘⁘');

let suma_num=0;
let numero=parseInt(prompt('Ingrese un numero para sumar: '));
while(numero>=0){
  
  if(numero>=0 ){
    suma_num=suma_num+numero
  }
  numero=parseInt(prompt('Ingrese un numero para sumar: '));
}
console.log(`La suma de los numeros ingresados da como resultado ${suma_num}`);

/*        Ejercicio 2: 
Escribe un programa que solicite al usuario ingresar una contraseña. Si la contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la correcta. La contraseña correcta es "1234". */
console.log('\n ⁘⁘⁘⁘⁘ Ejercicio 2 Do While ⁘⁘⁘⁘⁘');
const contrasenia=1234;
let password;
let contador=0;
do{
  password=parseInt(prompt('Para entrar, ingrese la contraseña numerica de 4 digitos 🔐: '));
  if(password=== contrasenia){ 
  console.log('La contraseña es correcta ✅ 🔓 puede ingresar'); 
  }else{
  console.log('La contraseña es incorrecta ❌❌❌ Intentelo nuevamente');
  contador=contador+1
   if (contador==5){ 
    console.log('Alcanzaste el limite de intentos 😖');
    break
   }   
  }
}while(password!= contrasenia);

/*       Ejercicio 3: Ciclo For
Nuestra tarea es contar la cantidad de números impares que hay desde el número 0 hasta un número X (inclusive). Para esto, debes seguir los siguientes pasos:
1.Solicitar al usuario que ingrese un número X.
2.Inicializar una variable para contar los números impares.
3.Utilizar un ciclo for para recorrer los números desde 0 hasta X (inclusive).
4.Dentro del ciclo, verificar si el número es impar.
5.Si el número es impar, incrementar el contador de números impares.
6.Al finalizar el ciclo, imprimir en consola la cantidad de números impares encontrados.
7.Utiliza el operador módulo (%) para verificar si un número es impar.
8.Ejemplo de Ejecución: Si el usuario ingresa 10, el programa debe imprimir: “La cantidad de números impares desde 0 hasta 10 (inclusive) es: 5” */
console.log('\n ⁘⁘⁘⁘⁘ Ejercicio 3 ⁘⁘⁘⁘⁘');
let i=0;
impar=0;
let numero_x= parseInt(prompt('Ingrese un numero, que sera el rango maximo de numeros impares a evaluar: '));
console.log(`La cantidad total de numeros impares encontrados en el rango ${i} a ${numero_x} es de ⬇️`); 
for (i= 0; i<= numero_x; i++){
  if (i %2==1){
  impar=impar+1
  }
}
console.log(impar);


/*       Ejercicio 4: Ciclo For - Array 
Crear un programa que permita registrar las notas de varios estudiantes usando arrays y mostrarlas por pantalla:
1.Crear un array para almacenar las notas.
2.Define un array vacío llamado notas donde almacenaremos las notas de los estudiantes.
3.Pide al usuario que ingrese las notas de varios estudiantes una por una utilizando el método prompt.
4.Usa un bucle for para solicitar las notas y asignarlas directamente a posiciones específicas del array notas.
5.Imprime en consola las notas ingresadas usando el array notas.*/
console.log('\n ⁘⁘⁘⁘⁘ Ejercicio 4 ⁘⁘⁘⁘⁘');

let estudiantes= 8; //definimos la cantidad de estudiantes
let notas=[];
for (i= 1; i<= estudiantes; i++){
  calificaciones=parseInt(prompt('Ingrese la calificacion del estudiante: '));
  notas.push(calificaciones);
}
console.log(`Notas de los estudiantes: ${notas}`);

/*      Ejercicio 5: Uso de Arrays y Condicionales
Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se encuentra en el array. (Pueden desglosar en pasos el código si eso les facilita su desarrollo)  */
console.log('\n ⁘⁘⁘⁘⁘ Ejercicio 5 ⁘⁘⁘⁘⁘');

lista_a=[];
for(let i=1;i<=5;i++){
  let alumnos=prompt('Ingrese el nombre de alumnos: ');
  alumnos=alumnos.charAt(0).toUpperCase() + alumnos.slice(1).toLowerCase();
  lista_a.push(alumnos);
}
console.log(lista_a);

let nombre=prompt('🚸 Ingresa un nombre y verificamos si esta en la lista📃 🖋️ : ');
nombre=nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
if (lista_a.includes(nombre)){
  console.log(`El nombre ${nombre} se encuentra en la lista de alumnos`);
}else{
  console.log(`El nombre ${nombre} no se encuentra en el listado de alumnos inscriptos`);
} 

/*        Ejercicio 6: Iguales a 10 pero menores de 1000
Dada una matriz, recorrer sus valores y sumar solo los números que estén por encima o sean iguales a 10, pero menores que 1000. */
console.log('\n ⁘⁘⁘⁘⁘ Ejercicio 6 ⁘⁘⁘⁘⁘');
let matriz=[
  [10,3,2,1,4,7],
  [5,5,10,100,4],
  [5,125,10,1020,4],
  [5,5,5097,100,4]
];
let acumulador=0;
console.log('Los numeros validos son ');
for(let i=0;i< matriz.length;i++){
  for(let j=0;j< matriz[i].length;j++){
    if(matriz[i][j]>10 && matriz[i][j]< 1000){
     console.log(matriz[i][j]);
     acumulador=acumulador+matriz[i][j]     
  }
 }
}
console.log(`La suma de los numeros que cumplen la condicion da como resultado ${acumulador}`);

/*       Ejercicio 7: Matriz 5x5
Declara una variable que contenga una matriz de 5x5 llena de puros números enteros y positivos. Luego, escribe un algoritmo para sumar todos los números en la matriz.*/
console.log('\n ⁘⁘⁘⁘⁘ Ejercicio 7 ⁘⁘⁘⁘⁘');

let matriz_E=[
[8, 12, 3, 32, 100],
[45, 79, 11, 4,52],
[60, 63, 21, 39, 57],
[48, 42, 97, 45, 70],
[96, 22, 50, 7, 57]
];
let lista_u=[];
let suma=0; // acumulador
console.log('Numeros de la matriz ');
for(let i=0;i< matriz_E.length;i++){
  for(let j=0;j< matriz_E[i].length;j++){
    lista_u.push(matriz_E[i][j]);
    suma=suma+matriz_E[i][j]; 
  }
}
console.log(lista_u); // la totalidad de numeros la muestro en una lista
console.log(`La suma de todos los numeros de la matriz es de ${suma}`);

/*      Ejercicio 8: Rojo y Verde
Para este ejercicio vamos a generar dos funciones:
a) Una va a sumar los valores en la diagonal marcada en rojo.
b) La otra va a marcar los valores de la diagonal marcada en verde.
Ambas funciones deben devolver un resultado único. Rojo: 505
Verde 505 */
console.log('\n ⁘⁘⁘⁘⁘ Ejercicio 8 ⁘⁘⁘⁘⁘');
let matriz_d=[
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
[11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
[21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
[31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
[41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
[51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
[61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
[71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
[81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
[91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
];
function sumar_diagonalroja(matriz_d){
  let acumulador_rojo=0;
  let lista_roja=[];
  console.log('La suma de la diagonal roja ')
  for(let i=0;i<matriz_d.length;i++){
   lista_roja.push(matriz_d[i][i]);
   acumulador_rojo=acumulador_rojo+matriz_d[i][i]
   }
   console.log(lista_roja);
   console.log(`Da un valor total de ${acumulador_rojo}`);
   return acumulador_rojo
}
sumar_diagonalroja(matriz_d)
//
function ver_diagonalVerde(){
  let acumulador_verde=0;
  let lista_verde=[];
  console.log('La diagonal verde esta compuesta por los siguientes numeros ⬇️ ');
  for(let j=0;j<matriz_d.length;j++){
    lista_verde.push(matriz_d[j][9-j]);
    acumulador_verde=acumulador_verde+matriz_d[j][9-j]
}
   console.log(lista_verde);
   return acumulador_verde
}
ver_diagonalVerde()

/*       Ejercicio 9: Última aparición de un modelo de auto
Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 2, etc. Columna 0, día 1, columna 1, día 2, etcétera.
A) Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0.
B) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.
C) Por último, es necesario tener el total de gastos realizados en el mes.
 ✓ Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?
D) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.
 ✓ Posibles matrices para comprobar los resultados.  */
console.log('\n ⁘⁘⁘⁘⁘ Ejercicio 9 ⁘⁘⁘⁘⁘');
 //fila= semana  columnas empieza por dia lunes
 let gastos=[
  [1135, 2500,  900, 1600, 2800, 3650, 1100],
  [1750, 1890, 1900, 1300,  898, 1750, 2800],
  [1700, 1150, 1690, 1900, 1770, 4500, 2560],
  [ 800, 1250, 1430, 2100, 1980, 1270,  950]
 ];

// a --- total de gastos de la semana 2 o indice [1]
let suma_f=gastos[1].reduce(function(acumulador,valornuevo){
  return acumulador+valornuevo;
  },0)
console.log(`El total gastado en la 2da semana del mes es de ${suma_f} $`)

// b ---Total de gastos de un dia particular ejemplo dia jueves de la semana 3 [2][3] 
function gastoVariable(semana,dia){
    console.log(`El gasto total del jueves fue de ${gastos[semana][dia]} $`)
    return
}
gastoVariable(2,3)

// c --- total de gastos realizados en el mes
let gastoMensual=gastos.reduce(function (acumuladorsemanal,valorsemana){
  let gastosemana=valorsemana.reduce(function (acumuladordiario,valordia){
    return acumuladordiario+valordia;
    },0)
return acumuladorsemanal+gastosemana;    
},0)
console.log(`El gasto mensual dio un total de ${gastoMensual}`)

// d --- Cual fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.

function totalSemana(gastosPorSemana, numeroSemana) {
  let semana = gastosPorSemana[numeroSemana];
  let total = 0;
  for (let i = 0; i < semana.length; i++) {
    total= total + semana[i];
  }
  console.log(`El total gastado en la semana ${numeroSemana+ 1} es de ${ total} $`);
  return total;
}

//comparacion de las semanas
let totales=[
  totalSemana(gastos,0),
  totalSemana(gastos,1),
  totalSemana(gastos,2),
  totalSemana(gastos,3)
];
let semanaMayor = 0; // damos x hecho que la primer semana gasto mas y despues comparamos con las otras
for (let i = 1; i < totales.length; i++) {
  if (totales[i] > totales[semanaMayor]) {
    semanaMayor = i;
  }
}
console.log(`➡️ La semana con mayor gasto fue la semana ${semanaMayor + 1} con un total de ${totales[semanaMayor]} $ 💸`)

// Indicar el día que más gastos se realizaron.
let mayorGastoDiario = 0;
let semana = 0;
let día_de_semana = -1;

for (let i= 0; i < gastos.length; i++) {
  for (let j = 0; j < gastos[i].length; j++) {
    if(gastos[i][j]>mayorGastoDiario){
      mayorGastoDiario = gastos[i][j];
      semana=i;          
      día_de_semana=j;    
    }
  }
}
let diaDelMes = semana * 7 + día_de_semana + 1;
let nombreDias=["lunes","martes", "miercoles","jueves","viernes","sabado","domingo"];

console.log(`El mayor gasto diario fue de ${mayorGastoDiario} $ en el dia ${diaDelMes} del mes`);
console.log(`Que fue en la semana ${semana+1}, precisamente el dia ${nombreDias[día_de_semana]}`);


