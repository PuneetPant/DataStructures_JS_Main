import { get } from "http";
import fetch from "node-fetch";
// let promise = new Promise((resolve, reject) => {
//   // console.log(2)
//   reject(3)
// })

// promise.then(res => [
//   console.log(res)
// ]).catch(err => {
//   console.log(err)
// })
// console.log(promise)

// const promise = fetch('https://jsonplaceholder.typicode.com/todos');
// promise.then(res => {
//   return res.json()
// }).then(ans => {
//   console.log('ans: ', ans)
// })

// function getData() {
//   const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
//   fetchPromise
//     .then((result) => {
//       // console.log(result);
//       return result.json();
//     })
//     .then((res) => {
//       console.log(res);
//       return res;
//     })
//     .catch((err) => {
//       console.log(err)
//     })

// }
// getData()

// const getData = async () => {
//   try {
//     const response = await fetch("https://ghibliapi.herokuapp.com/people");
//     return response;
//   }
//   catch (err) {
//     return err;
//   }

// }
// const response = getmm,,,,,,÷Data()
// response.then(res => {

// })

// const getData =  () => {
//   try {
//     const resp =  new Promise((res, rej) => {
//       setTimeout(() => {
//         res('RESPONSE!!!!!!!!')
//       }, 1000)
//       setTimeout(() => {
//         rej('Error aa gyi hai!!')
//       })
//     })
//     return resp;
//   }
//   catch (err) {
//     return err;
//   }
// }
// const promise = getData();
// promise.then((resp) => {
//   console.log(resp)
// })

// const getData = () => {
//   try {
//     const promise = new Promise((res, rej) => {
//       setTimeout(() => {
//         res('positive response')
//       }, 1000)
//       setTimeout(() => {
//         rej('negative response')
//       }, 2000)

//     })
//     return promise
//   } catch (err) {
//     return err
//   }
// }

// const response = getData();
// response
//   .then((res) => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.log(err)
//   })

const promise = new Promise((resolve) => {
  console.log(2);
  resolve();
  console.log(3);
});

promise
  .then((res) => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });
