// not defined = Algo que nem foi declarado, não foi inicializado.
// Undefined = Algo que foi iicializado mas não é "conhecido".
// Null = Algo que foi inicializado porem está zerado.

const valor = {}; // declarando valor
console.log(valor.nome); //  -> Undefined (valor existe, mas nome não)
//console.log(valores); // -> not defined, estoura um ReferenceError, nunca foi declarado.
valor.nome = 'Thiago'; //
console.log(valor.nome);

// Zerando um atributo de um objeto
valor.nome = null;
console.log(valor.nome); // -> Null

// Removendo, eliminando um atributo de um objeto
delete valor.nome;
console.log(valor.nome); // -> Undefined

/* O javascript atribui valores de duas maneiras diferentes.
 *
 *      por Referencia
 *      por Valor primitivo
 *
 * Referencia
 * Só afeta objetos? Acho que sim.
 * Como o nome diz, faz referencia a um espaço alocado na memória.
 * Ou seja, se eu mudar algo em B, que por sua vez faz referencia a A
 * o objeto A sera afetado igualmente B, pois ambos apontam para o
 * mesmo lugar na memória.
 */

const a = {}; //                    obj A não tem propriedade nome
const b = a; //                     obj B é igual à obj A (referencia)
b.nome = 'Thiago'; //               agora obj A tem propeiedade nome
console.log('Por referencia');
console.log('A = ' + a.nome); //    repare que nunca declaramos a.nome = 'Thiago'
console.log('B = ' + b.nome);

/* Valor Primitivo
 * Só afeta variáveis? Acho que sim.
 * Valores primitivos são:
 *      strings
        numbers
        null
        undefined
 * Esses valores apontam para lugares diferentes na memória.*/
const c = 2; //                      C não é um obj, é uma variável
let d = c; //                        D recebe  valor de C, mas guarda em outro lugar
d = d + 3; //                        D agora vale 5
console.log('Valor primitivo');
console.log('C = ' + c); //          Repare que o valor de C não mudou
console.log('D = ' + d);
