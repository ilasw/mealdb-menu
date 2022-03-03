import {useMealQuery} from "./use-meal-query";
import {Category, Ingredient, Recipe} from "@/types";
import {API_URLS} from "@/utils";

export type SearchProp = {
  what: 'c' | 'i',
  value: string
} | null;

export const useRistoMenu = ({search}: { search: SearchProp }) => {

  const {categories = []} = useMealQuery<{ categories: Category[] }>(
      'categories',
      `${API_URLS.BASE}/${API_URLS.CATEGORIES}`
  )?.data ?? {};

  const {meals: ingredients = []} = useMealQuery<{ meals: Ingredient[] }>(
      'ingredients',
      `${API_URLS.BASE}/${API_URLS.INGREDIENTS}`
  )?.data ?? {};

  const {meals = []} = useMealQuery<{ meals: Recipe[] }>(
      'topMeals',
      `${API_URLS.BASE}/${API_URLS.TOP_MEALS}`
  )?.data ?? {};

  const {meals: starters = []} = useMealQuery<{ meals: Recipe[] }>(
      'starterMeals',
      `${API_URLS.BASE}/${API_URLS.STARTER_MEALS}`
  )?.data ?? {};

  const {meals: searchResults = []} = useMealQuery<{ meals: Recipe[] }>(
      ['searchMeals', search],
      `${API_URLS.BASE}/${API_URLS.FILTER}?${search?.what}=${search?.value}`,
      {enabled: !!(search)}
  )?.data ?? {};

  return {
    categories,
    meals,
    starters,
    searchResults,
    ingredients: ingredients
        .map(({strIngredient}) => strIngredient)
        .slice(0, 50)
  };
}

export default useRistoMenu;