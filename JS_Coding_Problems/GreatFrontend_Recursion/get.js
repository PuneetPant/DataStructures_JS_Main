const get = (object, path) => {
  // let ans = ''
  const helper = (object, pathArr, idx) => {
    // console.log(object)
    if (idx === pathArr.length) {
      // ans = object
      return object;
    }

    const key = pathArr[idx];
    let pp = '';
    if (object.hasOwnProperty(key)) {
      pp = helper(object[key], pathArr, idx + 1);
    } else {
      return pp;
    }
    return pp;
  }
  const ans = helper(object, path.split('.'), 0)
  console.log('Answer is : ', ans)
}

const john = {
  profile: {
    name: { firstName: 'John', lastName: 'Doe' },
    age: 20,
    gender: 'Male',
  },
};

const jane = {
  profile: {
    age: 19,
    gender: 'Female',
  },
};

// function getFirstName(user) {
//   return user.profile.name.firstName;
// }



get(john, 'profile.name.firstName'); // 'John'
get(john, 'profile.gender'); // 'Male'
get(jane, 'profile.name.firstName'); // undefined
