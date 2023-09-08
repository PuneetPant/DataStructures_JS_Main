const showAllKeys = (obj) => {
  Object.keys(obj).forEach(key => {
    if (obj.hasOwnProperty(key)) {
      console.log(key)
    }
  })
}

const showAllKeysValues = (obj) => {
  Object.values(obj).forEach(val => {
    console.log(val)
  })
}
const isEmptyObject = (obj) => {
  return !Object.keys(obj).length
}

const connecting2Objects = (obj1, obj2) => {
  obj2.__proto__ = obj1;
  console.log(obj2['name']);
  // Essentially obj2 is now the child of obj1;
  // So as ths child has all the aadats/properties of their parents
  // in the same way obj2 now has all the properties of its papa obj1. 

}

const func = () => {
  let obj = {

    get propName() {
      // getter, the code executed on getting obj.propName
      return obj.propName
    },

    set propName(value) {
      // setter, the code executed on setting obj.propName = value
      obj.propName = value
    }
  };
  obj.name = 'Poo';
  console.log(obj)
}

const funcPrivate = () => {
  class ClassWithPrivateFields {
    #privateVar;
    publicVar;

    #privatFunc() {
      this.#privateVar = 7;
      this.publicVar = 10;
    }

    publicFunc() {
      this.#privatFunc();
      // console.log(val.#privateVar)
      return [this.#privateVar, this.publicVar];
    }
  }

  // driver code
  const instance = new ClassWithPrivateFields();

  // can't access private variable
  // instance.privateVar;                     // undefined

  // can't access private function
  // instance.privatFunc();                  // Error
  console.log(instance.publicFunc());                  // 7, 10
}


const keyValuePrinterOfNestedObj = () => {
  let obj = {
    name: 'Raju',
    age: 36,
    address: {
      FlatNo: '131',
      Building: 'B-2',
      street: {
        LaneNo: 2,

      }
    },
    work: 'ITUS',
    degree: 'dopeher',
  }

  const helper = (obj) => {

    Object.keys(obj).forEach(key => {
      if (typeof obj[key] !== 'object') {
        console.log(`${key} -->  ${obj[key]}`)
      } else {
        helper(obj[key])
      }
    })
  }

  helper(obj)
}

const deepCopyMethods = () => {
  let obj = {
    name: 'Raju',
    age: 36,
    address: {
      FlatNo: '131',
      Building: 'B-2',
      street: {
        LaneNo: 2,

      }
    },
    shiftTimings: [1, 4, 7],
    work: 'ITUS',
    degree: 'dopeher',
  }

  // // Method - 1
  // console.log(Object.assign({}, obj))

  // // Method - 2
  // let val = { ...obj }
  // console.log(val)

  // Method - 3
  const deepCopyHelper = (obj) => {
    let copyObj = {}
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] !== 'object' || Array.isArray(obj[key])) {
        copyObj[key] = obj[key];
      } else {
        copyObj[key] = deepCopyHelper(obj[key])
      }
    })
    console.log(copyObj)
    return copyObj
  }
  let ans = deepCopyHelper(obj)
  console.log(ans)
}

const stringifyExceptOne = (obj, exceptKey) => {
  // let str = JSON.stringify(obj)
  // console.log(typeof str, str)
  const helper = (obj) => {

    Object.keys(obj).forEach(key => {
      if (key !== exceptKey) {

      }
    })
  }
  let ans = { name: "pp" };
  String(ans)
  console.log(typeof `${ans}`)
  // helper(obj)
}

const makeIterator = (arr) => {
  let currIndex = 0

  return {
    next: function () {
      if (currIndex < arr.length) {
        let val = arr[currIndex];
        currIndex++;
        return { value: val, done: false }
      } else {
        return { value: undefined, done: true }
      }
    }
  }
}


const Wrapper_methodChainingFunction = () => {
  const calculator = {
    total: 0,
    add(val) {
      this.total += val
      return this
    },
    subtract(val) {
      this.total -= val;
      return this
    },
    multiply(val) {
      this.total = this.total * val
      return this
    },
    divide(val) {
      this.total = this.total / val;
      return this
    }
  }
  calculator.add(10).subtract(2).divide(2).multiply(5);
  console.log(calculator.total);
}

const Wrapper_propertyCounter = () => {

  // METHOD - 1
  // let obj = {
  //   val: 1
  // }
  // Object.defineProperty(obj, "counter", {
  //   get() {
  //     return ++this.val;
  //   }
  // })

  // METHOD - 2
  let obj = {
    val: 1,
    get counter() {
      return ++this.val
    }
  }

  console.log(obj.counter);
  console.log(obj.counter);
  console.log(obj.counter);
}

const deepEqual1 = (obj1, obj2) => {

  let helper = (obj, toBeComparedObj) => {
    Object.keys(obj).forEach(key => {
      if (toBeComparedObj.hasOwnProperty(key) == false) {
        flag = false;
        return;
      }
      if (typeof obj[key] != 'object') {
        if (obj[key] == toBeComparedObj[key]) {
          return;
        } else {
          flag = false;
          return;
        }
      } else {
        console.log(obj[key], flag)
        flag = helper(obj[key], toBeComparedObj[key])
        console.log(obj[key], flag)
        if (flag == false) {
          return;
        }
      }
    })
    // console.log("flag: ", flag, obj)
    return flag
  }
  let flag = true;
  helper(obj1, obj2);
  return flag
}

const Wrapper_class = () => {
  class Employee {
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }

    salary(value) {
      this.salary = value
    }
  }

  let gigi = new Employee(1, "Gigi");
  gigi.salary(5000)
  console.log(gigi)
}




(function main() {
  let obj = {
    name: 'Raju',
    age: 36,
    work: 'ITUS',
    degree: 'dopeher'
  }
  // Show All the keys of an object
  // showAllKeys(obj)

  // Show All the keys values of an object
  // showAllKeysValues(obj)

  // Write a function which can check if a given object is empty or not
  // console.log(isEmptyObject(obj));

  // Connect 2 objects so that one object is prototypically connected to the other
  // connecting2Objects({ name: 'Paul' }, { surname: 'Tickoo' })

  // Create an object with getter and setter for property
  // func()

  // Write a class which uses private variable and function
  // funcPrivate();

  // Display all the keys and values of a nested object
  // keyValuePrinterOfNestedObj();

  // Show how a deep copy of an object can be done
  // deepCopyMethods()

  // Stringify an object by excluding the 'password' property
  // console.log(stringifyExceptOne({
  //   id: 1,
  //   username: "John",
  //   password: "secret",
  //   email: "john@email.com",
  // }, "password"))

  // let it = makeIterator([1, 5, 9, 4]);
  // console.log(it)
  // console.log(it.next())
  // console.log(it.next())
  // console.log(it.next())
  // console.log(it.next())

  // Method chaining 
  // Wrapper_methodChainingFunction()

  // Create an object with property counter which keeps 
  // incrementing on every access
  // Wrapper_propertyCounter()

  // Write a function which can be used to deeply 
  // compare 2 nested objects
  // Example
  // const obj1 = {
  //   name: "John",
  //   details: {
  //     x: 1,
  //     y: 2,
  //   },
  // };

  // const obj2 = {
  //   name: "John",
  //   details: {
  //     y: 2,
  //     x: 1,
  //   },
  // };

  // let ans = deepEqual1(obj1, obj2);
  // console.log("ans: ", ans)


  // Design a class for employee which takes id and name in 
  // during construction of object and has a salary property
  Wrapper_class();

})()

