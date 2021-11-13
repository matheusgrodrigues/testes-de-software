/* 
  @jest-environment jsdom
*/

test("Clicar no botao", () => {
  const botao = require("./clique-botao");
  botao.click();

  expect(botao.textContent).toBe("Obrigado!");
});
