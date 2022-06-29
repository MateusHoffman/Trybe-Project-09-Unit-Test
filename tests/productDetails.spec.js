const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    const functionWithParam = productDetails('Alcool gel', 'Máscara');
    test('TESTE 1', () => {
      expect(typeof productDetails).toBe('function');
    });
    // Teste se o retorno da função é um array.
    test('TESTE 2', () => {
      expect(typeof functionWithParam === 'array')
    });
    // Teste se o array retornado pela função contém dois itens dentro.
    test('TESTE 3', () => {
      expect(functionWithParam).toHaveLength(2)
    });
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    test('TESTE 4', () => {
      expect(Array.isArray(functionWithParam[0])).toBe(false)
      expect(functionWithParam[0]).toBeInstanceOf(Object)
      expect(Array.isArray(functionWithParam[1])).toBe(false)
      expect(functionWithParam[1]).toBeInstanceOf(Object)
    });
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    test('TESTE 5', () => {
      expect(functionWithParam[0]).not.toEqual(functionWithParam[1])
    });
    // Teste se os dois productIds terminam com 123.
    test('TESTE 6', () => {
      expect(functionWithParam[0]['details']['productId']).toEqual(expect.stringMatching('123'))
      expect(functionWithParam[1]['details']['productId']).toEqual(expect.stringMatching('123'))
    });
});
