const getData = () => {
  console.log("fetch data ...");
};

const debounce = (fn, delay) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply();
    }, delay);
  };
};

const betterFunction = debounce(getData, 3000);
