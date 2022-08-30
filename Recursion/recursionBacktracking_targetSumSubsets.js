const main = () => {
  let n = 5;
  let arr = [10, 20, 30, 40, 50];
  let target = 60;

  // targetSumSubsets1(arr, 0, '', 0, target)
  targetSumSubsets2(arr, 0, '', 0, target)
}

const targetSumSubsets1 = (arr, idx, pathSoFar, sumSoFar, target) => {
  if (sumSoFar == target) {
    console.log(pathSoFar + '.')
    return;
  }


  for (let i = idx; i < arr.length; i++) {
    if (sumSoFar + arr[i] <= target) {
      targetSumSubsets1(arr, i + 1, pathSoFar + arr[i] + ', ', sumSoFar + arr[i], target)
    }
  }
}

const targetSumSubsets2 = (arr, idx, pathSoFar, sumSoFar, target) => {
  if (idx == arr.length) {
    if (sumSoFar == target) {
      console.log(pathSoFar)
    }
    return
  }



  if (sumSoFar + arr[idx] <= target) {
    targetSumSubsets2(arr, idx + 1, pathSoFar + arr[idx] + ' ', sumSoFar + arr[idx], target)
  }

  targetSumSubsets2(arr, idx + 1, pathSoFar, sumSoFar, target)

}

main()