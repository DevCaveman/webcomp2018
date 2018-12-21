// Armazenando um anonymous function em uma váriavel
const imprimirSoma = function(a, b = 0) {
    console.log(a + b);
};
imprimirSoma(2); // 2 + 0 = 2

// Armazenando uma arrow function em uma váriavel
const soma = (a, b) => {
    return a + b;
};
console.log(soma(2, 3)); // 2 + 3 = 5

// Retorno implícito (sem return)
const subtracao = (a, b) => a - b; // Só funciona em funções que tenham um bloco de 1 linha

console.log(subtracao(2, 3)); // 2 - 3 = -1

// Arrow function mais reduzida ainda
const print = frase => console.log(frase);

print('Fui imprimido!');
