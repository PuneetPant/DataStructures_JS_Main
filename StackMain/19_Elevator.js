class Elevator {
  constructor(noOfElevators) {
    this.arr = new Array(noOfElevators).fill(0)
  }

  goTofloor(val) {
    let min = Number.MAX_SAFE_INTEGER;
    let elevatorIndex = 0;
    for (let i = 0; i < this.arr.length; i++) {
      if (Math.abs(this.arr[i] - val) < min) {
        elevatorIndex = i;
        min = Math.abs(this.arr[i] - val);
      }
    }
    this.arr[elevatorIndex] = val;
  }

  display() {
    console.log(this.arr)
  }
}

let ele = new Elevator(4);
ele.goTofloor(4)
ele.goTofloor(20)
ele.goTofloor(9)
ele.goTofloor(4)
ele.display()