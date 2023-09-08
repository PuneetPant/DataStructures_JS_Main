// Basics

function* generate() {
  yield 1
  yield 2
  yield 3
  return 10
}

const generatorObj = generate();
console.log(generatorObj.next())
console.log(generatorObj.next())
console.log(generatorObj.next())
console.log(generatorObj.next())
console.log(generatorObj.next())

function* gen2() {
  yield 2;
  yield 3;
}
function* gen1() {
  yield 1;
  yield* gen2();
  yield 4;
}

// driver code
for (let value of gen1()) {
  console.log(value);
}