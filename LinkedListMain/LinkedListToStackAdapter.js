import { LinkedList } from "./LinkedListCreation";

class LLToStackAdapter{
  constructor(){
    this.list = new LinkedList()
  }
  push(val){
    this.list.addLast(val)
  }

  display(){
    console.log(this.list)
  }


}

let stack = new LLToStackAdapter();
stack.push(20);
stack.push(30);
stack.display()