
const getRootNode = (tree) => {
  if (!tree) return null;

  while (tree.parentElement) {
    tree = tree.parentElement;
  }

  return tree;
}
const main = () => {
  console.log(document.getElementById("btn1"))
  const ans = getRootNode(document.getElementById("btn1"));
  console.log(ans)
}
main()