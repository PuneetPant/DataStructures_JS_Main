import fetch from "node-fetch";

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(10)
//   }, 1000)
// })

// promise.then(data => {
//   console.log(data)
// }).catch(e => {
//   console.log(e)
// })

const getData = async () => {
  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await resp.json();
    // console.log(data);
    return data;
  } catch (e) {
    console.log("err: ", e);
  }
}
// // console.log(getData())
// const getter = async () => {
//   const data = await getData();
//   console.log('data: ', data)
// }
// getter();
// const ans = await getData();
// console.log("ans: ", ans)

const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log(10)
  })
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