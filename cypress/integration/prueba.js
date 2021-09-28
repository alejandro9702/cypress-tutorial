describe("Cuentas", () => {
  var a = 1 + 1;
  var b = 2;
  it("que se sume bien", () => {
      expect(a==b).to.equal(true);
  }); // descripcion del caso de prueba, ¿que se esta probando?

  it("que reste bien", () => {
      expect(a-b).to.equal(0)
  })
});
