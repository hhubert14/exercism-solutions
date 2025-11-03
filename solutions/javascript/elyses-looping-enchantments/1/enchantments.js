// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  // 🚨 Use .forEach
  let count = 0
  stack.forEach((curr) => card === curr ? count++ : null)
  return count
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // 🚨 Use a `for...of` loop
  let ans = 0
  for (const num of stack) {
    if (num % 2 === 0 && type === true) ans++;
    if (num % 2 === 1 && type === false) ans++;
  }
  return ans
}
