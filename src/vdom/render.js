const render = vNode => {
  const $el = document.createElement(vNode.tagName);

  for (const [k, v] of Object.entries(vNode.attrs)) {
    $el.setAttribute(k, v);
  }

  for (const child of vNode.children) {
    const $child = render(child);
    $el.appendChild($child);
  }

  return $el;
};

export default render;
