let count = 0;
const Counter = {
  increment: function (value = 1) {
    count += value;
    return count;
  },
  decrement: function (value = 1) {
    count -= value;
    return count;
  },
  getCount: function () {
    return count;
  }
}
Object.freeze(Counter);
export default Counter;