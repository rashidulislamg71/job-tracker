1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   **getElementById()**
   Selects one element by its id.
   Returns a single element object.
   id must be unique.

example: const element = document.getElementById("box");

**getElementsByClassName()**
Selects elements by class name.
Returns an HTMLCollection (live collection).
Automatically updates when DOM changes.

example: const elements = document.getElementsByClassName("item");

**querySelector()**
Selects the first matching element.

example: const element = document.querySelector(".item");

**querySelectorAll()**
Selects all matching elements.
Returns a NodeList.

example: const elements = document.querySelectorAll(".item");

2. How do you create and insert a new element into the DOM?
   To create and insert a new element into the DOM, we follow 3 main steps:

Step 1: Create the Element

We use the createElement() method for create a element.
const newDiv = document.createElement("div");

This creates a new <div> element in memory (not yet added to the webpage).

Step 2: Add Content

We can add text using textContent for created element "div".
newDiv.textContent = "Hello World";

Step 3: Insert the Element into the DOM
We insert it using appendChild() for append this element.
document.body.appendChild(newDiv);

Now the element appears on the webpage.

3. What is Event Bubbling? And how does it work?
   Event Bubbling is the way events propagate through the DOM tree. When an event happens on an element (like a click on a button), it doesn't just stay there. It "bubbles up" to its parent, then the grandparent, and so on, until it reaches the window.

4. What is Event Delegation in JavaScript? Why is it useful?
   Event Delegation is a technique where we attach a single event listener to a parent element instead of multiple child elements.

use for-
Better performance
Less memory usage
Works for dynamically added elements
Cleaner code

5. What is the difference between preventDefault() and stopPropagation() methods?

These two are often confused, but they do very different work:

preventDefault() is stops the browser's default action.
Example: Preventing a link from opening a URL or a form from refreshing the page on submit.

stopPropagation() is stops the event from bubbling up.
Example: If you click a button inside a div, stopPropagation() prevents the div's click handler from firing.
