Here are some commonly used HTML tags along with examples:

**`<html>`**: Defines the root of an HTML document.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Web Page</title>
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>
```

**`<head>`**: Contains meta-information about the HTML document.

```html
<head>
  <title>My Web Page</title>
  <meta charset="UTF-8" />
  <meta name="description" content="A description of my web page" />
</head>
```

**`<title>`**: Sets the title of the HTML document.

```html
<title>My Web Page</title>
```

**`<body>`**: Contains the content of the HTML document.

```html
<body>
  <h1>Hello, World!</h1>
  <p>This is a paragraph of text.</p>
</body>
```

**`<h1>, <h2>, ..., <h6>`**: Define headings of different levels.

```html
<h1>Main Heading</h1>
<h2>Subheading 1</h2>
<h3>Subheading 2</h3>
```

**`<p>`**: Defines a paragraph.

```html
<p>This is a paragraph of text.</p>
```

**`<a>`**: Defines a hyperlink.

```html
<a href="https://www.example.com">Visit Example.com</a>
```

**`<img>`**: Embeds an image.

```html
<img src="image.jpg" alt="Description of the image" />
```

**`<ul>, <ol>, <li>`**: Define unordered and ordered lists.

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>
```

**`<div>`**: Defines a division or a section in an HTML document.

    ```html
    <div>
      <p>This content is inside a division.</p>
    </div>
    ```

**`<span>`**: Defines a small piece of content within a larger element.

    ```html
    <p>This is <span style="color: red;">red</span> text.</p>
    ```

**`<br>`**: Inserts a line break.

    ```html
    <p>This is a line of text.<br />And this is on a new line.</p>
    ```

**`<strong>` and `<em>`**: These tags are used for text emphasis. `<strong>` represents strong importance or importance, typically displayed as bold, while `<em>` represents emphasized text, typically displayed as italic.

    ```html
    <p>This is <strong>strong</strong> and <em>emphasized</em> text.</p>
    ```

**`<a>` with target attribute**: The `target` attribute specifies where to open the linked document. Common values include `_blank` (opens in a new tab or window) and `_self` (opens in the same frame or tab).

    ```html
    <a href="https://www.example.com" target="_blank">Visit Example.com in a new tab</a>
    ```

**`<img>` with width and height attributes**: The `width` and `height` attributes specify the dimensions of an image in pixels.

    ```html
    <img src="image.jpg" alt="Description of the image" width="300" height="200" />
    ```

**`<table>`, `<tr>`, `<td>`, and `<th>`**: These tags are used to create tables. `<table>` defines the table, `<tr>` defines a row, `<td>` defines a data cell, and `<th>` defines a header cell.

    ```html
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>John</td>
        <td>25</td>
      </tr>
      <tr>
        <td>Jane</td>
        <td>30</td>
      </tr>
    </table>
    ```

**`<form>`, `<input>`, and `<button>`**: These tags are used for creating forms. `<form>` defines a form, `<input>` is used for input fields, and `<button>` creates a clickable button.

    ```html
    <form action="/submit" method="post">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" />
      <br />
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" />
      <br />
      <button type="submit">Submit</button>
    </form>
    ```

**`<select>`, `<option>`, and `<optgroup>`**: These tags are used to create dropdown menus. `<select>` defines the dropdown, `<option>` defines individual options, and `<optgroup>` groups options within the dropdown.

    ```html
    <select>
      <optgroup label="Fruits">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
      </optgroup>
      <optgroup label="Vegetables">
        <option value="carrot">Carrot</option>
        <option value="broccoli">Broccoli</option>
      </optgroup>
    </select>
    ```

These are just a few examples, and there are many more HTML tags available for various purposes.
