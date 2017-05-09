
//MODULO3 EJERCICIO 1
//1. Programa un ejemplo que almacene en un array todas las cartas de la baraja, cada una representada con un diccionario que tenga un palo y un valor.
var baraja=[];
var palos=["corazones", "picas","diamentes","treboles"];
for(var i=0; i<palos.length; i++){
	for(var j=1; j<=13; j++){
		console.log(baraja, baraja.length);
		baraja[baraja.length]={palo:palos[i], valor: j}//la var baraja ya la asigné arriba , pero ahora le doy su valor aqui
	}
}





//MODULO 3 EJERCICIO 2
//2. Partiendo del array que has construido en el ejercicio anterior, construye un algoritmo que filtre en un nuevo array sólo las cartas rojas, y en otro array las cartas negras.


// var baraja=[];
// var palos=["corazones", "picas","diamantes","treboles"];
// for(var i=0; i<palos.length; i++){
// 	for(var j=1; j<=13; j++){
// 		baraja[baraja.length]={palo:palos[i], valor: j}
// 	}
// }
//
// var cartasNegras=[];
// var cartasRojas=[];
// for(var i=0; i<baraja.length; i++){
// 	if(baraja[i].palo=="corazones" || baraja[i].palo=="diamantes"){
// 		cartasRojas[cartasRojas.length]=baraja[i];
// 	}else{
// 		cartasNegras[cartasNegras.length]=baraja[i];
// 	}
// }









//NODULO 3 EJERCICIO 3


// var baraja = [];
// var palos = ["corazones", "picas", "diamantes", "treboles"];
// for (var i = 0; i < palos.length; i++) {
//     for (var j = 1; j <= 13; j++) {
//         baraja[baraja.length] = {
//             palo: palos[i],
//             valor: j
//         }
//     }
// }
//
// var cartasNegras = [];
// var cartasRojas = [];
// for (var i = 0; i < baraja.length; i++) {
//     if (baraja[i].palo == "corazones" || baraja[i].palo == "diamantes") {
//         cartasRojas[cartasRojas.length] = baraja[i];
//     } else {
//         cartasNegras[cartasNegras.length] = baraja[i];
//     }
// }
//
//
// var cartasRojasPares = [];
// for (var i = 0; i < cartasRojas.length; i++) {
//     if (cartasRojas[i].valor % 2 == 0) {
//         cartasRojasPares[cartasRojasPares.length] = cartasRojas[i];
//     }
// }
