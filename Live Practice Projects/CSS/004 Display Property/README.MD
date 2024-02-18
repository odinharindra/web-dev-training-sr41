The `display` property in CSS is used to specify how an element should be displayed in the layout of a web page. It determines the type of box an element generates and how it interacts with other elements. Here's an explanation of the `display` property with example code:

1. **Block-level Elements**:

   - Block-level elements generate a block-level box that takes up the full width available and starts a new line before and after the element.
   - Examples of block-level elements include `<div>`, `<p>`, `<h1>` to `<h6>`, `<ul>`, `<ol>`, `<li>`, etc.

   ```css
   div {
     display: block;
     width: 100%;
     background-color: #f0f0f0;
     padding: 10px;
     margin-bottom: 20px;
   }
   ```

2. **Inline Elements**:

   - Inline elements generate an inline-level box that does not start a new line and only takes up as much width as necessary.
   - Examples of inline elements include `<span>`, `<a>`, `<strong>`, `<em>`, `<img>`, etc.

   ```css
   span {
     display: inline;
     color: red;
     text-decoration: underline;
   }
   ```

3. **Inline-Block Elements**:

   - Inline-block elements generate a box that behaves like a block-level element in terms of layout (it can have width, height, margins, padding, etc.), but like an inline-level element in terms of its position in the flow of the document.
   - It allows elements to sit next to each other horizontally while still allowing for styling.

   ```css
   .inline-block {
     display: inline-block;
     width: 100px;
     height: 100px;
     background-color: blue;
     margin-right: 10px;
   }
   ```

4. **None**:

   - The `display: none;` property removes an element from the document flow entirely. The element and its content are not rendered on the page, and the space it would have occupied is collapsed.

   ```css
   .hidden {
     display: none;
   }
   ```

5. **Flexbox**:

   - The `display: flex;` property enables a flex container, and its direct children become flex items. It allows for easier alignment and distribution of space among items in a container.

   ```css
   .flex-container {
     display: flex;
     justify-content: space-between;
   }
   ```

6. **Grid**:

   - The `display: grid;` property turns an element into a grid container, and its direct children become grid items. It enables powerful two-dimensional layout capabilities.

   ```css
   .grid-container {
     display: grid;
     grid-template-columns: 1fr 1fr 1fr;
   }
   ```

The `display` property is fundamental for controlling the layout and structure of elements on a web page. By using different values for the `display` property, you can create a wide variety of layouts and achieve the desired presentation for your content.
