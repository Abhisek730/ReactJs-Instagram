### **Fetching and Displaying Data in React**

#### **Scenario: Instagram Home Page**

Imagine we want to fetch and display a list of posts on an Instagram-like Home page. Each post might have a photo and a caption.

---

### **Step-by-Step Guide**

#### **1. Set Up Your React Component**

First, create a new React component where you want to display the data.

```javascript
import React, { useState, useEffect } from 'react';

function HomePage() {
    return (
        <div>
            <h1>Instagram Home Page</h1>
            <PostList />
        </div>
    );
}
```

- **`useState`**: This hook helps manage the state (data) of our posts.
- **`useEffect`**: This hook helps fetch data from the server when the component renders.

#### **2. Create a `PostList` Component**

In this component, we will fetch data and display it.

```javascript
import React, { useState, useEffect } from 'react';

function PostList() {
    const [posts, setPosts] = useState([]); // Step 1: State for storing posts
    const [loading, setLoading] = useState(true); // Step 2: State for loading indicator
    const [error, setError] = useState(null); // Step 3: State for error handling

    useEffect(() => {
        // Step 4: Fetch data from the server
        async function fetchPosts() {
            try {
                const response = await fetch('https://api.example.com/posts');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPosts(data); // Step 5: Update state with the fetched data
            } catch (error) {
                setError(error.message); // Step 6: Handle any errors
            } finally {
                setLoading(false); // Step 7: Update loading state
            }
        }

        fetchPosts();
    }, []); // Empty dependency array means this runs once after the first render

    // Step 8: Render loading, error, or posts
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {posts.map(post => (
                <div key={post.id} className="post">
                    <img src={post.photoUrl} alt="Post" />
                    <p>{post.caption}</p>
                </div>
            ))}
        </div>
    );
}

export default HomePage;
```

#### **Explanation of Steps**

1. **State for Posts**: We use `useState` to create a state variable `posts` to store our fetched data.

2. **State for Loading**: We use `useState` to create a `loading` state to show a loading message while data is being fetched.

3. **State for Error**: We use `useState` to create an `error` state to handle any errors that occur during the fetch.

4. **Fetching Data**: Inside `useEffect`, we define an asynchronous function `fetchPosts` to fetch data from the backend using the `fetch` function.

5. **Updating State**: After fetching the data, we use `setPosts` to update our state with the fetched posts.

6. **Error Handling**: If an error occurs during fetching, we catch it and update the `error` state with the error message.

7. **Loading State**: Finally, we update the `loading` state to `false` once the data is fetched or an error occurs.

8. **Rendering**: Depending on the state, we render a loading message, an error message, or the list of posts.

---

### **Summary**

1. **Create Component**: Set up a component to display data.
2. **Fetch Data**: Use `fetch` inside `useEffect` to get data from the server.
3. **Manage State**: Use `useState` to handle data, loading, and errors.
4. **Render Data**: Display the fetched data or show loading/error messages.

---
