let counter = 1;
const fetchData = () => {
  console.log("fetching data ...", counter++);
};

const throttle = (fn, delay) => {
  let flag = true;
  return function () {
    let t = this;
    let args = arguments;
    if (flag) {
      fn.apply(t, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const betterFetchData = throttle(fetchData, 3000);
