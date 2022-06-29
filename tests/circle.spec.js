/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

/*
  A função `circle` recebe o raio de um círculo e retorna um objeto contendo suas informações: Raio, Área e Circunferência.
  Se não for especificado um raio, a função retorna `undefined`.
  Escreva pelo menos seis testes para essa função para garantir que a implementação de `circle` está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no console do navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Outra dica: que tal pesquisar se existe um matcher que compara valores próximos?
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!
*/

describe('4 - Implemente os casos de teste para a função `circle`', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se circle retorna undefined, caso o parâmetro passado não seja um número.
    test('TESTE 1', () => {
      expect(circle("not a number")).toBe(undefined);
    });
    // Teste se circle retorna um objeto.
    test('TESTE 2', () => {
      expect(Array.isArray(circle(3))).toBe(false)
      expect(circle(3)).toBeInstanceOf(Object)
    });
    // Teste se o objeto retornado possui 3 propriedades.
    test('TESTE 3', () => {
      expect(Object.keys(circle(3)).length).toBe(3);
    });
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    test('TESTE 4', () => {
      expect(circle()).toBe(undefined);
    });
    // Teste se dentro do objeto retornado, a função retorna uma `key` com `value` igual à circunferência correta para um círculo de raio 2.
    test('TESTE 5', () => {
      expect(circle(2).circumference).toBe(12.56);
    });
    // Teste se dentro do objeto retornado, a função retorna uma `key` com `value` igual à área correta para um círculo de raio 3.
    test('TESTE 6', () => {
      expect(circle(3).area).toBe(3.14 * 3 * 3);
    });
    // Teste se a função retorna, em um objeto, os dados corretos de um círculo de raio 3.
    test('TESTE 7', () => {
      expect(circle(3).area).toBe(3.14 * 3 * 3);
      expect(circle(3).circumference).toBe(2 * 3.14 * 3);
      expect(circle(3).radius).toBe(3);
    });
});
