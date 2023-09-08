const promiseMaker = (delay) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(delay)
    }, delay)
  })
}

const newAll = (arr) => {
  let ans = [];
  let ansLength = 0;
  return new Promise((res, rej) => {
    arr.forEach(async (it, idx) => {
      console.log(typeof it)
      try {
        let resp = await it;
        ans[idx] = resp;
        ansLength += 1;
        if (ansLength === arr.length) {
          res(ans);
        }
      } catch (e) {
        rej(e)
      }
    })
  })
}

const main = () => {
  const promiseArr = [promiseMaker(4000), promiseMaker(2000), promiseMaker(3000)];
  // console.log(promiseArr);
  // const ans = Promise.all(promiseArr);
  // console.log(ans)

  // Ways to resolve a promise : 

  // 1. Using Then
  // ans.then((val) => {
  //   console.log(val)
  // })

  // 2. Using Async-Await
  // const b = await ans;
  // console.log(b)

  let ans = newAll(promiseArr);
  console.log(ans)
  ans.then(val => {
    console.log(val)
  })

}
main();