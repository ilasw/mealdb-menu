import {createModel} from "@rematch/core";
import {RootModel} from ".";
import {Recipe} from "@/types";

export type CartState = { [p: string]: CartItem };
export type CartItem = { name: Recipe['strMeal'], quantity?: number };

export const cart = createModel<RootModel>()({
  state: {} as CartState,
  reducers: {
    add(state, payload: { meal: Recipe, quantity?: number }) {
      const {meal: {idMeal, strMeal}, quantity = 1} = payload;
      return {
        ...state,
        [idMeal]: {
          name: strMeal,
          quantity: (state?.[idMeal]?.quantity ?? 0) + quantity
        }
      };
    },
    clear() {
      return {}
    }
  },
});