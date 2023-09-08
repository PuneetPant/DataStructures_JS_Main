
//Q. Create a function which receives a function as argument and executes it after 2 seconds
const funcExecutor = (fn) => {
  setTimeout(() => {
    fn()
  }, 2000)
}
function printFive() {
  console.log('5');
}

//Q. Print numbers from 1 to 10 with delay of 1 second between each value being printed
const promiseMaker = (val) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(val)
    }, 1000)
  })
}
const printFrom1to10With1SecDelay = async () => {
  for (let i = 1; i <= 10; i++) {
    try {
      let val = await promiseMaker(i);
      console.log(val)
    } catch (e) {
      console.log(e)
    }
  }
}

// Q. Print numbers from 1 to 10 with delay of 1 second between each value being printed using setInterval

const printFrom1to10With1SecDelayUsingSetInterval = () => {
  let i = 1;
  const intervalId = setInterval(() => {
    console.log(i);
    i++;
    if (i == 11) {
      clearInterval(intervalId)
    }
  }, 1000)
}

// Write a utility which prints numbers starting from an initial value and increment 
// in steps which can be started and stopped by the user, any number of times

function timer(init = 0, step = 1) {
  var intervalId;
  var count = init;

  function startTimer() {
    if (!intervalId) {
      intervalId = setInterval(() => {
        console.log(count);
        count += step;
      }, 1000);
    }
  }

  function stopTimer() {
    clearInterval(intervalId);
    intervalId = null;
  }

  return {
    startTimer,
    stopTimer,
  };
}

const asyncParallel = (asyncArr, callback) => {
  let ans = [];
  let ansIdx = 0;

  asyncArr.forEach((asyncFunc, idx) => {
    // console.log(asyncFunc)
    asyncFunc((val) => {
      ans[ansIdx] = val;
      ansIdx++;
      if (ansIdx >= asyncArr.length) {
        callback(ans)
      }
    })
  })
}

//Q. Execute 3 asynchronous functions one after the other in sequence using promise chaining

const promiseChaining = () => {
  const promiseArr = [promiseMaker(2), promiseMaker(4), promiseMaker(3)];
  promiseArr[0].then(val0 => {
    console.log(val0)
    promiseArr[1].then(val1 => {
      console.log(val1)
      promiseArr[2].then(val2 => {
        console.log(val2)
      }).catch(e => {
        console.log(`${e} at 2nd index`)
      })
    }).catch(e => {
      console.log(`${e} at 1st index`)
    })
  }).catch(e => {
    console.log(`${e} at 0th index`)
  })
}




const main = () => {
  // funcExecutor(printFive)

  // printFrom1to10With1SecDelay()

  // printFrom1to10With1SecDelayUsingSetInterval();

  // const timerObj = timer(100, 10);
  // timerObj.startTimer();
  // setTimeout(() => {
  //   timerObj.stopTimer();
  // }, 5000);


  // Below one can be skipped
  // Example
  // function asyncFunc1(callback) {
  //   console.log(callback)
  //   setTimeout(() => {
  //     callback(1);
  //     // return 1
  //   }, 3000);
  // }
  // function asyncFunc2(callback) {
  //   setTimeout(() => {
  //     callback(2);
  //   }, 2000);
  // }
  // function asyncFunc3(callback) {
  //   setTimeout(() => {
  //     callback(3);
  //   }, 1000);
  // }
  // asyncParallel([asyncFunc1, asyncFunc2, asyncFunc3], result => {
  //   console.log(result);                                            // 1, 2, 3 (prints results of each asynchronous function in order)
  // });


  // promiseChaining();



}

main();
