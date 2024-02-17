# Writing INLINE CSS, INTERNAL CSS, and EXTERNAL CSS

1. **Inline CSS**: Inline CSS is applied directly to an HTML element using the `style` attribute. It affects only that specific element.

   Example:

   ```html
   <p style="color: blue; font-size: 16px;">This is a paragraph with inline CSS.</p>
   ```

2. **Internal CSS**: Internal CSS is defined within the HTML document using the `<style>` element within the `<head>` section. It applies styles to elements within the same HTML document.

   Example:

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <style>
         p {
           color: blue;
           font-size: 16px;
         }
       </style>
     </head>
     <body>
       <p>This is a paragraph with internal CSS.</p>
     </body>
   </html>
   ```

3. **External CSS**: External CSS is defined in a separate CSS file and linked to the HTML document using the `<link>` element. This allows you to apply styles to multiple HTML documents.

   Example:
   **style.css**:

   ```css
   /* style.css */
   p {
     color: blue;
     font-size: 16px;
   }
   ```

   **index.html**:

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <link rel="stylesheet" type="text/css" href="style.css" />
     </head>
     <body>
       <p>This is a paragraph with external CSS.</p>
     </body>
   </html>
   ```

Each method has its advantages and use cases. Inline CSS is useful for quick styling of individual elements but can become cumbersome to manage in larger projects. Internal CSS is good for small-scale projects where styles are specific to one document. External CSS is ideal for larger projects where styles need to be consistent across multiple pages and allows for easier maintenance and organization of styles.
