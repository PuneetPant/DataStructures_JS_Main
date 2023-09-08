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

const newAllSettled = (arr) => {
  let ans = [];
  let count = 0;
  return new Promise((res, rej) => {
    arr.forEach(async (it, idx) => {
      try {
        let resp = await it;
        ans[idx] = { status: "fulfilled", value: resp };
        count++;
      } catch (e) {
        // let resp = await e;
        ans[idx] = { status: "rejected", reason: e };
        count++;
      }
      if (count === arr.length) {
        res(ans)
      }
    })
  })
}

const main = () => {
  const promiseArr = [promiseMaker(4000), promiseMaker(2000), promiseMaker(3000, false)];
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

  let ans = newAllSettled(promiseArr);
  console.log(ans)
  ans.then(val => {
    console.log(val)
  })

}
main();