// Arrays em javascript são dinâmicos,
// aceitam todos os tipos de valores (embora isso seja considerado um má prática)
// podem almentar e diminuir, conforme preciso for.
//
// Arrays são definidos por [] e sempre começam no índice 0.

const meuArray = ['zero', 'um', 'dois', 'três'];

console.log('Imprimindo o array todo...');
console.log(meuArray);
console.log('Comprimento do array... (length)');
console.log(meuArray.length);
console.log('Adicionando "quatro" ao array... (push)');
meuArray.push('quatro');
console.log(meuArray);
console.log('Tentando imprimir o índice 50 do array, não gera erro O_o ?');
console.log(meuArray[50]);
console.log('Adicionando "eitcha" ao índice 50 do array...');
meuArray[50] = 'eitcha';
console.log(meuArray);
console.log('Removendo o ultimo índice do array...(pop)');
meuArray.pop();
console.log(meuArray);
console.log('Removendo o primeiro índice de um array (delete meuArray[0])');
delete meuArray[0];
console.log(meuArray);
console.log('Imprimindo o tipo do array (typeof)');
console.log(typeof meuArray);
