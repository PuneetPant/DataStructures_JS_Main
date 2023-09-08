Array.prototype.mySort = function () {
  let arr = this;
  console.log(this);

  const mergeTwoSortedArray = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let toReturn = [];
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        toReturn.push(arr1[i]);
        i++;
      } else {
        toReturn.push(arr2[j]);
        j++;
      }
    }

    while (i < arr1.length) {
      toReturn.push(arr1[i]);
      i++;
    }

    while (j < arr2.length) {
      toReturn.push(arr2[j]);
      j++;
    }

    return toReturn;
  }

  const mergeSort = (arr, lo, hi) => {
    if (lo === hi) {
      return [arr[lo]];
    }
    let mid = Math.floor((lo + hi) / 2);

    let merge1 = mergeSort(arr, lo, mid);
    let merge2 = mergeSort(arr, mid + 1, hi);

    let pp = mergeTwoSortedArray(merge1, merge2);
    console.log("pp: ", pp);
    return pp;
  }

  arr = mergeSort(arr, 0, arr.length - 1);
  // return arr;
  for (let i = 0; i < arr.length; i++) {
    this[i] = arr[i];
  }
}


let arr = [7, 4, 1, 3, 8, 2, 5, 6];
// arr.sort();
// console.log(arr);
arr.mySort();
console.log(arr);
// console.log(ans)