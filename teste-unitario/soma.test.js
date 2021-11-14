const { soma } = require("./soma");

describe("Somar os numeros", () => {
  beforeAll(() => {
    console.log("Antes de tudo");
  });

  afterAll(() => {
    console.log("Depois de tudo");
  });

  afterEach(() => {
    console.log("Depois de cada teste");
  });

  beforeEach(() => {
    console.log("Antes de cada teste");
  });

  it("Somar 2 numeros", () => {
    expect(soma(1, 2)).toBe(3);
  });
});
