class Queue {
  constructor(size) {
    this.q = new Array(size).fill(0);
    this.front = 0;
    this.tail = 0;
    this.size = size;
  }

  add(val) {
    if (this.tail == this.size) {
      console.log('Queue is full');
      return;
    }
    let idx = (this.front + this.tail) % this.size;
    this.q[idx] = val;
    this.tail++;
  }
  display() {
    for (let i = 0; i < this.tail; i++) {
      let idx = (this.front + i) % this.size;
      console.log(this.q[idx])
    }
  }
  remove() {
    if (this.tail == 0) {
      console.log('Queue is empty')
      return;
    }
    this.front = (this.front + 1) % this.size;
    this.tail--;
  }

}

let queue = new Queue(5);
queue.add(10)
queue.add(20)
queue.add(30)
queue.add(40)
queue.add(50)
queue.remove()
queue.remove()
queue.add(60)
queue.display()