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

const result = sum(1)(2)(4)();
console.log(result)