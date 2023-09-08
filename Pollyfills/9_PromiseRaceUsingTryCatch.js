const promiseMaker = (delay, flag = true) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (flag) {
        res(delay)
      } else {
        rej(`Failed${delay}`)
      }

    }, delay)
  })
}

const newRace = (arr) => {

  return new Promise((res, rej) => {
    arr.forEach(async (it, idx) => {
      try {
        let resp = await it;
        res(resp)
      } catch (e) {
        rej(e)
      }
    })
  })
}

const main = () => {
  const promiseArr = [promiseMaker(4000), promiseMaker(2000, false), promiseMaker(3000, false)];
  // console.log(promiseArr);
  // const ans = Promise.race(promiseArr);
  // console.log(ans)

  // Ways to resolve a promise : 

  // 1. Using Then
  // ans.then((val) => {
  //   console.log(val)
  // })

  // 2. Using Async-Await
  // const b = await ans;
  // console.log(b)

  let ans = newRace(promiseArr);
  console.log(ans)
  ans.then(val => {
    console.log(val)
  })

}
main();