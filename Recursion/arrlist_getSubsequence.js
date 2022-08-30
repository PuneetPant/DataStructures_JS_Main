const main = () => {
  // let str = input;
  let str = 'abc';
  const ans = getSubsequence(str, '');
  console.log(ans)
}

const getSubsequence = (str, ansSoFar) => {

  const getSubsequenceHelper = (str, ansSoFar) => {
    if (str.length == 0) {
      // console.log(ansArray)
      ansArray.push(ansSoFar)
      console.log(ansArray)
      return;
    }

    let ans = str[0];
    let roq = str.slice(1)
    let larr = getSubsequenceHelper(roq, ansSoFar + '')
    let rarr = getSubsequenceHelper(roq, ansSoFar + ans);
  }
  let ansArray = []
  getSubsequenceHelper(str, ansSoFar);

  return ansArray;


}
main();