# Understanding JSX

JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code. It combines HTML and JavaScript in a way that makes it easier to create and manage user interfaces in React.

### Key Points:

- **Combination of HTML and JavaScript**: JSX allows you to write HTML-like elements alongside JavaScript logic in the same file, making it easy to design and manipulate UIs.
- **Syntax**: JSX uses angle brackets (`< >`) to define elements, just like HTML. You can include attributes and children within the elements.
- **Expression Evaluation**: You can include JavaScript expressions inside curly braces `{}` within JSX. This allows you to dynamically render data, call functions, and use variables.
- **Compilation**: JSX is not natively understood by browsers, so it needs to be transpiled into regular JavaScript using tools like Babel before being executed.
- **Usage**: JSX is commonly used in React to define components, render lists, handle events, and pass data through props.

**Example:**

```javascript
// JSX code
const MyComponent = () => {
  const name = "Alice";
  return (
    <div>
      <h1>Hello, {name}!</h1> {/* JavaScript expression inside curly braces */}
      <p>Welcome to React.</p>
    </div>
  );
};
```

In this example, the component uses JSX to render an `h1` element with a greeting and a `p` element with text. The JavaScript expression `{name}` is used inside curly braces to dynamically insert the value of the `name` variable.
