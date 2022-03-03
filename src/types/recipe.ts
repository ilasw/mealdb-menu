const ingredientsKeys = Array.from({length: 20})
    .flatMap((_, i) => [`strIngredient${i + 1}`, `strMeasure${i + 1}`]);

export type Ingredient = {
  idIngredient: string,
  strIngredient: string,
}

export type Recipe = {
  "idMeal": string,
  "strMeal": string,
  "strDrinkAlternate": null | string,
  "strCategory": string,
  "strArea": string,
  "strInstructions": string,
  "strMealThumb": string,
  "strTags": null | string[],
  "strYoutube": string,
  "strSource": string,
  "strImageSource": any,
  "strCreativeCommonsConfirmed": any,
  "dateModified": any
} & { [k: typeof ingredientsKeys[number]]: string }