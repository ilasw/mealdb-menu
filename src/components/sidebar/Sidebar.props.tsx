import {Category, Ingredient} from "@/types";
import {SearchProp} from "@/hooks";

export type SidebarProps = {
  search: SearchProp,
  categories: Category[],
  ingredients: Ingredient['strIngredient'][],
  onClickCategory: (c: string) => void,
  onSearchIngredient: (c: string) => void,
}