// Ejercicio 3
// Vamos a crear una función que toma un parámetro que es
// un array de números. La función va a devolver un array que contiene sólo los números pares del array original.


function encuentraPares(numeros) {
    var arrayPares=[];
    for(var i=0; i<numeros.length; i++){
        if(numeros[i]%2==0){
            arrayPares[arrayPares.length]= numeros[i];
        }
    }
    return arrayPares;
}

var array1 = [12, 23, 44, 234, 6755, 98898];
var array2 = [212, 253, 445, 2364, 5, 998];
var array3 = [1, 231, 4, 23, 25, 15];

console.log(encuentraPares(array1));
console.log(encuentraPares(array2));
console.log(encuentraPares(array3));
