Array.prototype.myFind = function (fn) {
  // let arr = [...this];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      return this[i];
    }
  }
  return undefined;
}

const main = () => {
  // let arr = [1, 2, 3, 4, 6, 7, 8, 45];
  // let ans = arr.find((val) => {
  //   return val > 2
  // })
  // console.log(ans)

  let arr = [1, 2, 3, 4, 6, 7, 8, 45];
  let ans = arr.myFind((val) => {
    return val > 5
  })
  console.log(ans)

}

main();