             /*   Actividades:
Ejercicio 1: Crea un nuevo array con los cuadrados de los números
Imagina que tienes una lista de números, como [2, 4, 6, 8]. Tu objetivo es crear una nueva lista donde cada número de la lista original se haya transformado en su cuadrado. Por ejemplo, el número 2 debería convertirse en 4, el número 4 en 16, y así sucesivamente. Al final, imprime la nueva lista.*/
console.log('⁙⁙⁙⁙⁙⁙ Ejercicio 1 numeros dobles ⁙⁙⁙⁙⁙⁙');
let listaNumeros=[2, 4, 6, 8];
let numerosDobles= listaNumeros.map((numerosDobles)=>numerosDobles*2)
console.log(`El doble de los numero de la lista son: ${numerosDobles}`);

/*Ejercicio 2: Filtra los números pares de una lista
Tienes una lista con varios números: [1, 2, 3, 4, 5, 6]. Queremos separar y guardar únicamente los números pares en una nueva lista. Los números pares son aquellos que se pueden dividir entre 2 sin dejar residuo. Una vez que hayas creado la nueva lista, muéstrala en la consola.*/
console.log('⁙⁙⁙⁙⁙⁙ Ejercicio 2 numeros pares ⁙⁙⁙⁙⁙⁙');
let numeros=[1, 2, 3, 4, 5, 6];
let numerosPares=numeros.filter((numero)=> numero%2===0)
console.log(`Los numeros pares filtrados de la lista son: ${numerosPares}`);

/*Ejercicio 3: Encuentra el primer número mayor a 10
Tienes una lista de números [5, 8, 12, 20, 3]. Queremos encontrar el primer número de la lista que sea mayor a 10. Recuerda que el resultado debe ser únicamente el primer número que cumpla esta condición, no todos los números que lo hagan.*/
console.log('⁙⁙⁙⁙⁙⁙ Ejercicio 3 numero mayor ⁙⁙⁙⁙⁙⁙');
let numeroMayor=[5, 8, 12, 20, 3]
let numEncontrado=numeroMayor.find((x)=>x>10)
console.log(`El primer numero encontrado mayor a 10 es: ${numEncontrado}`);

/*Ejercicio 4: Calcula la suma total de los números
Dada una lista de números [1, 2, 3, 4], necesitamos calcular el resultado de sumarlos todos juntos. Es decir, deberías obtener 1 + 2 + 3 + 4. Al finalizar, imprime el total en la consola.*/
console.log('⁙⁙⁙⁙⁙⁙ Ejercicio 4 suma total ⁙⁙⁙⁙⁙⁙');
let num=[1, 2, 3, 4]
let sumaNum=num.reduce((Acc,num)=> Acc+num)
console.log(`La suma total de numeros da un valor de: ${sumaNum}`);

/*Ejercicio 5: Recorre una lista e imprime cada elemento
Tienes una lista de frutas ['manzana', 'banana', 'cereza']. Tu tarea es recorrer la lista y mostrar el nombre de cada fruta en la consola, una por una.*/
console.log('⁙⁙⁙⁙⁙⁙ Ejercicio 5 lista de frutas ⁙⁙⁙⁙⁙⁙');
let frutas=['manzana', 'banana', 'cereza']
let cadaFruta=frutas.forEach((f)=>console.log(f))

/*Ejercicio 6: Agrega un prefijo y un sufijo a cada palabra
Supongamos que tienes una lista de palabras ['hola', 'mundo', 'javascript']. Queremos transformarlas para que cada palabra tenga un prefijo "¡" y un sufijo "!". Por ejemplo, la palabra "hola" se debería convertir en "¡hola!".*/
console.log('⁙⁙⁙⁙⁙⁙ Ejercicio 6 prefijo-sufijo ⁙⁙⁙⁙⁙⁙');
let palabras=['hola', 'mundo', 'javascript'];
let palabraModificada=palabras.map((x)=> '¡'+ x +'!');
console.log(`Palabras con sufijo y prefijo 😀: ${palabraModificada.join(' ')}`);

/* Ejercicio 7: Filtra nombres que empiecen con la letra 'A'
Dada una lista de nombres ['Ana', 'Luis', 'Andrea', 'María'], queremos quedarnos solo con los nombres que comiencen con la letra 'A'. Por ejemplo, el nombre 'Luis' no debería estar en el resultado porque empieza con 'L'.*/
console.log('⁙⁙⁙⁙⁙⁙ Ejercicio 7 filtrador de nombres ⁙⁙⁙⁙⁙⁙');
let nombresMixtos=['Ana', 'Luis', 'Andrea', 'María'];
let nombresA=nombresMixtos.filter((n)=>n[0]=="A");
console.log(`Los nombres que empiezan con la letra A son: ${nombresA}`);

/* Ejercicio 8: Busca un nombre específico
Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos saber si el nombre 'Laura' está presente en la lista y, si lo está, deberías devolverlo.*/
console.log('⁙⁙⁙⁙⁙⁙ Ejercicio 7 buscador de nombres ⁙⁙⁙⁙⁙⁙');
let nombreBuscado=['Carlos', 'Daniel', 'Laura', 'Ana'];
let nombreEncontrado=nombreBuscado.find((x)=>x=="Laura");
console.log(`Nombre buscado ${nombreBuscado[2]} resultado de la busqueda = ${nombreEncontrado}`);

/* Ejercicio 9: Cuenta la cantidad total de letras en una lista de palabras
Imagina que tienes una lista de palabras ['sol', 'luna', 'estrella']. Queremos saber cuántas letras hay en total entre todas las palabras. Por ejemplo, 'sol' tiene 3 letras, 'luna' tiene 4, y 'estrella' tiene 8. La suma total debería ser 15.*/
console.log('⁙⁙⁙⁙⁙⁙ Ejercicio 8 contador de letras ⁙⁙⁙⁙⁙⁙');
let universo=['sol', 'luna', 'estrella'];
let sumaUniverso=universo.reduce((acc,item)=> acc+item.length,0);
console.log(`El total de letras que contiene la lista universo es de: ${sumaUniverso}`);

/* Ejercicio 10: Construye una frase a partir de una lista de palabras
Dada la lista ['Me', 'gusta', 'aprender', 'JavaScript'], queremos construir una frase completa concatenando cada palabra en orden, separadas por espacios. Al final, deberíamos obtener el texto 'Me gusta aprender JavaScript'.*/
console.log('⁙⁙⁙⁙⁙⁙ Ejercicio 10 frase ⁙⁙⁙⁙⁙⁙');
let palabraSueltas=['Me', 'gusta', 'aprender', 'JavaScript'];
console.log(`La frase es: ${palabraSueltas.join(' ')}`);

/* Ejercicios Extra 1:
Encuentra los nombres más cortos y transforma su formato
Tienes una lista de nombres de personas: ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo']. Queremos realizar varias tareas con esta lista:
- Primero, filtra los nombres que tengan menos de 5 letras.
- Luego, transforma los nombres resultantes para que estén en mayúsculas.
- Finalmente, construye una frase que diga: "Los nombres seleccionados son: [nombres]", donde [nombres] sea la lista resultante unida por comas.
Al final, imprime la frase en la consola.*/
console.log('⁙⁙⁙⁙⁙⁙ Ej extra 1 modificar nombres ⁙⁙⁙⁙⁙⁙');
let lista=['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo'];
//Punto 1
let nombresBreves=lista.filter((n)=>n.length<5);
console.log(`Nombres que tienen menos de 5 letras: ${nombresBreves.join('-')}`);

// el punto 2 no se a que se refiere solo al resultado del punto anterior o a la lista inicial?
let nombreC=nombresBreves.join(' - ');
console.log(`Nombres en mayusculas ➡️ ${nombreC.toUpperCase()}`);

//Punto 3 🤔
console.log(`Los nombres seleccionados son ⨠ ${nombresBreves.join(', ')}`);

/* Ejercicios Extra 2:
Calcula el total de ventas de productos seleccionados Supón que tienes una lista de productos con sus precios en formato de objeto:
Queremos:
- Punto 1 Seleccionar los productos cuyo precio sea mayor o igual a 50.
- Punto 2 Obtener solo los nombres de esos productos.
- Punto 3 Calcular el precio total sumando los precios de los productos 
  seleccionados.
- Punto 4 Imprime el total y los nombres de los productos seleccionados en la 
   consola.*/
console.log('⁙⁙⁙⁙⁙⁙ Ej extra 2 calculos ⁙⁙⁙⁙⁙⁙');
const products = [
{ name: 'Laptop', price: 1000 },
{ name: 'Mouse', price: 25 },
{ name: 'Teclado', price: 50 },
{ name: 'Monitor', price: 200 },
{ name: 'Audífonos', price: 75 }
];
//Punto 1
let precioMayor=products.filter((p)=> p.price>=50);
console.log(`Productos cuyo precio es mayor o igual a 50: ${precioMayor.map(p=>p.price)}`);

//punto 2 
let nombreProd=products.filter((p)=> p.price>=50);
console.log(`Nombres de los productos cuyo precio es mayor o igual a 50: ${nombreProd.map(p=>p.name)}`);

//Punto 3
let sumaprod=precioMayor.reduce((acumulador,p)=>acumulador+p.price,0);
console.log(`Suma de los productos seleccionados: ${sumaprod} $`);

//Punto 4
console.log(`Productos seleccionados: ${nombreProd.map(p=>p.name)} su precio total es de ${sumaprod} $`);


/* Ejercicios Extra 3:😵
Encuentra la película más corta y analiza los títulos largos Supón que tienes una lista de películas con su duración en minutos:
Queremos:
- Punto 1 Encontrar la película más corta en duración.
- Punto 2 De las películas restantes, quedarnos con aquellas cuyo título tenga más
    de 10 caracteres.
- Punto 3 Crear una lista de los títulos largos en minúsculas.
- Punto 4 Imprime en la consola:
         El título de la película más corta.
         La lista de títulos largos en minúsculas. */
console.log('⁙⁙⁙⁙⁙⁙ Ej extra 3 peliculas ⁙⁙⁙⁙⁙⁙');
const movies = [
{ title: 'El Señor de los Anillos', duration: 200 },
{ title: 'Inception', duration: 148 },
{ title: 'Matrix', duration: 136 },
{ title: 'Toy Story', duration: 81 },
{ title: 'Coco', duration: 105 }
];
//Punto 1 y punto 4a
let peliCorta=movies.reduce((acc,elemento)=>elemento.duration<acc.duration? elemento :acc);
console.log(`La pelicula de mas corta duracion es ${peliCorta.title} con una duracion de ${peliCorta.duration} minutos`);

//Punto 2
let tituloLargo=movies.filter((p)=>p.title.length>10);
console.log('Peliculas cuyo titulo tiene mas de 10 caracteres:')
tituloLargo.forEach((pelicula)=>console.log(pelicula.title))

//Punto 3=4b
console.log('Peliculas titulo largo en minusculas:');
tituloLargo.forEach((pelicula)=>console.log(pelicula.title.toLowerCase()))

