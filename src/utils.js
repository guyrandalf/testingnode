// In utils.js file (if that's where the createElement function is defined)

export function createElement(tag, attributes, children) {
  const element = document.createElement(tag);

  if (attributes) {
    for (const key in attributes) {
      element[key] = attributes[key];
    }
  }

  if (children && children.length > 0) {
    for (const child of children) {
      if (typeof child === "string") {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(child);
      }
    }
  }

  return element;
}
