// Função sem retorno
function imprimirSoma(num1, num2) {
    console.log(num1 + num2);
}
imprimirSoma(2, 3);
imprimirSoma(2); // posso passar 1 parametro apenas, num2 vai ser Undefined, retorna um Not a Number (NaN)
imprimirSoma(1, 2, 3, 4); // posso passar vários parametros, ele usa os 2 primeiros e ignora o resto
imprimirSoma(); // sem parametros, tudo Undefined, retorna NaN

// Função com retorno
function soma(num1, num2 = 0) {
    // num2 vale 0 se você não passar nada como parâmetro
    return num1 + num2;
}
console.log(soma(3, 6)); // 3 + 6 = 9
console.log(soma(3)); // 3 + 0 = 3
console.log(soma()); // Undefined + 0 = NaN
