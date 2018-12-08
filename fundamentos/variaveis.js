/* Variáveis devem ser declaradas apenas uma vez no programa,
 * não é legal usar a palávra reservada VAR, deve-se usar LET.
 */

var n1 = 1;
let n2 = 2;

console.log(n1, n2);

var n1 = 10;
// let n2 = 20; erro!!!, LET só uma vez!
n2 = 20;

console.log(n1, n2);

/* Se um valor não for mudar, uma boa prática é sempre
 * usar a palávra reservada CONST
 */

const n3 = 30;
// n3 = 300; erro! const é constante.

console.log(n3);

