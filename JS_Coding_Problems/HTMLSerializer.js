function serializeNode(node) {
  // console.log(node);
  let arr = [];
  let indent = "\t";
  const convert = (node, level) => {
    if (!node.hasOwnProperty("tag")) {
      arr.push(`${indent.repeat(level)}${node}`);
      return;
    }
    arr.push(`${indent.repeat(level)}<${node.tag}>`);

    node.children.forEach((child) => {
      convert(child, level + 1);
    });
    arr.push(`${indent.repeat(level)}</${node.tag}>`);
  };

  convert(node, 0);
  console.log(arr);

  // arr.join(" ");
  console.log(arr.join("\n"));
}
const tree = {
  tag: "body",
  children: [
    { tag: "div", children: [{ tag: "span", children: ["foo", "bar"] }] },
    { tag: "div", children: ["baz"] },
  ],
};

serializeNode(tree);
