
export default function listFormat(arr, options = {}) {
  let {length, sorted, unique} = options;
  // console.log(length, sorted, unique);
  if(!arr || arr.length == 0 ){
    return ''
  }
  if(arr.length == 1){
    return arr[0]
  }
  if(sorted){
    arr = arr.sort();
  }
  if(unique){
    let ans = [];
    for(let item of arr){
      if(!ans.includes(item)){
        ans.push(item);
      }
    }
    arr = [...ans];
  }
  if(length && length > 0 && length < arr.length){
    for(let i = 0; i < arr.length; i++){
      if(i >= length){
        let val = arr.length - i;
        arr[i] = `${arr.length - i} ${val > 1 ? 'others': 'other'}`;
        arr = arr.slice(0,i+1);
        console.log(arr)
        break;
      }
    }
  }
  console.log(arr)
  console.log(arr.slice(0, arr.length - 1).join(", ") + ' and ' + arr[arr.length - 1])
  // return arr.join(",") + ' and ' + arr[arr.length - 1];
  return arr.slice(0, arr.length - 1).join(", ") + ' and ' + arr[arr.length - 1]
}

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 3,
}); // 'Bob, Ben, Tim and 2 others'
// listFormat(); // ''
// listFormat([]); // ''

// listFormat(['Bob']); // 'Bob'
// listFormat(['Bob', 'Alice']); // 'Bob and Alice'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John']);
// 'Bob, Ben, Tim, Jane and John'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
//   length: 3,
// }); // 'Bob, Ben, Tim and 2 others'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
//   length: 4,
// }); // 'Bob, Ben, Tim, Jane and 1 other'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
//   length: 3,
//   sorted: true,
// }); // 'Bob, Ben, Tim, Jane and 1 other'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John', 'Bob'], {
//   length: 3,
//   unique: true,
// }); // 'Bob, Ben, Tim and 2 others'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
//   length: 3,
//   unique: true,
// }); // 'Bob, Ben, Tim, Jane and John'

// listFormat(['Bob', 'Ben', '', '', 'John']); // 'Bob, Ben and John'
