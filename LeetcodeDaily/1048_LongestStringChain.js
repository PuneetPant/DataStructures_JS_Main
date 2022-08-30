/**
 * @param {string[]} words
 * @return {number}
 */
const checkSubsequence = (word2, word1) => {
  let i = 0;
  let j = 0;

  while (j < word2.length && i < word1.length) {
    if (word2.charAt(j) == word1.charAt(i))
      i++;
    j++;
  }
  return i == word1.length;
}
var longestStrChain = function (words) {
  words = words.sort((a, b) => {
    return b.length - a.length
  })
  console.log(words)

  let dp = new Array(words.length).fill(1);

  for (let i = 1; i < words.length; i++) {
    let word1 = words[i];
    for (let j = i - 1; j >= 0; j++) {
      let word2 = words[j];

      if (word2.length == word1.length + 1 && checkSubsequence(word2, word1)) {
        dp[i] = dp[i - 1] + 1
        break;
      }
    }
  }
  console.log(dp)
  return dp[dp.length - 1]
};

const ans = longestStrChain([ 'bdca', 'bca', 'bda', 'ba', 'a', 'b' ]
);
console.log(ans)