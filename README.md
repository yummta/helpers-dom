# Helpers-dom

This are methods to help to manipulate DOM.

### Install

```shell
yarn add @cristianbgp/random-emoji
# npm install helpers-dom --save
```

## Use

```js
import { c, dom, addEvent } from "./helpers-dom";
```

### Small console.log

```js
c("hello"); // Instead of console.log("hello")
```

### Pretty and small cacth DOM

```js
dom("#id-name"); // return element
dom(".unique-element"); // return element
dom(".many-elements"); // return Array of elements
dom("nothing-element"); // return null
```

### Add event easily to one or many elements

```js
const elements = dom(".many-element");
// addEvent(element, event, callback, );
addEvent(elements, "click", myFunction);
```
