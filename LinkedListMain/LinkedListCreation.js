class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addLast(val) {
    let temp = new Node(val)
    if (this.size == 0) {
      this.head = this.tail = temp;
    } else {
      this.tail.next = temp;
      this.tail = temp;
    }
    this.size++;
  }

  display() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  removeFirst() {
    if (this.size == 0) {
      console.log('Linked list is empty')
    } else if (this.size == 1) {
      this.head = null;
      this.tail = null;
      this.size--;
    } else {
      this.head = this.head.next;
      this.size--;
    }
  }

  removeLast() {
    if (this.size == 0) {
      console.log('Linked list in empty')
    } else if (this.size == 1) {
      this.head = null;
      this.tail = null;
      this.size--;
    } else {
      let temp = this.head;
      while (temp.next != this.tail) {
        temp = temp.next
      }
      temp.next = null;
      this.tail = temp;
      this.size--;
    }
  }

  getFirst() {
    if (this.head == null) {
      console.log('linked list is empty');
      return -1;
    } else {
      return this.head.data;
    }
  }

  getLast() {
    if (this.tail == null) {
      console.log('linked list is empty');
      return -1;
    } else {
      return this.tail.data;
    }
  }

  kthFromLast(k) {
    let fast = this.head;
    let slow = this.head;
    let count = 0;
    while (count < k) {
      fast = fast.next;
      count++;
    }
    while (fast != null) {
      fast = fast.next;
      slow = slow.next;
    }
    return slow;
  }

  mid() {
    let fast = this.head;
    let slow = this.head;

    while (fast.next != null && fast.next.next != null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow
  }

  reverse() {
    let curr = head;
    let prev = null;
    let temp = null;

    while (curr != null) {
      temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    head = prev;
    return head;
  }

  mergeTwoSortedLists(list1, list2) {
    let list = new LinkedList();
    let one = list1.head;
    let two = list2.head;

    while (one != null && two != null) {
      if (one.data <= two.data) {
        list.addLast(one.data);
        one = one.next;
      } else {
        list.addLast(two.data)
        two = two.next;
      }
    }

    while (one != null) {
      list.addLast(one.data);
      one = one.next;
    }
    while (two != null) {
      list.addLast(two.data)
      two = two.next;
    }

    return list;

  }

  midNode(head, tail) {
    let f = head;
    let s = head

    while (f != tail && f.next != tail) {
      f = f.next.next;
      s = s.next;
    }
    return s;
  }
  mergeSort(head, tail) {
    if (head == tail) {
      let br = new LinkedList();
      br.addLast(head.data);
      return br;
    }
    let mid = this.midNode(head, tail);
    let fsh = this.mergeSort(head, mid);
    let ssh = this.mergeSort(mid.next, tail);

    let cl = this.mergeTwoSortedLists(fsh, ssh);
    return cl;
  }

  deleteDuplicates = function (head) {
    let temp = head;
    while (temp != null) {
      let curr = temp.next;
      while (curr != null && curr.val == temp.val) {
        curr = curr.next;
      }
      temp.next = curr;
      temp = temp.next;
    }
    return head;
  };

  oddEvenList = function (head) {
    if (head == null) {
      return head;
    }

    let headEven = head.next;
    let temp = head;
    let curr = headEven;

    while (temp != null && temp.next != null && temp.next.next != null && curr != null && curr.next != null) {
      temp.next = temp.next.next;
      temp = temp.next;
      curr.next = temp.next;
      curr = curr.next;
    }

    temp.next = headEven;
    return head;
  };

  listLength = (node) => {
    let size = 0;
    while (node != null) {
      node = node.next;
      size++;
    }
    return size;
  }

  reverseNodesInKGroups = (head) => {
    let oh = null; // original Head and tail
    let ot = null;

    let th = null; // Temporary Head and tail
    let tt = null;
    let curr = head;
    let length = listLength(head);

    while (length >= k) {
      let count = k;

      while (count > 0) {
        count--;
        let temp = curr.next;
        curr.next = null;
        // Adding At First
        if (th == null) {
          th = curr;
          tt = curr;
        } else {
          curr.next = th;
          th = curr;
        }

        curr = temp;
      }

      if (oh == null) {
        oh = th;
        ot = tt;
      } else {
        ot.next = th;
        ot = tt;
      }

      th = null;
      tt = null;
      length -= k;

    }
    ot.next = curr;
    return oh;
  }

  isPalindrome = function (head) {
    let left = head;

    isPalindromeHelper = (node) => {
      if (node == null) {
        return true;
      }

      let rres = isPalindromeHelper(node.next);

      if (rres == false) {
        return false
      } else if (node.val != left.val) {
        return false
      } else {
        left = left.next;
        return true;
      }
    }

    return isPalindromeHelper(head);

  };

  reorderList = function (head) {

    let curr = head;
    let count = 1;

    const reorderListHelper = (node, level) => {
      if (node == null) {
        return;
      }
      reorderListHelper(node.next, level + 1);
      if (count + 1 < level) {
        let temp = curr.next;
        curr.next = node;
        curr = temp;
        node.next = temp;
      } else if (count == level || count + 1 == level) {
        node.next = null;
      }
      count++;

    }

    let node = head;
    reorderListHelper(node, 1);
    return head;
  };
  // Fold and Reorder List are the similar questions , 
  // Reorder List has a better code quality , so 
  // refer that for answer.
  fold = (head) => {
    let left = head;
    let count = 1;

    this.foldHelper = (node, floor) => {
      if (node == null) {
        return;
      }

      this.foldHelper(node.next, floor + 1);
      if (count + 1 < floor) {
        let temp = left.next;
        left.next = node;
        node.next = temp;
        left = temp;
        count++;
      } else if (count + 1 == floor) {
        left.next.next = null;
      }

    }

    this.foldHelper(head, 1);
    this.size % 2 != 0 ? left.next = null : '';
    return head;
  }

  intersection = (headA, headB) => {
    let set = new Set();
    let ans = null;
    let temp = headA;
    while (temp != null) {
      set.add(temp);
      temp = temp.next;
    }
    temp = headB;
    while (temp != null) {
      if (set.has(temp)) {
        ans = temp;
        break;
      }
      temp = temp.next;
    }
    return ans;
  }

  addTwoLinkedLists = (headA, headB, ansList) => {

    this.addTwoLinkedListsHelper = (headA, headB, ansList) => {
      // base case
      if (headA == null && headB == null) {
        // let val = (headA.data + headB.data + carryOver) % 10;
        // carryOver = (headA.data + headB.data) / 10;
        // let baseNode = new Node(0);
        // return baseNode;
        return 0;
      }
      let carryOver;
      if (headA != null && headB != null) {
        carryOver = this.addTwoLinkedListsHelper(headA.next, headB.next, ansList)
      } else if (headA != null && headB == null) {
        carryOver = this.addTwoLinkedListsHelper(headA.next, headB, ansList)
      } else {
        carryOver = this.addTwoLinkedListsHelper(headA, headB.next, ansList)
      }
      console.log(headA, headB)

      let node = new Node((headA.data + headB.data + carryOver) % 10)
      ansList.addLast(node);
      carryOver = (headA.data + headB.data) / 10;

      return carryOver;

    }

    this.addTwoLinkedListsHelper(headA, headB, ansList);
    ansList.display();
  }


}


let ll = new LinkedList();
ll.addLast(1);
ll.addLast(2)
ll.addLast(3)
ll.addLast(4)

// ll.addLast(30);
// ll.addLast(10)
// ll.addLast(20)
// ll.addLast(40)
// ll.addLast(60)
// ll.addLast(80)
// ll.addLast(70)
// ll.addLast(50)



// ll.display()
// console.log(ll.kthFromLast(3).data);
// console.log(ll.mid().data)

// let l1 = new LinkedList();
// l1.addLast(1)
// l1.addLast(2)
// l1.addLast(4)

// let ans = ll.mergeSort(ll.head, ll.tail)
// ans.display()

// ll.deleteDuplicates(ll.head)
// ll.oddEvenList(ll.head)

// ll.fold(ll.head);
// ll.display();

let ll2 = new LinkedList();
ll2.addLast(2);
ll2.addLast(3)
let ansList = new LinkedList();
ll.addTwoLinkedLists(ll.head, ll2.head, ansList)
// let l2 = new LinkedList();
// l2.addLast(1)
// l2.addLast(3)
// l2.addLast(4)
// let newList = ll.mergeTwoSortedLists(l1, l2);
// newList.display();

// class LLToStackAdapter {
//   constructor() {
//     this.list = new LinkedList()
//   }
//   push(val) {
//     this.list.addLast(val)
//   }

//   display() {
//     let temp = this.list.head;
//     while (temp != null) {
//       console.log(temp.data)
//       temp = temp.next;
//     }
//   }

//   pop() {
//     return this.list.removeLast()
//   }

//   size() {
//     return this.list.size;
//   }
//   top() {
//     return this.list.tail.data;
//   }

// }

// let stack = new LLToStackAdapter();
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.push(50);
// // stack.display()
// // stack.pop();
// // stack.display()
// // stack.pop();stack.pop();
// stack.display()
// console.log(stack.top())

// class LLToQueueAdapter {
//   constructor() {
//     this.list = new LinkedList()
//   }
//   add(val) {
//     this.list.addLast(val)
//   }
//   display() {
//     let temp = this.list.head;
//     while (temp != null) {
//       console.log(temp.data)
//       temp = temp.next;
//     }
//   }
//   remove() {
//     return this.list.removeFirst();
//   }
//   peek() {
//     return this.list.tail;
//   }
//   size() {
//     return this.list.size;
//   }
// }

// let queue = new LLToQueueAdapter();
// queue.add(10)
// queue.add(20)
// queue.add(30);
// queue.display()
// queue.remove();
// queue.display()
