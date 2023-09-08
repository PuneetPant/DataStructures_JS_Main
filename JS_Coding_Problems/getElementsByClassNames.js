function isSubset(a, b) {
  return Array.from(a).every((value) => b.contains(value));
}
export default function getElementsByClassName(rootElement, classNames) {
  let ans = [];
  const classNamesSet = new Set(classNames.trim().split(/\s+/));
  const traverse = (element) => {
    /* console.log(Array.from(element.classList), classNames) */

    if (element == null) {
      return;
    }

    if (isSubset(classNamesSet, element.classList)) {
      ans.push(element);
    }


    for (let i = 0; i < (element.children || []).length; i++) {
      traverse(element.children[i]);
    }
  }

  for (let i = 0; i < (rootElement.children || []).length; i++) {
    traverse(rootElement.children[i],);
  }

  return ans;
}