(function (global) {
  global.nativeTestActions = {
    imageShared: function (path) {
      return { type: "[Native] Imagen compartida", path: path };
    },
    textShared: function (text) {
      return { type: "[Native] Texto compartido", text: text };
    }
  };

  global.initialNativeTestState = {
    sharedImages: [],
    sharedTexts: []
  };

  global.nativeTestReducer = function (state, action) {
    var currentState = state || global.initialNativeTestState;

    switch (action.type) {
      case "[Native] Imagen compartida":
        return {
          sharedImages: [action.path].concat(currentState.sharedImages),
          sharedTexts: currentState.sharedTexts
        };
      case "[Native] Texto compartido":
        return {
          sharedImages: currentState.sharedImages,
          sharedTexts: [action.text].concat(currentState.sharedTexts)
        };
      default:
        return currentState;
    }
  };
})(window);
