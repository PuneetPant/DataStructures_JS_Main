const makeCounter = () => {
  let count = 0;
  return () => {
    return count++
  }
}
const counter = makeCounter();
console.log(counter()) // 0
console.log(counter()) // 1
counter(); // 2
