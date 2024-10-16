import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>React Hooks Rules</h1>
      {/* <p>

      In React, **Hooks** are a powerful feature that allow you to use state and other React features without writing a class. However, there are some important rules that you must follow when using Hooks to ensure they work as expected.

### React Hooks Rules

#### 1. **Only Call Hooks at the Top Level**
- **Explanation**: You should always call Hooks at the **top level** of your React functions, not inside loops, conditions, or nested functions.
- **Why**: This ensures that Hooks are called in the same order each time a component renders. React relies on the order in which Hooks are called to keep track of the state between re-renders.
  
  **Wrong Example:**
  ```js
  function MyComponent() {
    if (someCondition) {
      useState(); // This breaks the rule!
    }
  }
  ```

  **Correct Example:**
  ```js
  function MyComponent() {
    const [state, setState] = useState(); // Always at the top level

    if (someCondition) {
      // Conditional logic goes here
    }
  }
  ```

#### 2. **Only Call Hooks from React Functions**
- **Explanation**: Hooks should only be called inside **React function components** or **custom Hooks**.
- **Why**: Hooks are designed to be used in the context of a component's lifecycle or when defining custom Hooks that follow the same conventions.
  
  **Wrong Example:**
  ```js
  function nonComponentFunction() {
    useState(); // This breaks the rule!
  }
  ```

  **Correct Example:**
  ```js
  function MyComponent() {
    const [state, setState] = useState(); // Correct usage inside a component
  }

  // Or in a custom Hook
  function useCustomHook() {
    useState(); // Correct usage in a custom Hook
  }
  ```

#### 3. **Use Hooks in the Same Order in Every Render**
- **Explanation**: Hooks must be called in the same order every time your component renders.
- **Why**: React uses the order in which Hooks are called to associate the Hook with the appropriate state or lifecycle method. If the order changes, React can lose track of which state or effect corresponds to which Hook.
  
  **Correct Example:**
  ```js
  function MyComponent() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("John");

    // Hooks are always called in the same order
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    }, [count]);
  }
  ```

#### 4. **Don’t Use Hooks Inside Conditions or Loops**
- **Explanation**: Hooks should not be placed inside loops or conditional blocks.
- **Why**: React expects the same number of Hooks to be called every time the component renders, and loops or conditions can lead to different numbers of Hook calls.
  
  **Wrong Example:**
  ```js
  function MyComponent() {
    if (someCondition) {
      useEffect(() => { // This is not allowed
        // some logic
      }, []);
    }
  }
  ```

  **Correct Example:**
  ```js
  function MyComponent() {
    useEffect(() => {
      if (someCondition) {
        // Conditional logic
      }
    }, []);
  }
  ```

### Common Hooks and Their Usage

- **`useState`**: To add state to functional components.
  ```js
  const [count, setCount] = useState(0);
  ```

- **`useEffect`**: For side effects like data fetching, subscriptions, etc.
  ```js
  useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]); // Runs when count changes
  ```

- **`useContext`**: To consume a context in functional components.
  ```js
  const value = useContext(MyContext);
  ```

- **`useReducer`**: A more complex form of state management, like Redux.
  ```js
  const [state, dispatch] = useReducer(reducer, initialState);
  ```

- **`useRef`**: To create references to DOM elements or store mutable variables without causing re-renders.
  ```js
  const inputRef = useRef(null);
  ```

- **`useMemo`**: For performance optimization, to memoize expensive calculations.
  ```js
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  ```

- **`useCallback`**: To memoize a function, preventing its recreation on every render.
  ```js
  const memoizedCallback = useCallback(() => {
    doSomething(a, b);
  }, [a, b]);
  ```

### Conclusion
To summarize, React Hooks are powerful tools for managing state and effects in functional components, but following the rules outlined above is crucial for avoiding issues. Always use Hooks in the same order, only in React functions, and never inside loops or conditions.
      </p> */}
    </>
  )
}

export default App
