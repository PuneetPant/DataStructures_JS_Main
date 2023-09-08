const compactObject = (obj) => {

  const convert = (obj) => {
    console.log(Object.keys(obj))
    Object.keys(obj).forEach(it => {
      console.log(obj[it])
    })
  }
  convert(obj);
}

compactObject([null, 0, 5, [0], [false, 16]])

