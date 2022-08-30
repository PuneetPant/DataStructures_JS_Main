const main = () => {
  const str = 'abcabc';
  const ans = countABCSubsequencesRecursion(str, '');
  console.log(ans);
}

const countABCSubsequencesRecursion = (str, ansSoFar) => {

  if (str.length == 0) {
    if (ansSoFar.charAt(ansSoFar.length - 1) == 'c') {
      return 1;
    }
    return 0;
  }

  let yesCall = 0;
  let noCall = 0;

  let char = str.charAt(0);

  if (char == 'a') {
    if (ansSoFar.length == 0 || ansSoFar.charAt(ansSoFar.length - 1) == 'a') {
      yesCall = countABCSubsequencesRecursion(str.slice(1), ansSoFar + char);
    }
  }

  if (char == 'b') {
    if (ansSoFar.charAt(ansSoFar.length - 1) == 'a' || ansSoFar.charAt(ansSoFar.length - 1) == 'b') {
      yesCall = countABCSubsequencesRecursion(str.slice(1), ansSoFar + char);
    }
  }

  if (char == 'c') {
    if (ansSoFar.charAt(ansSoFar.length - 1) == 'b' || ansSoFar.charAt(ansSoFar.length - 1) == 'c') {
      yesCall = countABCSubsequencesRecursion(str.slice(1), ansSoFar + char);
    }
  }

  noCall = countABCSubsequencesRecursion(str.slice(1), ansSoFar);

  return yesCall + noCall;
}

main();