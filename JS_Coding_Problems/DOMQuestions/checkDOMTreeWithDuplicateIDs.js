const checkDOMTreeWithDuplicateIDs = (root) => {
  if (root == null) {
    return false
  }
  let set = new Set();
  let flag = false;
  const helper = (node) => {

    // console.log(node, node.hasAttribute('id'))
    if (node.hasAttribute('id')) {
      let id = node.getAttribute('id');
      // console.log(id)
      if (set.has(id)) {
        flag = true;
        return;
      } else {
        set.add(id);
      }
    }

    if (flag == false) {
      let arr = Array.from(node.children);
      arr.forEach(child => {
        helper(child)
      })
    }

  }

  helper(root);
  return flag
}

const main = () => {
  const document = new DOMParser().parseFromString(
    `<div id="foo">
      <span>Span</span>
      <p>Paragraph</p>
      <div id="foo">Div</div>
    </div>`,
    "text/html"
  );
  const ans = checkDOMTreeWithDuplicateIDs(document.body);
  console.log(ans)
}
main()