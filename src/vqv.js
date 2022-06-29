/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (name, years) => {
  if (typeof vqv === 'function') {
    if (name === undefined || years === undefined) {
      return undefined;
    }
    let first = `Oi, meu nome é ${name}!\n`;
    let second = `Tenho ${years} anos,\ntrabalho na Trybe e`;
    let third = 'mando muito em programação!\n#VQV!';
    return `${first}${second} ${third}`;
  }
};
console.log(vqv());

module.exports = vqv;
