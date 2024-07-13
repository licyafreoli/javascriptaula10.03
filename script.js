function somaArray(numeros) {
    return numeros.reduce((acc, numero) => acc + numero, 0);
}

var array = [1, 2, 3, 4, 5];
console.log(somaArray(array));
