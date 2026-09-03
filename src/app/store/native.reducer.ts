import { createReducer, on } from "@ngrx/store";

import { imageShared, textShared } from "./native.actions";

export interface NativeState {
  sharedImages: string[];
  sharedTexts: string[];
}

export const initialNativeState: NativeState = {
  sharedImages: [],
  sharedTexts: []
};

export const nativeReducer = createReducer(
  initialNativeState,
  on(imageShared, (state, { path }) => ({
    ...state,
    sharedImages: [path, ...state.sharedImages]
  })),
  on(textShared, (state, { text }) => ({
    ...state,
    sharedTexts: [text, ...state.sharedTexts]
  }))
);
