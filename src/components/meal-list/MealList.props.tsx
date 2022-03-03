import {Recipe} from "@/types";

export type MealListProps = {
  heading?: string;
  layout?: 'slider' | 'list';
  meals: Recipe[];
}

export type MealListItemProps = { meal: Recipe };