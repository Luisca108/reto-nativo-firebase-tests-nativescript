import { createAction, props } from "@ngrx/store";

export const imageShared = createAction(
  "[Native] Imagen compartida",
  props<{ path: string }>()
);

export const textShared = createAction(
  "[Native] Texto compartido",
  props<{ text: string }>()
);
