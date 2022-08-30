const main = () => {
  let input = 5;
  let arr = [4, 2, 1, 3];
  let target = 10;

  const ans = targetSumSubsetsRecursion(arr, 0, 0, target);
  console.log(ans)
}

const targetSumSubsetsRecursion = (arr, idx, sumSoFar, target) => {
  if (idx >= arr.length) {
    if (sumSoFar == target) {
      return true
    }
    return false
  }
  if (sumSoFar == target) {
    return true
  }

  if (sumSoFar > target) {
    return false;
  }

  let takeCall = targetSumSubsetsRecursion(arr, idx + 1, sumSoFar + arr[idx], target);
  let notTakeCall = targetSumSubsetsRecursion(arr, idx + 1, sumSoFar, target);

  return takeCall || notTakeCall

}




main();