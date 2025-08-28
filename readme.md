## 01. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

## Answer:

| getElementById | getElementsByClassName | querySelector | querySelectorAll |
|----------------|----------------------|---------------|-----------------|
| Only one element, by ID | Multiple elements, by Class Name | The first matching element | All matching elements |
| Fetches a unique element with a specific ID | Fetches all elements that share a particular Class | Fetches the first element that matches a CSS selector | Fetches every element matching a CSS selector |


## 02. How do you create and insert a new element into the DOM?

## Answer:

### Creating and Inserting a New Element

**Create a new element:**
```javascript
const newElem = document.createElement("tagName");

newElem.textContent = "Hello";
newElem.id = "myElement";

parentElement.appendChild(newElem)
```
createElement → makes a new element in memory.
appendChild → adds it to the DOM so it appears on the page.

document.getElementById("container") → selects the parent container.
document.createElement("p") → creates a new <p> element in memory.
textContent → sets the text inside the new element.
appendChild → inserts the new element into the selected container in the DOM.


If you want, I can **also format the whole file with a clean table of contents and sections** to make it fully professional for GitHub. Do you want me to do that?


## 03. What is Event Bubbling and how does it work?

## Answer:

### Event Bubbling

Event Bubbling is a type of event propagation in the DOM where an event starts from the innermost element (the target) and bubbles up to its parent elements, all the way to the `<html>` element.

### How it works:

- You click or trigger an event on a nested element.
- The event first runs on the target element.
- Then it propagates upward to its parent elements in order.
- This allows parent elements to respond to events happening on child elements.


## 04. What is Event Delegation in JavaScript? Why is it useful?

## Answer:

### Event Delegation

Event Delegation is a technique where a parent element handles events for its child elements.

### Why it is useful:

- Fewer event listeners → more efficient.
- Works for dynamically added child elements.
- Easier to manage and maintain.


## 05. What is the difference between preventDefault() and stopPropagation() methods?

## Answer:

| preventDefault() | stopPropagation() |
|-----------------|-----------------|
| Stops the default action of an element (e.g., form submit, link navigation) | Prevents the event from propagating to parent elements |
| Does NOT stop event bubbling | Stops event bubbling |