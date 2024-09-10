# REACT JS

## https://react.dev/learn
## https://react.dev/learn/updating-arrays-in-state
### https://reactrouter.com/en/main/start/tutorial
### https://github.com/brillout/awesome-react-components


### What is React , React VS Angular Vs Vue
- 38-1

## React JS core Concept
- Components
- JSX 
- Props
- Event Handler
- State 
- Load Data


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

11. What is conditional rendering? 
- The process of displaying different content based on certain conditions or states.
- To create dynamic user interfaces that can adapt to changes in data and UI.

12. Why conditional Rendering is Necessary in React Applications?
- Improved user Experience and Performance, simplified code, flexibility.  

13. What is Th Virtual DOM In React JS?
14. What is Virtual DOM? 
- Lightweight copy of a DOM object
- Has properties the same as real DOM object
- Make changes in the DOM with the help of the Diff Algorithm.

15. How work V DOM? 
16. Virtual DOM vs Real DOM?
17. What is Render in react?
18. How does rendering happen?
19. Rendering vs Re-rendering?
20. Server and client side rendering? when use them?
21. Controlled and Uncontrolled Component in React JS?
22. What are different ways to reuse react Components? - Higher Order, render props, Children , etc.
23. Passing Data deeply with context.( React dev / learn)
24. How to Use Context API to Avoid Prop Drilling ? 
25. Usages of Context API in different purpose.
26. Context Step :
- 1: Create a Context Object
- 2: Wtap the parent component with provider
- 3: Consume the context.
27. Custom Hooks. Rules of Custom hooks.
28. Form Reuseable using props and children.



### Hooks Types
- State hooks
- Context hooks
- Ref hooks
- Effect hooks
- Performance hooks
- others

### React State Hooks
1. What exactly is state?
2. Why useState() is needed?
3. 5 use cases of useState() :
- State management
- conditional rendering
- Toggle flags (true/false)
- Counter 
- Store API data in State.

### Effects in React 
1. What is UseEffect?


### API
- Fre Mock api
- Beeceptor
- public api
- swagger api

### Data save
1. DB
2. Browser 
- LS
- SS
- IndexDB
- cookies


#### React Awesome Components



