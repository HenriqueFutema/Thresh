import callDirectives from '../directives/index'
import bindText from '../bind/bindText'

const renderElem = ({ tagName, attrs, children }) => {
  const $el = document.createElement(tagName);

  for (const [k, v] of Object.entries(attrs)) {
    if (k[0] === 't') {
      callDirectives(k, v, $el)
    }
    $el.setAttribute(k, v);
  }

  for (const child of children) {
    const $child = render(child);
    $el.appendChild($child);
  }

  return $el;
};

const render = vNode => {
  if (typeof vNode === "string") {
    const binded = bindText(vNode)
    return document.createTextNode(binded);
  }

  return renderElem(vNode);
};

export default render;