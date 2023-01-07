function getElementsByTagName(rootElement, tagNameParam) {
  const elements = [];
  const tagName = tagNameParam.toUpperCase();

  function traverse(element) {
    if (element == null) {
      return;
    }

    if (element.tagName === tagName) {
      elements.push(element);
    }

    for (let i = 0; i < (element.children || []).length; i++) {
      traverse(element.children[i]);
    }
  }

  for (let i = 0; i < (rootElement.children || []).length; i++) {
    traverse(rootElement.children[i]);
  }
  console.log(elements);
  return elements;
}

const document = new DOMParser().parseFromString(
  `<div id="foo">
    <span>Span</span>
    <p>Paragraph</p>
    <div id="bar">Div</div>
  </div>`,
  "text/html"
);

getElementsByTagName(document.body, "div");
