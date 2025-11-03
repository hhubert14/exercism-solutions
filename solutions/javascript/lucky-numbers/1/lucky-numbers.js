// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let num1 = 0;
  let num2 = 0;
  for (const num of array1) {
    num1 = 10 * num1 + num;
  }
  for (const num of array2) {
    num2 = 10 * num2 + num;
  }
  return num1 + num2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const strVal = String(value);
  let l = 0;
  let r = strVal.length - 1;
  while (l <= r) {
    if (strVal[l] != strVal[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) return "Required field";
  if (!Number(input)) return "Must be a number besides 0";
  return "";
}
