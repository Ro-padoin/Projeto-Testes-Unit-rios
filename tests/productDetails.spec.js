/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
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

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Teste se productDetails é uma função.', () => {
    expect(typeof productDetails).toBe('function');
  });
  it('Teste se o retorno da função é um array.', () => {
    expect(typeof productDetails()).toBe('object');
  });
  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails()).toEqual(
      [
        { name: undefined, details: { productId: 'undefined123' } },
        { name: undefined, details: { productId: 'undefined123' } }
      ]
    );
  });
  it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    const retorno = productDetails();
    expect(typeof retorno[0]).toEqual('object');
    expect(typeof retorno[1]).toEqual('object');
  });
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    expect(productDetails('mascara', 'alcool')).toEqual(
      [
        { name: 'mascara', details: { productId: 'mascara123' } },
        { name: 'alcool', details: { productId: 'alcool123' } }
      ]
    );
    expect(productDetails('alcool', 'mascara')).toEqual(
      [
        { name: 'alcool', details: { productId: 'alcool123' } },
        { name: 'mascara', details: { productId: 'mascara123' } }
      ]
    )
  });
  it('Teste se os dois productIds terminam com 123.', () => {
    const retorno1 = productDetails()[0].details.productId;
    const retorno2 = productDetails()[1].details.productId;
    expect(retorno1.substr(-3, 3)).toEqual('123');
    expect(retorno2.substr(-3, 3)).toEqual('123');
  });
});
