
const promiseMaker = (time, successFlag = true) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (successFlag) {
        res(time)
      } else {
        rej(time)
      }
    }, time)
  })
}

// things to remember:
// 1) Promise.all always returns a promise
// 2) Promise.all returns a promise of resolved arrays
// 3) While writing the code for the same, remmeber that it can be passed a number 
//    value, insert a condition for that as well.
const newPromiseAll = (arr) => {

  let ans = [];
  let ansLength = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      let valPromise = arr[i];
      if (typeof valPromise === 'number') {
        ans[i] = valPromise;
        ansLength += 1;
        // console.log("here", val, ansLength)
        if (ansLength == arr.length) {
          resolve(ans)
        }
      } else {
        valPromise.then(val => {
          ans[i] = val;
          ansLength += 1;
          // console.log("here", val, ansLength)
          if (ansLength == arr.length) {
            resolve(ans)
          }
          console.log("ans:", ans)
        })
          .catch(error => {
            console.log('here')
            reject("Rejected Man", error)
          })
      }

    }
  })

}


const main = () => {
  // const promise1 = Promise.resolve(3);
  // const promise2 = 42;
  // const promise3 = new Promise((resolve, reject) => {
  //   setTimeout(resolve, 100, 'foo');
  // });
  // newPromiseAll([])

  const promiseArr = [promiseMaker(4000, true), promiseMaker(3000, false), promiseMaker(2000, true)]
  // Promise.all(promiseArr).then(value => {
  //   console.log(value)
  // })

  // This example is for remembering that Promise.all returns
  // a promise
  // let ans = Promise.all(promiseArr);
  // console.log("ans: ", ans)

  newPromiseAll(promiseArr).then(values => {
    console.log(values)
  })

}

main()