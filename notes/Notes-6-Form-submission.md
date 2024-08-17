### **Step-by-Step Guide: Instagram Signup Page**

#### **1. Set Up Your React Component**

First, create a new React component for the signup form.

**Create `SignupForm.js`:**

```javascript
import React, { useState } from 'react';

function SignupForm() {
    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                {/* Form fields will go here */}
            </form>
        </div>
    );
}

export default SignupForm;
```

- **Purpose**: This component will render the signup form on the page.

#### **2. Add Form Fields**

Add the input fields for username, email, and password, and create state variables to manage their values.

**Update `SignupForm.js`:**

```javascript
import React, { useState } from 'react';

function SignupForm() {
    // Step 1: State for form inputs
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // Step 2: State for loading
    const [error, setError] = useState(null); // Step 3: State for error
    const [success, setSuccess] = useState(null); // Step 4: State for success message

    // Step 5: Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission
        setLoading(true); // Show loading state

        try {
            const response = await fetch('https://api.example.com/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }), // Send data as JSON
            });

            if (!response.ok) {
                throw new Error('Signup failed'); // Handle errors
            }

            const result = await response.json();
            setSuccess('Signup successful!'); // Success message
            setUsername(''); // Clear form fields
            setEmail('');
            setPassword('');
        } catch (error) {
            setError(error.message); // Set error message
        } finally {
            setLoading(false); // Hide loading state
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}> {/* Step 6: Attach handleSubmit */}
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit" disabled={loading}> {/* Step 7: Submit button */}
                    {loading ? 'Submitting...' : 'Sign Up'}
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Step 8: Error message */}
            {success && <p style={{ color: 'green' }}>{success}</p>} {/* Step 9: Success message */}
        </div>
    );
}

export default SignupForm;
```

#### **Explanation of Each Step**

1. **State for Form Inputs**:
   - **`useState`**: Use `useState` to create state variables for `username`, `email`, and `password`. These will store the values entered by the user.

2. **State for Loading**:
   - **`loading`**: Create a `loading` state to indicate that the form is being submitted and to disable the submit button during this time.

3. **State for Error**:
   - **`error`**: Create an `error` state to display any errors that occur during form submission.

4. **State for Success**:
   - **`success`**: Create a `success` state to display a message when the signup is successful.

5. **Handle Form Submission**:
   - **`handleSubmit`**: This function is called when the form is submitted.
     - **`event.preventDefault()`**: Prevents the default form submission behavior (which would reload the page).
     - **`fetch`**: Send the form data to the server as a JSON object.
     - **Error Handling**: Catch any errors and update the `error` state.
     - **Success Handling**: Update the `success` state and clear the form fields if the submission is successful.
     - **Loading State**: Use `finally` to hide the loading indicator.

6. **Attach `handleSubmit`**:
   - **`onSubmit`**: Attach `handleSubmit` to the form’s `onSubmit` event to handle form submission.

7. **Submit Button**:
   - **`disabled={loading}`**: Disable the button while the form is submitting to prevent multiple submissions.
   - **`{loading ? 'Submitting...' : 'Sign Up'}`**: Show a different text while loading.

8. **Error Message**:
   - **Conditionally Render**: Show an error message if `error` state is set.

9. **Success Message**:
   - **Conditionally Render**: Show a success message if `success` state is set.

---

### **Summary**

1. **Create the Form**: Set up your form with input fields and state variables.
2. **Handle Submission**: Use `fetch` in the `handleSubmit` function to send data to the server.
3. **Manage States**: Handle loading, error, and success states to improve user experience.
4. **Render Feedback**: Display appropriate messages based on the submission process.

By following these steps, you can effectively handle form submissions and data sending in React, using the Instagram signup page as an example.