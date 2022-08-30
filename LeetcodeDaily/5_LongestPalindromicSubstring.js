/**
 * @param {string} s
 * @return {string}
 */
const extendPalindrome = (str, j, k) => {
  let wasPalindromeAtSomeInstant = false;
  while (j >= 0 && k < str.length && str.charAt(j) == str.charAt(k)) {
    j--;
    k++;
    wasPalindromeAtSomeInstant = true;
  }
  wasPalindromeAtSomeInstant && console.log(str.substring(j + 1, k));
  return wasPalindromeAtSomeInstant ? str.substring(j + 1, k) : "";
}
var longestPalindrome = function (str) {
  let maxString = "";
  for (let i = 0; i < str.length - 1;  i++) {
    let oddString = extendPalindrome(str, i, i); // checking for odd string
    let evenString = extendPalindrome(str, i, i + 1) // checking for even string

    if (oddString.length > maxString.length) {
      maxString = oddString;
    }
    if (evenString.length > maxString.length) {
      maxString = evenString;
    }
  }
  console.log(maxString)
};

longestPalindrome("cbbd")
