const promiseMaker = (time, successFlag = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (successFlag) {
        resolve(time)
      } else {
        reject(time)
      }
    }, time * 1000)
  })
}
function promiseAllSettled(arr) {
  let ans = [];
  let ansLength = 0;

  return new Promise((resolve, reject) => {
    // Check for if it is an empty array
    if (arr.length == 0) {
      return resolve(ans)
    }
    for (let i = 0; i < arr.length; i++) {
      let valPromise = arr[i];
      // Check for if it just a number, then we dont need to resolve it
      if (typeof valPromise === "number") {
        ans[i] = { status: 'fulfilled', value: valPromise };
        ansLength += 1
        if (ansLength == arr.length) {
          resolve(ans)
        }
      } else {
        valPromise.then(val => {
          ans[i] = { status: 'fulfilled', value: val };
          ansLength += 1
          if (ansLength == arr.length) {
            resolve(ans)
          }
        }).catch(err => {
          ans[i] = { status: 'rejected', reason: err }
          ansLength += 1;
          if (ansLength == arr.length) {
            resolve(ans)
          }
        })
      }
    }
  })
}

const main = () => {
  const promiseArr = [promiseMaker(3), promiseMaker(4, false), promiseMaker(2, false)];
  // Promise.allSettled(promiseArr).then((val) => {
  //   console.log(val)
  // })

  promiseAllSettled(promiseArr).then(val => {
    console.log(val)
  })
}

main();