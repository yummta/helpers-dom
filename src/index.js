export function c(cb) {
  console.log(cb);
}

export function dom(selector) {
  let collectionElements = document.querySelectorAll(selector);
  if (collectionElements.length === 1) {
    return collectionElements[0];
  } else if (collectionElements.length > 1) {
    return Array.from(collectionElements);
  } else {
    return null;
  }
}

export function addEvent(elements, event, cb) {
  if (elements) {
    if (Array.isArray(elements)) {
      elements.forEach(el => {
        el.addEventListener(event, cb);
      });
    } else {
      elements.addEventListener(event, cb);
    }
  }
}
