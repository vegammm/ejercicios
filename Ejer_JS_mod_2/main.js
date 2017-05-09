// MODULO 2
//     EJERCICIO 1
//1. Programa un ejemplo que, dada una variable de tipo cadena con la carta del 4 de corazones, compruebe si es de corazones y además es el número 4. En caso afirmativo, lo imprimimos en la consola. Probamos el mismo programa con el 3 de corazones, y con el rey de corazones. ¿Qué sucede?


// var carta ="12C";
//
//
// if (carta[carta.length-2] == 4 && carta[carta.length-1] == "C"){
//
//         console.log("Si es el 4 de Corazones");
//
// }else if
//     (carta[carta.length-2] == 3 && carta[carta.length-1] == "C"){
//
//             console.log("Es el 3 de Corazones");
//
// }else if
//     (carta[carta.length-3] == 1 && carta[carta.length-2] == 2 && carta[carta.length-1] == "C"){
//
//             console.log("Es el Rey de Corazones");
// }




// MODULO 2
//     EJERCICIO 2
// 2. Utiliza un bucle para recorrer todos los años bisiestos anteriores a 2050, e imprímelos en la consola.

// var anoActual = 2017;
// var anoFinal = 2050;
//
//
// for (var i = anoActual; i <anoFinal; i++) {
//     if(i%4 == 0){;
//         console.log(i+"año es bisiesto")
//     }
// }




//MODULO 2
//      EJERCICIO 3
//          3. Utiliza un bucle para recorrer todas las cartas de la baraja, desde el 1 al 12 de cada palo. Imprime en pantalla solamente las cartas rojas que sea múltiplos de 3.

for(var i=1; i<=4; i++){
	if( i % 2 != 0){
		console.log("Palo",i, "es rojo");
		for(var j=1; j<=13; j++){
			if(j%3==0){
				console.log("Carta roja",j);
			}
		}
	}else{
		console.log("Palo",i, "es negro no se comprueba");
	}
}
