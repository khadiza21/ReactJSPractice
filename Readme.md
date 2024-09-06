# REACT JS

### What is React , React VS Angular Vs Vue
- 38-1

## React JS core Concept
0. 4 ways to Define components
- similar in look, different in data
- container component
- No common pattern , but breakdown for working purpose.
- Stand alone component.

1. What is component? 
- Components are the foundation upon which build user interfaces(UI).
- In a React app, every piece of UI is a component.
- A React component is a JS function that you can sprinkle with markup except: 1. Their names always begin with a capital letter and return JSX markup.

2. How to build a Component?
- Export the component, Define the function,  Add markup

3. What Browser sees behind a React Component?
4. Advantages of Component? (code reusability, fast development, design consistency, Maintainability)
5. What is Pitfall for component?
- Define every component at the top level. When a child component needs some data from a parent,  pass it by props instead of nesting definitions.

6. What is JSX(JS XML)? 
- Syntax extension for JS.
- Write HTML like markup inside a JS file.
- Under the hood, it's transformed into regular JS using compiler like Babel / Typescript.

7. Why can't browser read JSX?
- Browsers are designed to interpret and render HTML, CSS, JS. But JSX is a combine of HTML , JS which not support by browser.

- JSX file -> JSX Compiler (like Babel) -> JS File -> (Virtual DOM <- -> Browser DOM)

8. What are Props?
9. Props is Unidirectional?
10. Different Values of Props 
- My string value
- Template literals with variables
- Number literals
- Boolean literals
- Plain Obj. literals
- Array literals
- JSX 
- Variables having any kind of value
