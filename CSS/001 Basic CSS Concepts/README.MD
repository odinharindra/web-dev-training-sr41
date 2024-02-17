# Bascis of CSS

The very important things to be considered while writing css are as below:

1. **Selectors**: Selectors are patterns used to select the elements you want to style. They can be element names, class names, IDs, or attribute names.

   ```css
   /* Element Selector */
   p {
     color: blue;
   }

   /* Class Selector */
   .highlight {
     background-color: yellow;
   }

   /* ID Selector */
   #header {
     font-size: 24px;
   }
   ```

2. **Properties**: CSS properties are the styles you can apply to selected elements, such as color, font-size, background-color, etc.

   ```css
   p {
     color: blue;
     font-size: 16px;
   }
   ```

3. **Values**: Values are assigned to properties and define how the property should be applied. Values can be keywords, numerical values, colors, etc.

   ```css
   p {
     color: blue;
     font-size: 16px;
     background-color: #f0f0f0;
   }
   ```

4. **Class and ID**: Classes and IDs are used to uniquely identify and style elements in HTML.

   ```html
   <div class="box" id="header">Content</div>
   ```

5. **Box Model**: The CSS box model describes the rectangular boxes that are generated for elements in the document tree. It consists of margin, border, padding, and content.

   ```css
   .box {
     padding: 10px;
     border: 1px solid black;
     margin: 10px;
   }
   ```

6. **Margin and Padding**: Margin is the space outside an element, while padding is the space inside an element.

   ```css
   .box {
     padding: 10px; /* Inside */
     margin: 10px; /* Outside */
   }
   ```

7. **Display Property**: Determines how an element is displayed.

   ```css
   .box {
     display: inline-block;
   }
   ```

8. **Positioning**: Determines how an element is positioned within its parent container.

   ```css
   .box {
     position: relative;
     top: 20px;
     left: 30px;
   }
   ```

9. **Float**: Allows elements to be floated to the left or right within their containing block.

   ```css
   .float-left {
     float: left;
   }
   ```

10. **Flexbox**: A layout model for arranging elements in a predictable way in different screen sizes and orientations.

    ```css
    .container {
      display: flex;
      justify-content: space-between;
    }
    ```

11. **Grid**: A two-dimensional layout system that arranges elements into rows and columns.

    ```css
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    ```

12. **Media Queries**: Allows you to apply different styles for different screen sizes or devices.

    ```css
    @media (max-width: 600px) {
      .box {
        width: 100%;
      }
    }
    ```

13. **Transitions**: Adds smooth animations to CSS property changes.

    ```css
    .box {
      transition: background-color 0.3s ease;
    }
    ```

14. **Transforms**: Modify the appearance and position of elements using scaling, rotating, skewing, etc.

    ```css
    .box {
      transform: rotate(45deg);
    }
    ```

15. **Pseudo-classes and Pseudo-elements**: Selectors that allow you to style elements based on their state or position in the document tree.

    ```css
    /* Pseudo-class */
    a:hover {
      color: red;
    }

    /* Pseudo-element */
    p::first-line {
      font-weight: bold;
    }
    ```

These are just the basics, but mastering them will give you a solid foundation for styling web pages with CSS.
