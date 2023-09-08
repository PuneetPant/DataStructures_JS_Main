const func1 = (p1, p2) => {
  // This will not work ,
  // because arguments keyword 
  // cannot be used inside arrow functions
  console.log(arguments)
}

const func2 = (...args) => {
  // This will not work ,
  // because arguments keyword 
  // cannot be used inside arrow functions
  console.log(args)
}

function func(...args) {
  console.log(args);
  // console.log(p1, p2)
}

func2("Tim", "Tina")