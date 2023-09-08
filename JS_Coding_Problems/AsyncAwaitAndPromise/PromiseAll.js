
const promiseMaker = (timer, successFlag = true) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (successFlag) {
        res(timer)
      } else {
        rej("Rejected Ass.")
      }
    }, timer * 1000)
  })
}

const newPromiseAll = (promiseArr) => {
  let ans = [];
  let ansLength = 0;
  return new Promise((res, rej) => {
    promiseArr.forEach((promise, idx) => {
      promise.then((val) => {
        console.log(val)
        ans[idx] = val;
        ansLength += 1;
        if (ansLength === promiseArr.length) {
          res(ans);
        }
      }).catch(err => {
        rej("Rejected")
      })
    })
  })
}


const main = () => {
  const promiseArr = [promiseMaker(4), promiseMaker(3, false), promiseMaker(2)];

  // Promise.all(promiseArr).then((val) => {
  //   console.log(val)
  // })

  newPromiseAll(promiseArr).then(val => {
    console.log(val)
  })
}

main();