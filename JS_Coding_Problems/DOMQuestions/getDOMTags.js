

const getDOMTags = (root) => {
  if (root == 0) {
    return []
  }
  let ans = [];
  const helper = (node) => {
    if (!ans.includes(node.tagName)) {
      ans.push(node.tagName)
    }
    let arr = Array.from(node.children);
    arr.forEach((child) => {
      helper(child)
    })
  }
  helper(root)
  return ans;
}

const main = () => {
  const document = new DOMParser().parseFromString(
    `<div id="foo">
      <span>Span</span>
      <p>Paragraph</p>
      <div id="bar">Div</div>
    </div>`,
    "text/html"
  );
  console.log(document)
  const ans = getDOMTags(document.body);
  console.log(ans)
}
main()