function deepEqual(valueA, valueB) {
  // let ans = true;

  const compare = (valueA, valueB) => {
    let flag = true;
    if (typeof valueA !== typeof valueB) {
      flag = false;
      return flag;
    }
    // if ((Array.isArray(valueA) && !Array.isArray(valueA)) || (!Array.isArray(valueA) && Array.isArray(valueA))) {
    //   flag = false;
    //   return flag;
    // }
    if (typeof valueA === "number" || typeof valueA === "string" || typeof valueA === "boolean") {
      if (valueA != valueB) {
        flag = false;
        return flag;
      }
    }
    if (typeof valueA === "object") {
      Object.keys(valueA || []).forEach(key => {
        if (!valueB.hasOwnProperty(key)) {
          flag = false;
          return flag;
        } else {
          flag = deepEqual(valueA[key], valueB[key]) && flag;
        }
      })
    }
    if (Array.isArray(valueA)) {
      if (valueA.length !== valueB.length) {
        flag = false;
        return flag;
      } else {
        valueA.forEach((_, idx) => {
          flag = deepEqual(valueA[idx], valueB[idx]) && flag;
        })
      }
    }
    return flag
  }

  let ans = compare(valueA, valueB);

  return ans;
}


// const v1 = 'foo';
// const v2 = 'foo';

// console.log(deepEqual(v1, v2)) // true

// const v3 = { id: 1 };
// const v4 = { id: 1 };

// console.log(deepEqual(v3, v4)); // true

// const v5 = [1, 2, 3];
// const v6 = [1, 2, 3];

// console.log(deepEqual(v5, v6)) // true

// const v7 = [{ id: '1' }];
// const v8 = [{ id: '2' }];

console.log(deepEqual([true], [false])) // false