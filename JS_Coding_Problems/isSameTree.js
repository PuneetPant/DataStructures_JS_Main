const getArray = (node) => {
  let arr = [];
  const getNodes = (node) => {
    if(node.nodeType === Node.TEXT_NODE){
      arr.push(node.textContent);
      return;
    }
    arr.push(node.tagName);
   for(let i = 0 ; i < (node.childNodes || []).length; i++){
     let child = node.childNodes[i];
    //  console.log("child: ", child)
     getNodes(child);
   }
  };
  getNodes(node);
  return arr;
}

export default function isSameTree(nodeA, nodeB) {
  let arrA = getArray(nodeA);
  let arrB = getArray(nodeB);
  if(arrA.length != arrB.length){
    return false;
  }
  for(let i = 0 ; i < arrA.length; i++){
    if(arrA[i] != arrB[i]){
      return false;
    }
  }
  return true;
}