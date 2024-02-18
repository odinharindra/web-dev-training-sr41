CSS pseudo-classes and pseudo-elements are selectors that allow you to apply styles to elements based on certain conditions or positions within the document tree. Here's an explanation of each with real-time examples:

1. **Pseudo-classes**:

   - Pseudo-classes are used to define the special state of an element.

   Example:

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <style>
         /* Apply red color to links on hover */
         a:hover {
           color: red;
         }
         /* Apply blue color to visited links */
         a:visited {
           color: blue;
         }
       </style>
     </head>
     <body>
       <a href="#">Link 1</a>
       <a href="#">Link 2</a>
     </body>
   </html>
   ```

   Explanation:

   - `:hover` pseudo-class applies styles when the mouse hovers over the link.
   - `:visited` pseudo-class applies styles to visited links.

2. **Pseudo-elements**:

   - Pseudo-elements allow you to style specific parts of an element.

   Example:

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <style>
         /* Style the first line of paragraphs */
         p::first-line {
           color: blue;
           font-weight: bold;
         }
         /* Insert content before the first letter of paragraphs */
         p::first-letter {
           color: red;
           font-size: 24px;
         }
       </style>
     </head>
     <body>
       <p>This is a sample paragraph. Lorem ipsum dolor sit amet.</p>
     </body>
   </html>
   ```

   Explanation:

   - `::first-line` pseudo-element styles the first line of the paragraph.
   - `::first-letter` pseudo-element styles the first letter of the paragraph.

Pseudo-classes and pseudo-elements are powerful tools for styling HTML elements based on various conditions or targeting specific parts of elements. They provide flexibility and control over the appearance of your web pages.
