// ----- ACTIVIDAD 13 -----

/*     EJERCICIO 1:
 Área de un triángulo (función declarada) (Ejercicio entrevista) Crea una función declarada llamada calcularAreaTriangulo que reciba dos parámetros: la base y la altura de un triángulo. La función debe devolver el área del triángulo.*/
console.log('\n ※※※※ EJERCICIO 1 (clase 13) ※※※※ \n');

function calcularAreaTriangulo(base,altura){
  const area=base*altura/2
  console.log(`El calculo del area del triangulo es ${area}`);
  return area;
}
calcularAreaTriangulo(3,7);

/*     EJERCICIO 2
 Número mayor (función expresada) Crea una función expresada llamada encontrarMayor que reciba dos números como parámetros y devuelva el número mayor. */
console.log('\n ⁘⁘⁘⁘⁘⁘ EJERCICIO 2 (numero mayor) ⁘⁘⁘⁘⁘⁘ \n');

let encontrarMayor= function(a,b){
  let numeroMayor=Math.max(a,b)
  console.log(`El numero mayor es ${numeroMayor}`)
  return numeroMayor
}
encontrarMayor(2,9)

/*     EJERCICIO 3
 Mensaje global y local Declara una variable global llamada saludoGlobal con el valor "Hola desde el scope global". Luego, crea una función llamada mostrarMensaje que declare una variable local llamada saludoLocal con el valor "Hola desde el scope local" y que imprima ambos mensajes.*/
console.log('\n ⁘⁘⁘⁘⁘⁘ EJERCICIO 3 (clase 13) ⁘⁘⁘⁘⁘⁘ \n');

let saludoGlobal="Hola desde el scope global 🌍";
function mostrarMensaje(){
  let saludoLocal="Hola desde el scope local🫡"
  console.log(`${saludoGlobal} \n ${saludoLocal}`);
  return saludoGlobal + saludoLocal
}
mostrarMensaje();

/*     EJERCICIO 4:
 Número par o impar Crea una función declarada llamada esPar que reciba un número y devuelva "Es par" si el número es par o "Es impar" si el número es impar. Usa una variable local para guardar el resultado. */
 console.log('\n ⁘⁘⁘⁘⁘⁘ EJERCICIO 4 (clase 13) ⁘⁘⁘⁘⁘⁘ \n');

function esPar(numero){
  let resultado; 
  if(numero%2==0){
      resultado='El numero es par'
    }else{
      resultado='El numero es impar'
  } 
    console.log(resultado)
    return resultado;  
}
esPar(8)

/*    EJERCICIO 5: 
Concatenar nombres (función expresada)
Crea una función expresada llamada concatenarNombres que reciba dos nombres (nombre y apellido) como parámetros y devuelva el nombre completo concatenado.*/
console.log('\n ⁘⁘⁘⁘⁘⁘ EJERCICIO 5 (concatenar nombres) ⁘⁘⁘⁘⁘⁘ \n');
let concatenarNombres=function(nombre1,nombre2){
    let identidad=nombre1 +' '+ nombre2
    console.log(`La persona se llama ${identidad}`)
    return identidad
}
concatenarNombres('juan','Perez')

/*----- EJERCICIO 6: Convertir a minutos Crea una función declarada llamada convertirHorasAMinutos que reciba un número de horas como parámetro y devuelva el total en minutos.*/
console.log('\n ⁘⁘⁘⁘⁘⁘ EJERCICIO 6 (clase 13) ⁘⁘⁘⁘⁘⁘ \n');

function convertirHorasAMinutos(horas){
  let minutos= horas*60
  console.log(`La cantidad de horas ingresadas ↪ ${horas} hs corresponden a ${minutos} minutos`)
  return minutos  
}
convertirHorasAMinutos(5)

/*------EJERCICIO 7: 
Mensaje según la hora
Declara una variable global llamada horaActual (puedes asignarle un valor fijo). Crea una función declarada llamada mostrarSaludo que imprima "Buenos días" si la hora es menor a 12, "Buenas tardes" si es menor a 18, o "Buenas noches" en cualquier otro caso.*/
console.log('\n ⁘⁘⁘⁘⁘⁘ EJERCICIO 7 (mostrarSaludo segun la hora) ⁘⁘⁘⁘⁘⁘ \n');

let horaActual=parseInt(prompt('Ingrese que hora es, solo la hora: '));
console.log(`Hora actual: ${horaActual} hs`);
function mostrarSaludo(){
   if (horaActual<12){
    console.log('Buenos dias!!! 🥐🍵 ')
   } else if(horaActual>12 && horaActual<18){ 
    console.log('Buenos tardes 🧑🏻💻 ')
   }else{
    console.log('Buenos noches 🥗🍗🍰 ')
   }
}
mostrarSaludo()


/*      EJERCICIO 8:
 Convertir grados Celsius a Fahrenheit (Ejercicio entrevista) Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit.*/
console.log('\n ⁘⁘⁘⁘⁘⁘ EJERCICIO 8 (Convertir °C a °F) ⁘⁘⁘⁘⁘⁘\n');
const convertirCelsiusAFahrenheit=function(celsius){
    if(typeof celsius !== "number") {
       throw new Error("Solo debe ingresar numeros");
    }
    let valorFinal=(celsius*9/5) + 32
    console.log(`Los ${celsius} grados centigrados equivalen a ${valorFinal} grados Fahrenheit`)
    return valorFinal
}
convertirCelsiusAFahrenheit(11)

/*-----EJERCICIO 9:
 Contar hasta un número Crea una función declarada llamada contarHasta que reciba un número y use un bucle para imprimir todos los números desde 1 hasta ese número.*/
console.log('\n ⁘⁘⁘⁘⁘⁘ EJERCICIO 9 (clase 13) ⁘⁘⁘⁘⁘⁘ \n');

function contarHasta(){
  let listaNum=[];
  let numeroElegido=parseInt(prompt('Elija un numero maximo: '))
  console.log(`Numeros desde 1 hasta el maximo designado ${numeroElegido}`);
  for(let i=1;i<=numeroElegido;i++){
    listaNum.push(i);    
    }
  console.log(listaNum);
  }
contarHasta()

/*      EJERCICIO 10: 
Factorial de un número (Ejercicio entrevista) Crea una función expresada llamada calcularFactorial que reciba un número y devuelva su factorial. Fórmula del factorial:Un número factorial es el resultado de multiplicar un número entero positivo por todos los enteros menores que él, hasta llegar a 1.*/
console.log('\n ⁘⁘⁘⁘⁘⁘ EJERCICIO 10 (Factorial) ⁘⁘⁘⁘⁘⁘ \n');
let calcularFactorial=function(num){
  if(typeof num !== "number") {
       throw new Error("Error!! Solo debe ingresar numeros");
    }
  let acumulador=1;
  for(let i=num;i>=1;i--){
  acumulador=acumulador*i
  }
  console.log(`El factorial de ${num} es igual a ${acumulador}`)
  return acumulador
}
calcularFactorial(6)