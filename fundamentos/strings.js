// Brincando com Strings em js

const minhaString = 'Thiago';

console.log(minhaString.charAt(3)); // mostra a quarta letra (começa em 0)
console.log(minhaString.substring(1)); // Pula a primeira letra.
console.log(minhaString.substring(0, 2)); // Vai de 0 até 2, sem incluir o indice 2
console.log(minhaString.charCodeAt(3)); // Monstra o unicode da quarta letra(a)
console.log(minhaString.indexOf('g')); // Retorna a posição da letra g

console.log('Olá '.concat(minhaString).concat('!')); // Concatenação(pode usar +)
console.log(minhaString.replace(3, 'x')); // nao funciona

console.log('Thiago, Renato, Humberto'.split(',')); // Cria um Array, separando os elementos por ,
