const promiseMaker = (time, successFlag = true) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (successFlag) {
        res(time)
      } else {
        rej(`Failed:${time}`)
      }

    }, time * 1000)
  })
}

const newPromiseRace = (arr) => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      let valPromise = arr[i];
      valPromise.then(val => {
        resolve(val)
      }).catch(err => {
        reject(err)
      })
    }
  })
}

const main = () => {
  const promiseArr = [promiseMaker(4), promiseMaker(2, false), promiseMaker(3)]

  Promise.any(promiseArr).then(val => {
    console.log(val)
  })

  // newPromiseAny(promiseArr).then(val => {
  //   console.log(val)
  // }).catch(err => {
  //   console.log(err)
  // })

}

main()