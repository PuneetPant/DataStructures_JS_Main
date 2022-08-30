// class Node {
//   constructor(value) {
//     this.data = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   getFirst() {
//     if (this.size == 0) {
//       System.out.println("List is empty");
//       return -1;
//     } else {
//       return this.head.data;
//     }
//   }

//   addFirst = (value) => {
//     let node = new Node(value);
//     if (this.size == 0) {
//       this.head = this.tail = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.size++;
//   }

//   addLast(val) {
//     let temp = new Node(val);

//     if (this.size == 0) {
//       this.head = this.tail = temp;
//     } else {
//       this.tail.next = temp;
//       this.tail = temp;
//     }

//     this.size++;
//   }

//   addAt(index, value) {
//     if (index == 0) {
//       this.addFirst(value);
//     } else if (index == this.size) {
//       this.addLast(value);
//     } else if (idx < 0 || idx > this.size) {
//       console.log('Invalid Arguments')
//     } else {
//       let temp = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         temp = temp.next;
//       }
//       let dummyNode = new Node(value);
//       dummyNode.next = temp.next;
//       temp.next = dummyNode;
//       this.size++;
//     }
//   }
//   removeFirst = () => {
//     if (this.size == 0) {
//       console.log('List is empty')
//     } else if (this.size == 1) {
//       this.head = this.tail = null;
//     } else {
//       this.head = this.head.next;
//       this.size--;
//     }
//   }

//   kthFromLast = (index) => {
//     let fast = this.head;
//     let slow = this.head;

//     for (let i = 0; i < index; i++) {
//       fast = fast.next;
//     }

//     while (fast != tail) {
//       fast = fast.next;
//       slow = slow.next;
//     }
//     return slow.data;
//   }

//   midNode() {
//     let fast = this.head;
//     let slow = this.head;

//     while (fast != this.tail && fast.next != this.tail) {
//       fast = fast.next.next;
//       slow = slow.next;
//     }
//     return slow.data;
//   }

//   reversePointerIterative() {
//     let current = this.head;
//     let prev = null;
//     let temp = null;
//     while (current != this.tail) {
//       temp = current.next;
//       current.next = prev;
//       prev = current;
//       current = temp;
//     }
//     current.next = prev;
//     this.tail = this.head;
//     this.head = current;
//   }

//   display = () => {
//     let current = this.head;
//     while (current != null) {
//       console.log(current.data + " ");
//       current = current.next;
//     }
//   }

//   // kReverse(k){
//   //   let prev = new LinkedList();
//   //   let curr = new LinkedList();

//   //   let temp = this.head;

//   //   while(temp != null){
//   //     let node = 
//   //   }
//   // }

//   oddEven() {
//     let odd = new LinkedList();
//     let even = new LinkedList();
//     debugger;
//     while (this.size > 0) {
//       let val = this.getFirst();
//       this.removeFirst();
//       if (val % 2 == 0) {
//         even.addLast(val);
//       } else {
//         odd.addLast(val);
//       }
//     }
//     odd.display();
//     even.display();
//   }

//   displayReverseHelper(node) {
//     if (node == null) {
//       return;
//     }
//     this.displayReverseHelper(node.next);
//     console.log(node.data);
//   }

//   reverseHelper(node) {
//     if (node.next == null) {
//       return;
//     }
//     this.reverseHelper(node.next);
//     node.next.next = node;
//   }

//   reversePointerRecursive() {
//     this.reverseHelper(this.head);
//     let temp = this.head;
//     this.head = this.tail;
//     this.tail = temp;
//     this.tail.next = null;
//   }

//   left = null;
//   reverseDataRecursiveHelper(right, floor) {
//     if (right == null) {
//       return;
//     }
//     this.reverseDataRecursiveHelper(right.next, floor + 1);
//     if (floor > this.size / 2) {
//       let temp = this.left.data;
//       this.left.data = right.data;
//       right.data = temp;
//       this.left = this.left.next;
//     }
//   }
//   reverseDataRecursive() {
//     this.left = this.head;
//     this.reverseDataRecursiveHelper(this.head, 0)
//   }

//   palindromeHelper(right) {
//     if (right == null) {
//       return true;
//     }

//     let flag = this.palindromeHelper(right.next);
//     if (!flag) {
//       return false;
//     } else if (this.palinNode.data != right.data) {
//       return false;
//     } else {
//       this.palinNode = this.palinNode.next;
//       return true;
//     }

//   }

//   palinNode = null;
//   isPalindrome() {
//     this.palinNode = this.head;
//     let ans = this.palindromeHelper(this.head);
//     console.log(ans);
//   }

//   addTwoLinkedListsHelper(oneNode, twoNode){

//     if(oneNode.next == null && twoNode.next == null){
//       return 
//     }

//     if(oneNode.next == null){
//       this.addTwoLinkedListsHelper(oneNode, twoNode.next);
//     } else if(twoNode.next == null){
//       this.addTwoLinkedListsHelper(oneNode.next , twoNode);
//     } else{
//       this.addTwoLinkedListsHelper(oneNode.next, twoNode.next);
//     }
//   }


//   addTwoLinkedLists(one, two){
//     this.addTwoLinkedListsHelper(one.head, two.head);
//   }


// }

// let ll = new LinkedList();
// // ll.addFirst(1);
// // ll.addFirst(2);
// // ll.addFirst(3);
// // ll.addFirst(4);
// // ll.addFirst(5);
// // ll.addFirst(6);
// // ll.display();

// // ll.oddEven();
// // ll.displayReverseHelper(ll.head);
// // console.log('------');
// // ll.reversePointerIterative();
// // ll.display();
// // ll.reversePointerRecursive(); // DONE
// // ll.display();

// // ll.reverseDataRecursive();
// // ll.display();

// // ll.addFirst(6);
// // ll.addFirst(5);
// // ll.addFirst(4);
// // ll.addFirst(4);
// // ll.addFirst(5);
// // ll.addFirst(6);

// // ll.isPalindrome();

// // let one = new LinkedList();
// // let two = new LinkedList();

// // one.addFirst(9);
// // one.addFirst(9);
// // one.addFirst(9);
// // one.addFirst(9);

// // two.addFirst(1)
// // two.addFirst(1)

// // let ans = new LinkedList();
// // ans.addTwoLinkedLists(one, two);