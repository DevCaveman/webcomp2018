// Objetos em javascript são nada mais, nada menos, que dicionários em python, pronto falei.
//
const produto1 = {}; // <- objeto? ah tá...
produto1.nome = 'Teclado';
produto1.marca = 'Chinês';
produto1.preco = 2.0;

console.log('Imprimindo um objeto ou um dicionário?');
console.log(produto1);
console.log(typeof produto1);

// Outro "objeto"

const produto2 = {
    nome: 'Mouse',
    marca: 'Multilaser',
    preco: '25.50'
};

console.log('Outro "Objeto"...');
console.log(produto2);
console.log(typeof produto2);

if (produto1.preco > produto2.preco) {
    console.log(produto1.nome + ' custa mais caro que ' + produto2.nome);
} else {
    console.log(produto2.nome + ' custa mais caro que ' + produto1.nome);
}
