
function promiseAny(arr) {
  let rejArr = [];
  let rejCount = [];
  return new Promise((res, rej) => {
    arr.forEach(async (it, idx) => {
      try {
        let resp = await it;
        res(resp);
      } catch (e) {
        rejArr[idx] = e;
        rejCount++;
        if (rejCount === arr.length) {
          rej(rejArr)
        }
      }
    })
  })
}