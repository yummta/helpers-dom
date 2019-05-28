# Helpers-dom

This are methods to help to manipulate DOM.

### Install

```shell
yarn add helpers-dom
# npm install helpers-dom --save
```

### Use

```js
import { c, dom, addEvent } from "helpers-dom";
```

Small console.log

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

###Example
Catch all .items and console.log their values when recived a click.

```html
<ul>
  <li class="item">Alto</li>
  <li class="item">bandido.</li>
  <li class="item">Cuéntame,</li>
  <li class="item">deseas</li>
  <li class="item">esto?</li>
</ul>
```

```js
import { c, dom, addEvent } from "helpers-dom";

const items = dom(".item");
addEvent(items, "click", () => c(event.currentTarget.innerText));
```
