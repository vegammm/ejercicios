// MODULO 1
//     EJERCICIO 1
//         EJERCICIO 1.A
//                 Los años bisiestos que habrá antes de 2050



// var anoActual=2017;
// var anoLimite=2049;
// var anos=(anoLimite-anoActual);
// var anosResto=(anos%4);
// var anosEnteros=(anos-anosResto);
// var anosBisiestos=(anosEnteros/4);
//
// console.log(anosBisiestos);





// MODULO 1
//     EJERCICIO 1
//         EJERCICIO 1.B
//                 Cuántas cartas con número par y negras hay en una baraja de poker


// var cartasTotales=52;
// var cartasPalo = cartasTotales/4;//divido por 4 palos osea 13 cartas
// var cartasPaloPares = (cartasPalo-cartasPalo%2)/2;
// var cartasNegrasPares = cartasPaloPares*2;
//
// console.log(cartasPaloPares);






// MODULO 1
//     EJERCICIO 2
//         2. Define una variable cuyo valor sea una cadena que represente una carta de la baraja. Recuerda que representamos las cartas con una cadena formada por un número que representa el valor, seguido de una letra que representa el palo. Ahora crea otras dos variables que representan a la carta anterior y a las carta posterior en una baraja ordenada. Finalmente, crea una última variable que concatene las cadenas de las 3 cartas anteriores usando las variables que ya tienes.

// var carta = "6D";
// var cartaValor = carta[0];
// var cartaPalo = carta[1];
// var cartaAnterior = cartaValor-1  + cartaPalo;
// var cartaSiguiente = parseInt(cartaValor) + 1  + cartaPalo;
// var cartasConsecutivas = cartaAterior+" "+carta+" "+cartaSiguiente;
// alert(cartasConsecutivas);








// MODULO 1
//     EJERCICIO 3
//          3. Define una variable cuyo valor sea una cadena que represente una carta de la baraja, cuyo valor sea mayor que 9. Ahora utiliza el operador para indexar la cadena, y accede al palo de la carta. ¿Cuál es la diferencia si la carta tiene un valor menor o igual que 9?



var carta = "10C";
var valor = carta[0] + carta[1];
var palo = carta[2];

alert(carta[carta.length-1]);
