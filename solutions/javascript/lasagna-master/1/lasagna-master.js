/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export const cookingStatus = (remainingTime) => {
  if (remainingTime === 0) return "Lasagna is done."
  if (!remainingTime) return "You forgot to set the timer."
  return "Not done, please wait."
}

export const preparationTime = (layers, average = 2) => {
  return layers.length * average
}

export const quantities = (layers) => {
  let noodleAmount = 0
  let sauceAmount = 0
  for (const layer of layers) {
    if (layer === "noodles") noodleAmount += 50
    if (layer === "sauce") sauceAmount += 0.2
  }
  return {
    noodles: noodleAmount,
    sauce: sauceAmount
  }
}

export const addSecretIngredient = (l1, l2) => {
  l2.push(l1.at(-1))
}

export const scaleRecipe = (recipe, num) => {
  const ans = {}
  for (const key in recipe) {
    ans[key] = recipe[key] * num/2
  }
  return ans
}