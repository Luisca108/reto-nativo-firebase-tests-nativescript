describe("nativeTestReducer", function () {
  it("guarda el texto compartido al despachar la accion de texto", function () {
    var state = window.nativeTestReducer(
      window.initialNativeTestState,
      window.nativeTestActions.textShared("Hola desde Jasmine")
    );

    expect(state.sharedTexts).toEqual(["Hola desde Jasmine"]);
    expect(state.sharedImages).toEqual([]);
  });

  it("guarda la ruta de imagen compartida al despachar la accion de imagen", function () {
    var state = window.nativeTestReducer(
      window.initialNativeTestState,
      window.nativeTestActions.imageShared("~/foto.jpg")
    );

    expect(state.sharedImages).toEqual(["~/foto.jpg"]);
    expect(state.sharedTexts).toEqual([]);
  });
});
