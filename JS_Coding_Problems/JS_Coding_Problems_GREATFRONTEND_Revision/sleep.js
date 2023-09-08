async function sleep(millis) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(millis)
    }, millis)
  });
}


let t = Date.now()
sleep(200).then(() => console.log(Date.now() - t)) // 100
