# DOM manipulation Methods

Here are some DOM manipulation methods in JavaScript with explanations and brief examples:

**Accessing Elements:**

1. **getElementById(id):** Retrieves the element with a specific ID (fastest for unique IDs).
2. **getElementsByTagName(tagName):** Returns a collection of elements with a particular HTML tag name.
3. **getElementsByClassName(className):** Retrieves a collection of elements with a specified CSS class name.
4. **querySelector(selector):** Selects the first element that matches a CSS selector (similar to document.querySelectorAll but returns only the first match).
5. **querySelectorAll(selector):** Selects all elements that match a CSS selector and returns a NodeList.

**Modifying Content:**

6. **innerHTML:** Sets or gets the HTML content within an element.
7. **textContent:** Sets or gets the text content of an element, excluding HTML tags.
8. **innerText:** Similar to textContent, but with browser-specific behavior regarding line breaks.
9. **nodeValue:** Gets or sets the value of a node (text or element content).
10. **dataset (property):** Accesses or modifies data attributes on an element (dataset.myAttribute).

**Adding and Removing Elements:**

11. **createElement(tagName):** Creates a new HTML element with the specified tag name.
12. **createTextNode(text):** Creates a text node containing the specified text.
13. **appendChild(childElement):** Adds a child element as the last child of the specified parent element.
14. **insertBefore(newElement, referenceElement):** Inserts a new element before a specified reference element.
15. **removeChild(childElement):** Removes a child element from its parent.
16. **replaceChild(newChild, oldChild):** Replaces an existing child element with a new one.

**Attributes:**

17. **getAttribute(attributeName):** Gets the value of a specified attribute on an element.
18. **setAttribute(attributeName, attributeValue):** Sets the value of a specified attribute on an element.
19. **removeAttribute(attributeName):** Removes a specified attribute from an element.
20. **hasAttribute(attributeName):** Checks if an element has a specific attribute.

**Styles:**

21. **style:** Accesses the inline style object of an element for manipulation.
22. **style.setProperty(propertyName, value):** Sets a specific style property on an element.
23. **style.getPropertyValue(propertyName):** Gets the value of a specific style property on an element.
24. **classList.add(className):** Adds a CSS class to an element.
25. **classList.remove(className):** Removes a CSS class from an element.
26. **classList.toggle(className):** Toggles a CSS class (adds if not present, removes if present).

**Dimensions and Positioning:**

27. **offsetHeight:** Gets the height of an element including padding and border.
28. **offsetWidth:** Gets the width of an element including padding and border.
29. **clientHeight:** Gets the height of an element including content but not padding or border.
30. **clientWidth:** Gets the width of an element including content but not padding or border.
31. **getBoundingClientRect():** Returns an object with information about the element's position and size relative to the viewport.

**Traversing the DOM:**

32. **parentNode:** Gets the parent element of a node.
33. **childNodes:** Returns a collection of a node's child nodes.
34. **firstChild:** Gets the first child node of an element.
35. **lastChild:** Gets the last child node of an element.
36. **nextSibling:** Gets the next sibling node of an element.
37. **previousSibling:** Gets the previous sibling node of an element.

**Document Manipulation:**

38. **createElementNS(namespaceURI, tagName):** Creates a new element in a specific XML namespace.
39. **documentElement:** Gets the root element of the document.
40. **body:** Gets the body element of the document.

**Copying and Cloning:**

41. **cloneNode(deep):** Creates a copy of an element, optionally including its children (deep=true).
42. **importNode(importedNode, deep):** Imports a node from another document, optionally including its children (deep=true).

**Text Manipulation:**

43. **data:** Gets or sets the data content of a node.
44. **splitText(splitPoint):** Splits a text node at a specified point.
45. **replaceChild(newChild, oldChild):** Replaces an existing

**More Resources:**
For more DOM Manipulations methods / WEB APIs please check below:

1. [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document)
2. [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

3. [The HTML DOM API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API)
