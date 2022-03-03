import {useMemo} from "react";
import {useSelector} from "react-redux";
import {RootState, store} from "../store";
import {Recipe} from "@/types";

export const useCart = (meal: Recipe) => {
  const {dispatch} = store;
  const {idMeal} = meal;
  const cart = useSelector((state: RootState) => state.cart);

  const isAdded = useMemo(() => idMeal && (cart?.[idMeal]?.quantity ?? 0) > 0, [cart, idMeal]);
  const add = () => dispatch.cart.add({meal});
  const remove = () => dispatch.cart.add({meal, quantity: -1});

  return {isAdded, add, remove, quantity: cart[idMeal]?.quantity ?? 0};
}

export default useCart;