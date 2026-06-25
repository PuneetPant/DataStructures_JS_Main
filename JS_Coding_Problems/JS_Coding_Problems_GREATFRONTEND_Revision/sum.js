const sum = (numberA) => {
  console.log("numberA: ", numberA)
  return function (numberB) {
    console.log("numberB: ", numberB)
    if (typeof numberB !== "undefined") {
      return sum(numberA + numberB);
    } else {
      return numberA;
    }
  };
}
function sum(value) {
  return function (num) {
    if (typeof num !== 'undefined') {
      return sum(value + num)
    } else {
      return value
    }
  }
}
const result = sum(1)(2)(4)();
console.log(result)