Function.prototype.myCall = function (obj) {
  console.log(this)
  let fn = this;
  console.log(fn)
  fn.apply(obj);
}

const main = () => {

  const name = {
    firstName: 'PunZ',
    lastName: 'Pant',
    middleName: " "
  }
  let printName = function () {
    console.log(this.firstName + " " + this.lastName)
  }

  // printName.call(name)

  printName.myCall(name)
}

main();