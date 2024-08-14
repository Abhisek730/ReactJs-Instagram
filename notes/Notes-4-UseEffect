
### **React `useEffect` Hook*

#### **What is `useEffect`?**

- **Definition**: `useEffect` is a special function in React that lets you run code in your components after they render. Think of it like a tool for doing things that affect your component after it’s on the screen.

#### **Why Use `useEffect`?**

- **Handle Side Effects**: It helps you deal with tasks that aren't directly related to rendering the UI, like fetching data from a server or updating the document title.
- **Lifecycle Actions**: It allows you to perform actions at different times, like when the component first shows up or when certain data changes.

#### **How to Use `useEffect`?**

Here’s how you use `useEffect` in your React components:

#### **1. Run Code After Every Render**

You can use `useEffect` to run code after every time your component renders:

```javascript
import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component rendered or updated');
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default Example;
```

- **What Happens**:
  - The message is logged to the console every time the component renders (including when you click the button).

#### **2. Run Code Only Once (on Mount)**

To run code only when the component first appears (not on every update), use an empty array:

```javascript
useEffect(() => {
    console.log('Component mounted');
}, []);
```

- **What Happens**:
  - The message is logged only once, right when the component first shows up.

#### **3. Run Code When Data Changes**

To run code only when specific data changes, include that data in the array:

```javascript
useEffect(() => {
    console.log('Count changed:', count);
}, [count]);
```

- **What Happens**:
  - The message is logged every time the `count` value changes.

#### **4. Clean Up After the Component**

If you need to clean up things when the component is removed, return a cleanup function from `useEffect`:

```javascript
useEffect(() => {
    const timer = setInterval(() => {
        console.log('Timer running');
    }, 1000);

    return () => {
        clearInterval(timer);
        console.log('Timer stopped');
    };
}, []);
```

- **What Happens**:
  - The timer starts when the component mounts and stops when the component unmounts (is removed).
---

### **Glossary**

- **Hook**: A function that lets you use React features like state and effects in functional components.
- **Side Effect**: Actions that affect outside of the component, like making an API call or changing the DOM.
- **Dependency Array**: An array you pass to `useEffect` to tell React when to re-run the effect.
- **Cleanup Function**: A function returned from `useEffect` to clean up resources when the component unmounts.

---

### **Summary**

The `useEffect` hook in React lets you run code that handles things like data fetching or DOM updates. You can control when this code runs by using dependencies, and clean up resources when the component is removed. It’s a powerful tool for managing side effects in functional components.

---
