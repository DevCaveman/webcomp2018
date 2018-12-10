/*
 * Numeros em JavaScript
 */
const num1 = 1; // Integer
const num2 = 2.0; // Integer O_O
const num3 = 3.1; // Float
const num4 = Number('4.0'); // Convert String para Number
const num5 = 123;
const num6 = 123.1234567; // Float

console.log('Números: ');
console.log('1º -> ' + num1 + ' do tipo ' + typeof num1);
console.log('2º -> ' + num2 + ' do tipo ' + typeof num2);
console.log('3º -> ' + num3 + ' do tipo ' + typeof num3);
console.log('4º -> ' + num4 + ' do tipo ' + typeof num4);
console.log('5º -> ' + num5 + ' em binário -> ' + num5.toString(2)); // num.toString(2) = binário
console.log('6º -> ' + num6 + ' do tipo ' + typeof num6);
console.log('6º -> ' + num6.toFixed(2) + ' com apenas 2 casas deciamis ');

// Alguns cuidados
console.log(7 / 0); //Tipo Infinity
console.log('10.2' * 2); // Converte automaticamente para Number(repeitar syntax, ex 10,2 ñ funciona)
console.log('10.2' + 2); // ATENCAO! resultado 10.22 em vêz de 12.2
console.log((10.2122).toFixed(2)); // ATENCAO! Expressões literais tem que estar entre parenteses, ex (10.2122)
//console.log(10.2122.toFixed(2)); NAO FUNCIONA!
