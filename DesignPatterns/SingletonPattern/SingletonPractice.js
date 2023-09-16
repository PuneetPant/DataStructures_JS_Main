import Counter from "./index.js";

let count1 = Counter;
count1.increment(10);
console.log(count1.getCount())

let count2 = Counter;
count2.increment(10);
console.log(count2.getCount(), count1.getCount())