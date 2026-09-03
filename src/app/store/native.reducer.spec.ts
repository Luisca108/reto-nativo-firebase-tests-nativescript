import { imageShared, textShared } from "./native.actions";
import { initialNativeState, nativeReducer } from "./native.reducer";

describe("nativeReducer", () => {
  it("guarda el texto compartido al despachar textShared", () => {
    const state = nativeReducer(initialNativeState, textShared({ text: "Hola desde Jasmine" }));

    expect(state.sharedTexts).toEqual(["Hola desde Jasmine"]);
    expect(state.sharedImages).toEqual([]);
  });

  it("guarda la ruta de imagen compartida al despachar imageShared", () => {
    const state = nativeReducer(initialNativeState, imageShared({ path: "~/foto.jpg" }));

    expect(state.sharedImages).toEqual(["~/foto.jpg"]);
    expect(state.sharedTexts).toEqual([]);
  });
});
