//Ejercicio 2
// Vamos a crear una función JavaScript que toma un parámetro que es una cadena (texto).
//  Si la cadena es de longitud impar, devuelve el carácter central. Si la longitud de
// la cadena es par, devuelve "Sólo funciono con cadenas de longitud impar".







function devuelveCaracterCentral(cadena) {
console.log(cadena.length % 2 != 0);
    if (cadena.length % 2 != 0) {
        var indiceCaracterCentral = (cadena.length-1)/2; //5
        var caracterCentral = cadena[indiceCaracterCentral];
        console.log("El caracter central es: ", caracterCentral);
        return caracterCentral;
    } else {
        console.log("Sólo funciono con cadenas de longitud impar");
    }
}
devuelveCaracterCentral("Hola Mundo");
devuelveCaracterCentral("Cadena impa");
