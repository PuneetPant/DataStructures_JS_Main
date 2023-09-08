// Pre-requisite
// let val = "aaaa";
// for (let j = 0; j < val.length; j++) {
//   let pre = val.slice(0, j + 1);
//   let suff = val.slice(j + 1);
//   console.log(pre, suff);
// }
// "a", "aaa"
// "aa", "aa"
// "aaa", "a"
// "aaaa", ""

const textSearch = (str, query) => {
  let arr = str.split(" ");
  query = query.toLowerCase();
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i].toLowerCase();
    for (let j = 0; j < val.length; j++) {
      let pre = val.slice(0, j + 1);
      let suff = val.slice(j + 1);
      // console.log(pre, suff);
      if (pre == query && suff == query) {
        arr[i] = `<b>${arr[i]}</b>`;
        break;
      } else if (pre == query) {
        arr[i] = `<b>${arr[i].slice(0, j + 1)}</b>${arr[i].slice(j + 1)}`;
        break;
      } else if (suff == query) {
        arr[i] = `${arr[i].slice(0, j + 1)}<b>${arr[i].slice(j + 1)}</b>`;
        break;
      }
    }
  }
  console.log(arr.join(" "));
};
textSearch("aabbbbcc", "bb");
textSearch("The Quick Brown Fox Jumps Over The Lazy Dog", "fox");
// 'The Quick Brown <b>Fox</b> Jumps Over The Lazy Dog'
textSearch("The hardworking Dog overtakes the lazy dog", "dog");
// 'The hardworking <b>Dog</b> overtakes the lazy <b>dog</b>'
