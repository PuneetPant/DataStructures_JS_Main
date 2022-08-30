import { PriorityQueue, MinPriorityQueue, MaxPriorityQueue } from '@datastructures-js/priority-queue';

const kLargrstElements = (arr, k) => {
  let pq = new MinPriorityQueue();
  let ans = [];

  arr.forEach((val, idx) => {
    if (idx < k) {
      pq.enqueue(val)
    } else {
      if (val > pq.front()) {
        pq.dequeue();
        pq.enqueue(val)
      }
    }

  })
  while (pq.size() > 0) {
    ans.push(pq.dequeue())
  }
  return ans;
}

const kSortedArray = (arr, k) => {
  let pq = new MinPriorityQueue();
  arr.splice(0, k + 1).forEach((val, idx) => {
    pq.enqueue(val)
  })
  let ans = [];
  for (let i = k + 1; i < arr.length; i++) {
    ans.push(pq.dequeue());
    pq.enqueue(arr[i])
  }
  while (pq.size() > 0) {
    ans.push(pq.dequeue())
  }
  return ans;
}

var MedianFinder = function () {
  this.left = new MaxPriorityQueue();
  this.right = new MinPriorityQueue();
};


MedianFinder.prototype.addNum = function (num) {
  let { right, left } = this
  if (right.size() > 0 && num > right.front()) {
    right.enqueue(num)
  } else {
    left.enqueue(num)
  }

  if (Math.abs(left.size() - right.size()) == 2) {
    if (left.size() > right.size()) {
      right.enqueue(left.dequeue())
    } else {
      left.enqueue(right.dequeue())
    }
  }
};


MedianFinder.prototype.findMedian = function () {
  let { left, right } = this
  if (left.size() >= right.size()) {
    return left.front()
  } else {
    return right.front()
  }
};

MedianFinder.prototype.remove = function () {
  let { left, right } = this
  if (left.size() >= right.size()) {
    return left.dequeue()
  } else {
    return right.dequeue()
  }
}

MedianFinder.prototype.display = function () {
  let { left, right } = this;
  console.log(left.toArray())
  console.log(right.toArray())
}

var mergeKLists = function (lists) {
  let pq = new MinPriorityQueue({ priority: x => x.val });

  for (let head of lists) {
    if (head) {
      pq.enqueue(head);
    }

  }
  // console.log(pq.toArray())
  let ans = new ListNode();
  let head = ans;

  while (pq.size() > 0) {
    let { val, next } = pq.dequeue().element;
    // console.log(val, next)

    let node = new ListNode(val);
    ans.next = node;
    ans = ans.next;

    if (next != null) {
      pq.enqueue(next)
    }
  }

  return head.next
}


const main = () => {
  // console.log(kLargrstElements([12, 62, 22, 15, 37, 99, 11, 37, 98, 67, 31, 84, 99, 4], 5))
  // console.log(kSortedArray([12, 62, 22, 15, 37, 99, 11, 37, 98, 67, 31, 84, 99, 4], 3))
  // let obj = new MedianFinder()
  // obj.addNum(10)
  // obj.addNum(20)
  // obj.addNum(30)
  // obj.addNum(40)
  // obj.display()
  // console.log(obj.findMedian())
}

main();