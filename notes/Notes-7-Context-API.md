### **Introduction to React Context API**

#### **What is React Context API?**

- **Definition**: The React Context API is a feature in React that allows you to share data between components without having to pass props through every level of your component tree.

#### **Why Use React Context API?**

- **Avoid Prop Drilling**: Prop drilling is when you pass data through many layers of components. Context helps you avoid this by letting you share data directly with components that need it.
- **Global State Management**: It’s useful for managing global state or data that needs to be accessed by many components, like user authentication status or theme settings.

#### **When to Use React Context API?**

- **Multiple Components Need Access to the Same Data**: Use Context when you have data that needs to be accessed by multiple components at different levels of your application.
- **Avoid Passing Props Deeply**: If you find yourself passing props through many layers of components, Context can simplify your code.

#### **How to Use React Context API?**

Here’s a simple example of how to use React Context to share a theme setting (light or dark mode) across components.

**1. Create Context**

- **Create a new file** called `ThemeContext.js`.

```javascript
import React, { createContext, useState } from 'react';

// Create a Context with a default value
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    // State for the theme
    const [theme, setTheme] = useState('light');

    // Function to toggle the theme
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;
```

- **What We Did**:
  - **Create Context**: `createContext()` creates a new context.
  - **Provider Component**: `ThemeProvider` provides the context value (theme and toggle function) to its child components.

**2. Wrap Your App with the Provider**

- **In `index.js` or `App.js`**:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './ThemeContext';

ReactDOM.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);
```

- **What We Did**:
  - **Wrap with Provider**: `ThemeProvider` wraps the `App` component to make the theme data available throughout the app.

**3. Use Context in Components**

- **In any component** that needs the theme, you can use the context:

```javascript
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemeSwitcher() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <p>Current theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default ThemeSwitcher;
```

- **What We Did**:
  - **Use Context**: `useContext(ThemeContext)` allows the component to access the current theme and the `toggleTheme` function.

---

### **Glossary**

- **Context**: A way to share data (like themes or user information) across components without passing props manually at every level.
- **Provider**: A component that supplies the context value to its child components.
- **Consumer**: A component that accesses the context value provided by the nearest Provider.
- **Prop Drilling**: The process of passing data through many layers of components via props.
- **Global State**: A state that needs to be accessible across multiple components in an application.
- **`createContext`**: A function that creates a new Context object.
- **`useContext`**: A hook that allows a component to access the value of a Context.

---

### **Summary**

1. **React Context API**: A way to share data across components without prop drilling.
2. **Why Use It**: To simplify state management and avoid passing props through many layers.
3. **When to Use**: When multiple components need the same data or when prop drilling becomes cumbersome.
4. **How to Use**:
   - **Create Context**: Define the context and provider.
   - **Wrap Your App**: Use the provider to make the context available.
   - **Consume Context**: Access the context data in components using `useContext`.

---

