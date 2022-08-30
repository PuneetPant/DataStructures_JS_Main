

const waterCollection = () => {
  // const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  // const arr = [2, 0, 2]
  const arr = [4, 2, 3];

  let impediments = 0;
  let water = 0;
  let i = 0;
  let j = 1;
  let map = {};

  while (j < arr.length) {
    if (arr[j] >= arr[i]) {
      map[`${i}${j}`] = 0;
      water += ((j - i - 1) * arr[i]) - impediments;
      impediments = 0;
      i = j;
      j++
    } else {
      impediments += arr[j];
      j++;
    }
  }

  console.log(map)
  console.log(water)

  impediments = 0;
  i = arr.length - 2;
  j = arr.length - 1;
  while (i >= 0) {
    if (arr[i] >= arr[j]) {
      if (!map.hasOwnProperty(`${i}${j}`)) {
        map[`${i}${j}`] = 0;
        water += ((j - i - 1) * arr[j]) - impediments;
      }
      impediments = 0;
      j = i;
      i--
    } else {
      impediments += arr[i]
      i--;
    }
  }
  console.log(map)
  console.log(water)
}


waterCollection()