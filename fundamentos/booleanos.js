// Tipos Booleanos (true, false)

let isAtivo = true;

console.log('Imprimindo os verdadeiros...');
console.log(isAtivo);

isAtivo = 1;

console.log(isAtivo);

console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!{});
console.log(!![]);
console.log(!!Infinity);

console.log('Imprimindo os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN); // not a number
console.log(!!undefined);

isAtivo = false;

console.log(isAtivo);

console.log('E para finalizar...');
console.log(!!(null || false || 'Verdade'));

let nome = '';

console.log('Imprimindo o nome -> ' + (nome || 'Nome vazio!'));

nome = 'Thiago';

console.log('Imprimindo o nome -> ' + (nome || 'Nome vazio!'));
