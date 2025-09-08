/* Actividades:
  🔜  Ejercicio 1: Añadir personajes a una lista
Tienes una lista de personajes de videojuegos ["Link", "Zelda"]. Agrega los personajes "Mario" y "Luigi" al final de la lista utilizando el método adecuado. Luego, muestra el array actualizado.*/
console.log("\n ⁘⁘⁘⁘⁘⁘ Ejercicio 1 ⁘⁘⁘⁘⁘⁘")
let personajes=["Link", "Zelda"];
personajes.push("Mario", "Luigi");
console.log(`Lista de personajes actualizada: ${personajes}`);

/*🔜  Ejercicio 2: Eliminar al último invitado
Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"]. El último invitado no puede asistir. Elimina al último invitado y muestra quién fue eliminado y el estado actualizado de la lista.*/
console.log("\n ⁘⁘⁘⁘⁘⁘ Ejercicio 2 ⁘⁘⁘⁘⁘⁘");
let invitados=["Ana", "Juan", "Carlos", "Sofía"];
let eliminado=invitados.pop()
console.log(`Invitado que no puede asistir, eliminado de la lista ➡️ ${eliminado}`);
console.log(`Lista de invitados actualizada: ${invitados}`);

/*🔜  Ejercicio 3: Agregar y eliminar a la fila de mascotas
Tienes una fila de mascotas en una clínica veterinaria ["Perro", "Gato", "Conejo"]. Llega un "Hámster" que debe ser atendido primero. Agrega el "Hámster" al inicio de la lista. Luego, atiende a la primera mascota de la fila y muéstrala. Finalmente, muestra la lista actualizada.*/
console.log("\n ⁘⁘⁘⁘⁘⁘ Ejercicio 3 ⁘⁘⁘⁘⁘⁘");
let filaMascotas=["Perro", "Gato", "Conejo"];
filaMascotas.unshift("Hámster");
console.log(`El primer paciente de la fila es un ${filaMascotas[0]} que ingresa por una urgencia`);
filaMascotas.shift();
console.log(`Fila actualizada de pacientes, despues de la atencion de urgencia ${filaMascotas.join(' - ')}`);

/*🔜  Ejercicio 4: Convertir una lista de palabras en una frase
Tienes un array de palabras ["JavaScript", "es", "divertido"]. Une todas las palabras en una sola frase, separadas por un espacio, y muestra el resultado.*/
console.log("\n ⁘⁘⁘⁘⁘⁘ Ejercicio 4 ⁘⁘⁘⁘⁘⁘");
let palabras=["JavaScript", "es", "divertido"];
console.log(palabras.join(' '));

/*🔜  Ejercicio 5: Buscar la posición de un elemento
Tienes una lista de colores ["Rojo", "Verde", "Azul", "Amarillo"]. Encuentra y muestra el índice del color "Azul" en la lista.*/
console.log("\n ⁘⁘⁘⁘⁘⁘ Ejercicio 5 ⁘⁘⁘⁘⁘⁘");
let listaColores=["Rojo", "Verde", "Azul", "Amarillo"];
console.log(`El color azul se encuentra en la posicion ${listaColores.indexOf("Azul")} del array`);

/*🔜  Ejercicio 6: Buscar la última posición de un elemento repetido
Tienes una lista de números [2, 5, 7, 2, 8, 7]. Encuentra y muestra la última posición en la que aparece el número 7.*/
console.log("\n ⁘⁘⁘⁘⁘⁘ Ejercicio 6 ⁘⁘⁘⁘⁘⁘");
let listaNum=[2, 5, 7, 2, 8, 7];
console.log(`La ultima posicion en la que aparece un numero 7 corresponde al indice ${listaNum.lastIndexOf(7)} del array `);

/*🔜  Ejercicio 7: Verificar si una lista contiene un elemento
Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"]. Verifica si "Sushi" está en la lista y muestra un mensaje que confirme si está o no.*/
console.log("\n ⁘⁘⁘⁘⁘⁘ Ejercicio 7 ⁘⁘⁘⁘⁘⁘");
let lista_comidas=["Pizza", "Hamburguesa", "Tacos"];
  if(lista_comidas.includes("Sushi")){
    console.log('El Sushi, si se encuentra en la carta 🍣');    
  }else{
    console.log('El Sushi, no se encuentra en el listado de comidas');
}

/*🔜  Ejercicio 8: Extraer una parte de una frase
Tienes la frase "Los gatos son geniales". Extrae y muestra solo la parte "gatos" utilizando el método adecuado.*/
console.log("\n ⁘⁘⁘⁘⁘⁘ Ejercicio 8 ⁘⁘⁘⁘⁘⁘");
let fraseGatos="Los gatos son geniales";
console.log(`Vamos a extraer de la frase la palabra ➡️ ${fraseGatos.slice(4,9)}`);

/*🔜  Ejercicio 9: Eliminar espacios innecesarios
Tienes la siguiente cadena con espacios adicionales
" Hola, mundo! "
Elimina los espacios al inicio y al final y muestra la cadena resultante.*/
console.log("\n ⁘⁘⁘⁘⁘⁘ Ejercicio 9 ⁘⁘⁘⁘⁘⁘");
let cadena= " Hola, mundo! ";
console.log(`Cadena sin espacios adicionales al principio y al final ${cadena.trim()} `); 

/*🔜  Ejercicio 10: Reemplazar una palabra en una frase
Tienes la frase "Me gusta el invierno". Cambia la palabra "invierno" por "verano" y muestra la frase actualizada. */
console.log("\n ⁘⁘⁘⁘⁘⁘ Ejercicio 10 ⁘⁘⁘⁘⁘⁘");
let fraseTeamIndeciso="Me gusta el invierno";
console.log(`La frase actualizada es ${fraseTeamIndeciso.replace('invierno','verano')}`);

/*↪️ Ejercicios Extra 1 Gestión de inventario de una tienda
Eres encargado de una tienda y tienes un inventario inicial de productos. La lista de productos es:
let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
Debes realizar las siguientes acciones:
1.Agregar un nuevo producto "Impresora" al inventario usando el método adecuado.
2.Comprobar si "Tablet" está en el inventario y mostrar un mensaje adecuado.
3.Eliminar el primer producto del inventario.
4.Mostrar la lista actualizada de productos en una sola cadena, separados por comas*/
console.log("\n ♾️♾️♾️♾️ Ejercicio extra 1 ♾️♾️♾️♾️ ");
let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
inventario.push("Impresora")
console.log(`Inventario renovado: ${inventario.join(' - ')}`);

if(inventario.includes("Tablet")){
  console.log('El producto tablet, si se encuentra en el inventario')
}else{
  console.log('El producto tablet, no se encuentra en el inventario de existencias')
}

console.log(`El producto eliminado del inventario es ${inventario.shift()}`);

console.log(`Lista actualizada de productos: ${inventario.join()}`)

/*↪️ Ejercicios Extra 2 Clasificación de palabras según su longitud
Tienes una lista de palabras en una oración. Debes:
1.Dividir la oración en palabras individuales.
2.Clasificar las palabras en dos categorías:
      -Cortas (menos de 5 letras)
      -Largas (5 letras o más)
3.Mostrar ambas listas de palabras clasificadas.
4.La oración es: "JavaScript es un lenguaje poderoso y versátil".*/
console.log("\n ♾️♾️♾️♾️ Ejercicio extra 2 ♾️♾️♾️♾️ ");
let oracion="JavaScript es un lenguaje poderoso y versátil";
console.log(`Cadena oracion en palabras individuales ${oracion.split(' ')}`);

//pasar la cadena a lista
let listaCadena=oracion.split(' ');
//uso el metodo filter de arrays + funcion flecha
let breves=listaCadena.filter(palab=>palab.length<5);
console.log(`Las palabras que tienen menos de 5 letras son: ${breves}`);
let largas=listaCadena.filter(palab=>palab.length>5);
console.log(`Las palabras que tienen mas de 5 letras son: ${largas}`);

/*↪️ Ejercicios Extra 3 Simulador de una cola de atención al cliente
Simula una cola de atención al cliente donde los clientes llegan y son atendidos uno por uno. Tienes una lista inicial de clientes en espera y un bucle que los atiende de a uno. Realiza lo siguiente:
1.Mientras haya clientes en la cola, atiende a cada uno y muéstralo por consola.
2.Si el nombre del cliente es "VIP", muéstralo con prioridad indicando un mensaje especial.
3.Al final, muestra cuántos clientes fueron atendidos en total.
Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"]. */
console.log("\n ♾️♾️♾️♾️ Ejercicio extra 3 ♾️♾️♾️♾️ ");
let ListaClientes=["Ana", "Carlos", "VIP", "Sofía", "Juan"];
console.log(`La lista de clientes en espera es: ${ListaClientes}`);
console.log(`Posicion de cliente VIP: ${ListaClientes.indexOf("VIP")}`);
ListaClientes.splice(2,1);
ListaClientes.unshift("VIP")

console.log('Orden de atencion de los clientes:');
for(let i=0;i<ListaClientes.length;i++){
  if(ListaClientes[i]==="VIP"){
  console.log('El cliente VIP es prioritario en su atencion');
}
console.log(ListaClientes[i]);
}
console.log(`La cantidad de clientes atendidos fue de ${ListaClientes.length}`);






