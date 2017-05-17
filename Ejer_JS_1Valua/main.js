//Ejercicio 1
//Creamos una función que tomará como parámetros un número
//y un array de números. La función va a devolver el número
//de veces que está repetido ese número en el array. Por ejemplo,
// si le pasamos un 1 y [1,3,4,2,1,3,4,5],  la función devolverá
//un 2, porque el número 1 aparece dos veces en el array.

//function cuentaNumeros (numero, arrayNumeros){




function cuentaNumeros(numero,arrayNumeros){
    var contador = 0;
    for(var i = 0; i<arrayNumeros.length;i++){
        if(numero === arrayNumeros[i]){
            contador= contador+1;
        }
    }
    return contador;
}
console.log(cuentaNumeros(5,[1,2,3,5,6,6,4,1,5,6,7]));
