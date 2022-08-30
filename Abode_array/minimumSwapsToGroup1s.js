const minimumSwapstoGroup1s = () => {
  const arr = [1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1];

  let count = 0; // this is the 'm' used in explanation
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      count++;
    }
  }
  console.log('count: ', count)

  let start = 0;
  let end = count - 1;
  let windowCount = 0;

  arr.slice(0, count).forEach(idx => {
    idx == 0 ? windowCount++ : ''
  })

  let ans = windowCount;
  while (end < arr.length - 1) {
    end++
    if (arr[end] == 0) {
      windowCount++
    }
    if (arr[start] == 0) {
      windowCount--;
    }
    start++

    if (windowCount < ans) {
      ans = windowCount
    }
  }
  console.log(ans)

}






minimumSwapstoGroup1s()