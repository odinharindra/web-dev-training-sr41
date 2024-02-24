In CSS, there are several position properties that allow you to control the positioning of elements on a web page. Here are the main position properties along with explanations and example code:

1. **Static**:

   - The default positioning for all elements. Elements are positioned according to the normal flow of the document.

   ```css
   .static-element {
     position: static;
   }
   ```

2. **Relative**:

   - Positioned relative to its normal position in the document flow. It can be moved using the `top`, `right`, `bottom`, and `left` properties.

   ```css
   .relative-element {
     position: relative;
     top: 10px;
     left: 20px;
   }
   ```

3. **Absolute**:

   - Positioned relative to its nearest positioned ancestor (an ancestor with a position other than `static`) or to the initial containing block if no positioned ancestor is found. It's taken out of the normal document flow.

   ```css
   .absolute-element {
     position: absolute;
     top: 0;
     right: 0;
   }
   ```

4. **Fixed**:

   - Positioned relative to the initial containing block (usually the viewport), regardless of scrolling. It's taken out of the normal document flow.

   ```css
   .fixed-element {
     position: fixed;
     bottom: 20px;
     right: 20px;
   }
   ```

5. **Sticky**:

   - Acts like `relative` positioning until an element reaches a specified threshold, then it acts like `fixed` positioning.

   ```css
   .sticky-element {
     position: sticky;
     top: 0;
   }
   ```

Here's an example HTML structure to demonstrate the usage of these position properties:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Position Properties Example</title>
    <style>
      .container {
        height: 300px;
        position: relative;
        border: 1px solid black;
        margin-bottom: 20px;
      }

      .relative-element {
        position: relative;
        top: 20px;
        left: 20px;
        background-color: red;
      }

      .absolute-element {
        position: absolute;
        top: 0;
        right: 0;
        background-color: blue;
        color: white;
      }

      .fixed-element {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: green;
        color: white;
      }

      .sticky-element {
        position: sticky;
        top: 0;
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="relative-element">Relative</div>
      <div class="absolute-element">Absolute</div>
      <div class="sticky-element">Sticky</div>
    </div>

    <div class="fixed-element">Fixed</div>
  </body>
</html>
```

This example demonstrates how each position property affects the layout and positioning of elements within a document.
