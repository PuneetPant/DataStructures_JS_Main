export default function promiseRace(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      return;
    }

    iterable.forEach(async (item) => {
      try {
        const value = await item;
        resolve(value);
      } catch (err) {
        reject(err);
      }
    });
  });
}

const p0 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(42);
  }, 500);
});
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Puneetttttt");
  }, 400);
});

promiseRace([p0, p1]);

// Promise.race([p0, p1]).then((value) => {
//   console.log(value);
//   // Both resolve, but promise2 is faster
// });
