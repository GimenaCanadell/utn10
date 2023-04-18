//Ejercicio 1

const numrand = []; //Declaración de array vacío

for (i = 0; i <= 5; i++) {
  //Ciclo for para generar 6 números aleatorios
  let randn = Math.floor(Math.random() * 98 + 1); //Generación de numero aleatorio entero entre 1 y 99 guardado en randn
  numrand.push(randn); //Cada numero aleatorio generado se guarda en el array en su última posición
}
console.log(numrand); //Muestro el array con los números generados
numrand.sort(function comparar(a, b) {
  return a - b;
}); //Se ordena el array con la función sort complementada con una comparación
console.log(numrand); //Muestro el array ordenado

let lista = document.getElementById("lista1"); //Llamo por el DOM a la <ul> y la refiero a la variable lista para facilitar el manejo posterior

for (i = 0; i < numrand.length; i++) {
  //Recorro el vector generado desde la pos 0 hasta el final de su longitud
  let item = document.createElement("li"); //Se crea un elemento de tipo item de lista <li>
  item.appendChild(document.createTextNode(numrand[i])); //se le crea un nodo de texto dentro del mismo y se asigna el valor en la posición
  lista.appendChild(item); //actual del array y por úlitmo se lo mete dentro de la <ul> como elemento <li> con valor
}

//-----------------------------------------------------------------------------
//Ejercicio 2

const ej2 = [1, 2, 3, 4, 5, 6]; // Array de la consigna

let ni = 0; // Variable para registrar y controlar el recorrido de los ciclos

while (ni < ej2.length) {
  //Con while, mientras que la variable de control no sea mayor al tamaño del array
  alert("2A- Usando while: " + ej2[ni]); //Se imprime el valor en la posicion actual del recorrido
  ni += 1; // Se incrementa la variable de control del recorrido (vital para evitar el bucle infinito)
}

for (ni = 0; ni < ej2.length; ni++) {
  // Ciclo for que recorre el array un paso a la vez hasta el final
  alert("2B- Usando for: " + ej2[ni]); //Imprime el valor en la posición actual del recorrido
}

ej2.forEach((Element) => alert("2C- Usando forEach: " + Element)); // La función forEach ejecuta la función deseada por cada elemento en el array
// (en este caso el alert que muestra el elemento actual)

ej2.forEach((Element) => alert("2D- Sumando +1 : " + (Element + 1))); //Lo mismo que el punto anterior pero en este caso al "imprimir" o mostrar
// la salida lo hace sumando uno en ese momento (no modifica el valor original)
const ej2b = []; //genero nuevo array vacío para la copia
ej2.forEach((Element) => ej2b.push(Element + 1)); //Por cada elemento en el array original lo copia metiendolo en el final del nuevo array
alert("2E- : " + ej2b); //sumándole uno y luego lo muestra por pantalla

let sum = 0; //variable para acumular los valores antes de calcular promedio
ej2.forEach((Element) => (sum += Element)); //Por cada elemento se suma su valor en la variable acumuladora
alert("2F- Promedio usando forEach: " + sum / ej2.length); // se muestra el promedio usando forEach

const sumador = (sum, currentValue) => sum + currentValue; //variación usando reduce, creo el método sumador para acumular los valores
// y combinarlo con un reduce
alert("2F- Promedio usando reduce : " + ej2.reduce(sumador) / ej2.length); //promedio usando reduce

//-----------------------------------------------------------------------------
//Ejercicio 3

ej2.forEach((Element) =>
  alert("3- Elementos al cuadrado: " + Element * Element)
); // Por cada elemento se muestra el producto de ese elemento
//por si mismo, con alert mostrando elementos del array al cuadrado

//-----------------------------------------------------------------------------
//Ejercicio 4

sum = 0; //"reseteo" la variable acumuladora
const ej4 = [1, -4, 12, 0, -3, 29, -150]; // Array de la consigna

for (i = 0; i <= ej4.length; i++) {
  //Ciclo for para recorrer el array
  if (ej4[i] > 0) {
    // Si el numero en la posición es positivo
    sum += ej4[i]; // lo sumo
  }
} // resultado con un for e if, quiero intentar resolverlo con un reduce

alert("4- Suma de los elementos positivos: " + sum); // Impresión del resultado

//-----------------------------------------------------------------------------
//Ejercicio 5

const nombres = [
  "Florencia",
  "Lucas",
  "Ezequiel",
  "Matias",
  "juan",
  "Bruno",
  "Gustavo",
  "Martin",
]; //Array de nombres, luego le agregue
// nombres con "J" y con la inicial en minúscula para probar
const seisletras = nombres.filter((p) => p.length >= 6); //se genera nuevo array con los valores que cumplen la condicion de
//tener al menos 6 letras
alert("5A- Elementos de al menos 6 letras: " + seisletras); //Se muestra el resultado

const nombresm = nombres.filter((p) => p.charAt(0).toUpperCase() == "M"); // se genera nuevo array con los valores que cumplen la condición
// de coincidir su inicial con la letra "M" (pasándola a mayúscula para evitar errores)
alert("5B- Elementos que comienzan con 'M': " + nombresm); //Se muestra el resultado

nombres.sort(); // función privada para ordenar el array (En este caso funciona mejor alfabéticamente que numéricamente asi que no es necesario
// combinarlo con la función de comparación como en el caso anterior)
console.log("5C- Array ordenado alfabéticamente: " + nombres); //Mostrando array ordenado alfabéticamente

const nomini = nombres.map(function (x) {
  return x.charAt(0);
}); //Uso de map para generar un nuevo array con la inicial (caracter en la posición (0)
// de la cadena analizada para cada elemento
alert("5D- Array con iniciales: " + nomini); //Muestra el resultado por pantalla

const nommay = nombres.map(function (x) {
  return x.toUpperCase();
}); //Se genera nuevo array usando map con los nombres pasados a mayúscula

alert("5F- Array en mayúsculas: " + nommay); //se muestra el resultado por pantalla

alert(
  "5G- Si algún nombre comienza con 'J': " +
    (nombres.some((p) => p.charAt(0).toUpperCase() == "J")
      ? "Hay al menos uno"
      : "No hay ninguno")
);
// Se usa el some para devolver true si al menos un nombre empieza con "J" (se pasa la incial a mayúscula) y lo combino con operadores ternarios
//para que en lugar de mostrarme true o false dependiendo el resultado del some informe algo mas adecuado para que vea un usuario
//-----------------------------------------------------------------------------
//Ejercicio 6

const colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]; //Array con colores de la consigna

let col = prompt("Ingrese un color a comparar: "); //ingreso del color a comparar o buscar en el array

alert(
  colores.some((p) => p == col.toLowerCase())
    ? "6- El color " + col + " existe en el array"
    : "6- El color " + col + " no existe en el array"
);
// Similar al ejercicio anterior, uso el some para saber si al menos uno de los colores coincide con el valor ingresado en el prompt, por las
//dudas lo paso a minúsculas y nuevamente combino con operador ternario para mostrar un mensaje mas completo que un true o false
//-----------------------------------------------------------------------------
//Ejercicio 7

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //Creo un array con números

let npar = pares(numeros); //guardo el resultado de la función pares en el array npar (aunque aún no este declarado como tal),
//pares a su vez recibe el array de números
function pares(a) {
  //declaración de la función
  let b = a.filter((n) => n % 2 == 0); //se genera un nuevo array (b) con los numeros que son pares (los números cuyo resto al dividir por
  return b; //2 es igual a cero, van al array b que es devuelto por la función y termina en npar
}

alert("7- Array de pares: " + npar); //Se muestra el array resultante por pantalla
//console.log(npar)

//-----------------------------------------------------------------------------
//Ejercicio 8

const palabras = [
  "Auto",
  "casa",
  "iguana",
  "dado",
  "gato",
  "eter",
  "barco",
  "olor",
  "uber",
  "alas",
  "tarro",
]; //Array con diversas palabras

let vocal = vocales(palabras); //La funcion vocales recibe el array de palabras y devuelve su resultado a vocal (aún no es array)

function vocales(a) {
  //declaración de la función, se genera un nuevo array con los valores que cumplan al menos una de las condiciones, tener
  let b = a.filter(
    (n) =>
      n.toLowerCase().charAt(0) == "a" ||
      n.toLowerCase().charAt(0) == "e" || //una vocal como su inicial, por las dudas
      n.toLowerCase().charAt(0) == "i" ||
      n.toLowerCase().charAt(0) == "o" ||
      n.toLowerCase().charAt(0) == "u"
  ); // normalizo pasando a minúscula
  return b; //Se devuelve el array resultante con b que termina quedando en vocal (ahora sí como array)
}

alert("8- Array normal: " + palabras); //Muestro el array normal que cree para que se vean todas las palabras
alert("8- Array de palabras que comienzan con vocales: " + vocal); //muestro el array resultante de las palabras que comienzan con vocal

//-----------------------------------------------------------------------------
//Ejercicio 9

var humano = {
  //Genero un objeto llamado persona, uso un objeto porque la consigna pide un método y no una función
  nombre: "Juan", //propiedades con valores, son intrascendentes para el desarrollo del ejercicio
  edad: 42,
  altura: 175,
  peso: 73,
  bolsillos: ["llaves", "telefono", "billetera", "birome"], //El array que me interesa que sea parte del objeto

  intercambio: function () {
    //El método del objeto que ordena su propio array haciendo intercambio de posiciones usando la variable
    let aux = this.bolsillos[0]; // auxiliar para intercambiar los valores del array usando sus indices
    this.bolsillos[0] = this.bolsillos[2]; //Se usa el this porque es mas sencillo y visual lo pone solo al querer referirme al array
    this.bolsillos[2] = aux; //dentro del propio objeto que es su padre, es lo mismo que poner humano.bolsillos
  },
};
alert("9- Elementos sin intercambiar: " + humano.bolsillos); //muestro el estado previo del array
humano.intercambio(); //Se llama al método para que intercambie las posiciones
alert("9- Elementos intercambiados: " + humano.bolsillos); //muestro el resultado luego del intercambio

//-----------------------------------------------------------------------------
//Ejercicio 10

$(document).ready(function () {
  // Uso de llamado para evitar que se ejecute antes de lo deseado
  $("p:first").on("click", function () {
    //Al clickear el primer parrafo
    alert("10- Ha clickeado el primer párrafo");
  }); //que informe que se ha clickeado en el mismo
});

//-----------------------------------------------------------------------------
//Ejercicio 11

$(document).ready(function () {
  $("#tabla").on("click", function () {
    //Al clickear la tabla con el id "tabla"
    $("#tabla").css("background-color", "red");
  }); //se llama al metodo css para modificar el color de fondo por rojo
}); //primero se menciona la propiedad a modificar y luego el valor a tomar

//-----------------------------------------------------------------------------
//Ejercicio 12

$(document).ready(function () {
  $("ul:last li").on("click", function () {
    //Al clickear en cualquier elemento <li> de la última lista <ul>
    $(this).hide(); //que oculte el elemento referido, en este caso el <li> clickeado
  });
});

//-----------------------------------------------------------------------------
//Ejercicio 13

$(document).ready(function () {
  $(".tr1").on("click", function () {
    // Al clickear en la fila referida con la clase ".tr1"
    $(".tr1 td").css("background-color", "green"); //que cambie el color de todas las celdas que pertenecen a esa clase tr1 al verde
  });
  $(".tr2").on("click", function () {
    $(".tr2 td").css("background-color", "blue"); //idem al azul
  });
  $(".tr3").on("click", function () {
    $(".tr3 td").css("background-color", "red"); //y al rojo
  });
}); //Gracias Rodri por ayudarme con la versión mejorada y mas prolija de este ejercicio

//-----------------------------------------------------------------------------
//Ejercicio 14

$(document).ready(function () {
  $("#D1").on("click", function () {
    //al clickear en el botón deseado
    $(".noticia1 p").css("font-size", "10px"); //modificar todos los parrafos del div con la clase determinada, cambiando su tamaño de
  }); //letra por uno mas pequeño
  $("#D2").on("click", function () {
    $(".noticia2 p").css("font-size", "25px"); //por una letra mas grande
  });
  $("#D3").on("click", function () {
    $(".noticia3 p").css("font-size", "35px"); //por una aún mas grande
  });
});

//-----------------------------------------------------------------------------
//Ejercicio 15

$(document).ready(function () {
  $("#cambiartexto").on("click", function () {
    //al clickear en el botón determinado
    //$("#tabla4 td").html($("#tabla4 td").html().replace("Texto 1", "-")) //Esta variación funcionaba pero es un chino - ignorar
    $("#tabla4 td").prop("innerText", " - "); //Esto es mucho mejor, modifica con el metodo prop la propiedad deseada con el valor "-"
  });
});

//-----------------------------------------------------------------------------
//Ejercicio 16

$(document).ready(function () {
  $("#cambiarlink1").on("click", function () {
    //Al clickear en el botón elegido
    //$("#link").html($("#link").html().replace($("#link").html(), "Nuevo link 1")) // otro chino - IGNORAR
    $("#link").prop("text", "StackOverflow"); // modificar la propiedad deseada con el nuevo valor
    $("#link").prop("href", "https://stackoverflow.com/"); //cambiar el valor del href por la URL deseada
  });
  $("#cambiarlink2").on("click", function () {
    //$("#link").html($("#link").html().replace($("#link").html(), "Nuevo link 2")) // otro chino - IGNORAR
    $("#link").prop("text", "Jquery");
    $("#link").prop("href", "https://jquery.com/");
  });
  $("#cambiarlink3").on("click", function () {
    //$("#link").html($("#link").html().replace($("#link").html(), "Nuevo link 3")) // otro chino - IGNORAR
    $("#link").prop("text", "Github");
    $("#link").prop("href", "https://github.com/");
  });
});

//-----------------------------------------------------------------------------
//Ejercicio 17

$(document).ready(function () {
  $("strong").on("click", function () {
    //Al clickear en las palabras encerradas dentro del tag <strong>
    $(this).hide(); //ocultar dichas palabras o grupo de texto
  });
});

//-----------------------------------------------------------------------------
//Ejercicio 18

$(document).ready(function () {
  $("#tabla6 td").on("mouseenter", function () {
    //Al ingresar con el mouse a cualquier celda de la tabla
    $(this).css("background-color", "green"); //modifica el color permanentemente al verde
  });
});

//-----------------------------------------------------------------------------
//Ejercicio 19

$(document).ready(function () {
  $("#tabla7 td").on("mouseenter", function () {
    //idem punto anterior, al ingresar con el mouse a cualquier celda de la tabla
    $(this).css("background-color", "green"); //cambia su color al verde pero esta vez
  });
  $("#tabla7 td").on("mouseleave", function () {
    //al salir con el mouse de dicha celda
    $(this).css("background-color", "coral"); //volver al color original previo al ingreso del mouse
  });
});

//-----------------------------------------------------------------------------
//Ejercicio 20

let ck = 1; //declaración de variable centinela para corroborar en que "modo" de tamaño estoy
$(document).ready(function () {
  $("#ej20").on("dblclick", function () {
    //Al hacer doble click sobre el div determinado
    if (ck == 1) {
      //en base al valor de la variable centinela
      $(this).css("width", "250px"); //modificar el tamaño al cuadrado mas pequeño
      $(this).css("height", "250px");
      ck = 0;
    } //y cambiar el valor de la variable centinela (importante)
    else {
      $(this).css("width", "800px"); //hago uso de la variable centinela para evitar preguntar un choclo de propiedades
      $(this).css("height", "70px"); //dentro del if, es mas sencillo el uso de la variable centinela
      ck = 1;
    } //y cambiar el valor de la variable centinela (importante)
  });
});

//-----------------------------------------------------------------------------
//Ejercicio 21

$(document).ready(function () {
  $("#textos2").hide(); //oculta el texto que no quiero mostrar hasta el momento indicado
  $("#textos").on("click", function () {
    //cuando clickeo en el texto deseado
    $(this).fadeOut(400, "swing", $("#textos2").fadeIn()); //Primero oculta lentamente el texto1 y luego muestra el 2, le falta mejorar
  });
  /*$("#textos").on($("#textos:hidden"),function(){ //Esta parte no funciona, no logro capturar el evento "el texto1 quedó oculto"
        $("#textos2").fadeIn()
    })*/
});
//Este punto no me gustó como quedo, aún lo quiero trabajar mas y pulirlo porque no termina de esperar a que desaparezca el primer texto que
// empieza a aparecer el segundo, me falta investigar y probar mas el metodo fade y sus propiedades
//-----------------------------------------------------------------------------
//Ejercicio 22

$(document).ready(function () {
  $("#select").on("change", function () {
    //Acá no sirve el click porque te llena de eventos no desados, es mejor usar el "change", cumple
    console.log(this.value); //mejor con la consigna, y al usar ese método solo se activa cuando se selecciona o cambia el valor
  }); //para luego mostrar por consola el valor al que cambio
});

//-----------------------------------------------------------------------------
//Ejercicio 23

$(document).ready(function () {
  $("#link2").on("click", function () {
    //Al clickear en el vinculo
    console.log("23- Enlace referido: " + $("#link2").prop("href")); //Muestra por consola la URL referida por el link
    $("#link2").prop("href", "#"); //y cambia el valor del href por # para evitar que salga o
  }); //recargue la pagina por el click en el link
});

//-----------------------------------------------------------------------------
//Ejercicio 24

$(document).ready(function () {
  $("#enviar").on("click", function () {
    //cuando clickeo en el botón del formulario
    $("#enviado").prop("innerText", "El formulario ha sido enviado"); //no envía nada, solo muestra el texto deseado en un label que
  }); //estaba vacío
});
