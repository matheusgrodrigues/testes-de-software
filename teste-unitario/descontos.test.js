const desconto = require("./descontos");

test("frete Gratis é verdadeiro para 100 ou acima de 100", () => {
  expect(desconto.freteGratis(100)).toBeTruthy();
});
