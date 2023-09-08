const promiseMaker = (time, successFlag = true) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (successFlag) {
        res([`aloo`, 'lassan'])
      } else {
        rej("Failed")
      }

    }, time)
  })
}

const getData = async () => {
  let promise = promiseMaker(2000, false);
  try {
    let resp = await promise;
    return resp;
  } catch (err) {
    return err;
  }
}

const main = async () => {
  const data = await getData();
  console.log(data)
}

main();