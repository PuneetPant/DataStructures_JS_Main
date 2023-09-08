
const textSearch = (str, query) => {
  let arr = str.split(" ");
  let ans = arr.map(it => {
    let val = it.toLowerCase();
    if (val == query.toLowerCase()) {
      return `<b>${it}</b>`;
    }
    return it;
  })
  ans = ans.join(" ");
  console.log(ans);
  return ans;
}

textSearch('The Quick Brown Fox Jumps Over The Lazy Dog', 'fox');
// 'The Quick Brown <b>Fox</b> Jumps Over The Lazy Dog'
textSearch('The hardworking Dog overtakes the lazy dog', 'dog');
// 'The hardworking <b>Dog</b> overtakes the lazy <b>dog</b>'