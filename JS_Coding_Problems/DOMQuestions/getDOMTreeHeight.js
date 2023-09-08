
// function getHeight(root) {
//   if (!root) return 0;

//   let maxDepth = 0;

//   const helper = (current, depth = 1) => {
//     if (current.hasChildNodes()) {

//       for (let child of current.children) {
//         console.log(child)
//         helper(child, depth + 1);
//       }
//     }
//     maxDepth = Math.max(maxDepth, depth);
//   };

//   helper(root);
//   return maxDepth;
// }

const getHeight = (root) => {
  if (root == null) {
    return 0
  }
  let maxHeight = 0;
  const helper = (node, height) => {

    // console.log(node.children)
    let arr = Array.from(node.children)
    console.log(arr)
    arr.forEach((child) => {
      console.log(child)
      helper(child, height + 1);
    })
    maxHeight = Math.max(maxHeight, height)
  }
  helper(root, 1);

  return maxHeight
}
//https://stackoverflow.com/questions/15094886/why-is-foreach-not-working-for-children
const main = () => {
  const ans = getHeight(document.querySelector('body'));
  console.log(ans)
}
main()