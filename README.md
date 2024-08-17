### **Milestones and Assignments for Instagram Clone**

#### **Milestone 1: Project Setup and Basic Routing**

**Assignment 1.1: Project Initialization**
- **Objective**: Set up the React project and install necessary dependencies.
- **Tasks**:
  - Create a new React app using Create React App.
  - Install dependencies like `axios` and `react-router-dom`.
  - Set up the basic project structure (folders for pages and components).

**Assignment 1.2: Set Up Routing**
- **Objective**: Implement basic navigation using React Router.
- **Tasks**:
  - Install `react-router-dom`.
  - Create basic routes for the app (e.g., Home, Register, Login, Profile).
  - Set up a simple navigation menu.

---

#### **Milestone 2: Authentication and User Management**

**Assignment 2.1: Registration and Login**
- **Objective**: Implement user registration and login functionality.
- **Tasks**:
  - Create the Register page with a form to collect user information.
  - Create the Login page with a form for user authentication.
  - Connect forms to the backend API using `axios` for user registration and login.
  - Handle authentication tokens (store in localStorage).

**Assignment 2.2: Authentication Context**
- **Objective**: Manage user authentication state across the app.
- **Tasks**:
  - Create an `AuthContext` to manage user authentication status.
  - Implement a provider to wrap the app and provide authentication state.
  - Use context to control access to routes (e.g., protect certain routes for logged-in users only).

**Assignment 2.3: Logout Functionality**
- **Objective**: Implement user logout functionality.
- **Tasks**:
  - Add a logout button to the UI (e.g., in a Navbar or Profile page).
  - Implement a function to clear authentication tokens and redirect the user to the login page.

   **`src/components/LogoutButton.js`**:
   ```javascript
   import React from 'react';
   import { useHistory } from 'react-router-dom';

   function LogoutButton() {
       const history = useHistory();

       const handleLogout = () => {
           localStorage.removeItem('token');
           history.push('/login');
       };

       return <button onClick={handleLogout}>Logout</button>;
   }

   export default LogoutButton;
   ```

---

#### **Milestone 3: Core Features and Interactions**

**Assignment 3.1: Home Page and Post Display**
- **Objective**: Display a list of posts on the Home page.
- **Tasks**:
  - Create a `PostCard` component to display individual posts.
  - Fetch posts from the backend and display them on the Home page.
  - Implement like and dislike functionality for posts.

**Assignment 3.2: Add Post Feature**
- **Objective**: Allow users to add new posts.
- **Tasks**:
  - Create an Add Post page with a form for creating a new post (e.g., uploading a photo and adding a caption).
  - Use Axios to send a POST request to add a new post to the backend.
  - Redirect users to the Home page or display the new post upon successful submission.

   **`src/pages/AddPost.js`**:
   ```javascript
   import React, { useState } from 'react';
   import axios from 'axios';
   import { useHistory } from 'react-router-dom';

   function AddPost() {
       const [caption, setCaption] = useState('');
       const [photo, setPhoto] = useState(null);
       const history = useHistory();

       const handleSubmit = async (event) => {
           event.preventDefault();
           const formData = new FormData();
           formData.append('caption', caption);
           formData.append('photo', photo);

           try {
               await axios.post('YOUR_BACKEND_URL/posts', formData, {
                   headers: {
                       'Content-Type': 'multipart/form-data',
                       'Authorization': `Bearer ${localStorage.getItem('token')}`
                   }
               });
               history.push('/home'); // Redirect to Home page
           } catch (error) {
               console.error(error);
           }
       };

       return (
           <div>
               <h1>Add Post</h1>
               <form onSubmit={handleSubmit}>
                   <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
                   <input type="text" placeholder="Caption" onChange={(e) => setCaption(e.target.value)} />
                   <button type="submit">Post</button>
               </form>
           </div>
       );
   }

   export default AddPost;
   ```

**Assignment 3.3: Profile Pages**
- **Objective**: Create and display user profiles and their posts.
- **Tasks**:
  - Create a Profile page to display user information and posts.
  - Implement a function to fetch and display posts specific to a user.
  - Allow users to view other profiles by navigating to their profile pages.

**Assignment 3.4: Post Interaction**
- **Objective**: Add functionalities for liking, disliking, and commenting on posts.
- **Tasks**:
  - Implement like and dislike buttons with corresponding API calls.
  - Create a comment section for each post and handle adding comments.
  - Update the UI to reflect interactions (like count, comment list).

   **`src/components/PostCard.js`**:
   ```javascript
   import React, { useState } from 'react';
   import axios from 'axios';

   function PostCard({ post }) {
       const [likes, setLikes] = useState(post.likes);
       const [comments, setComments] = useState(post.comments || []);
       const [comment, setComment] = useState('');

       const handleLike = async () => {
           try {
               await axios.post(`YOUR_BACKEND_URL/posts/${post.id}/like`, {}, {
                   headers: {
                       'Authorization': `Bearer ${localStorage.getItem('token')}`
                   }
               });
               setLikes(likes + 1);
           } catch (error) {
               console.error(error);
           }
       };

       const handleComment = async () => {
           try {
               const response = await axios.post(`YOUR_BACKEND_URL/posts/${post.id}/comment`, { comment }, {
                   headers: {
                       'Authorization': `Bearer ${localStorage.getItem('token')}`
                   }
               });
               setComments([...comments, response.data]);
               setComment('');
           } catch (error) {
               console.error(error);
           }
       };

       return (
           <div>
               <img src={post.photoUrl} alt="Post" />
               <p>{post.caption}</p>
               <button onClick={handleLike}>Like ({likes})</button>
               <div>
                   <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Add a comment" />
                   <button onClick={handleComment}>Comment</button>
               </div>
               <div>
                   {comments.map((c, index) => (
                       <p key={index}>{c.text}</p>
                   ))}
               </div>
           </div>
       );
   }

   export default PostCard;
   ```

---

#### **Milestone 4: Advanced Features**

**Assignment 4.1: Followers and Following**
- **Objective**: Implement functionality to follow and unfollow users and display follower/following lists.
- **Tasks**:
  - Create pages or sections to display a user’s followers and following.
  - Implement follow and unfollow buttons with API integration.
  - Update the user interface to show updated follower and following counts.

**Assignment 4.2: User Experience and Styling**
- **Objective**: Improve the user interface and overall experience.
- **Tasks**:
  - Apply CSS or use a CSS-in-JS library to style components.
  - Add loading indicators and error handling to improve user experience.
  - Test responsiveness and make adjustments for different screen sizes.

---

#### **Milestone 5: Final Touches and Deployment**

**Assignment 5.1: Testing and Debugging**
- **Objective**: Ensure the app works correctly and fix any issues.
- **Tasks**:
  - Test all features to ensure they work as expected.
  - Debug any issues or errors encountered during testing.
  - Write additional tests if necessary (e.g., unit tests, integration tests).

**Assignment 5.2: Deployment**
- **Objective**: Deploy the application to a hosting platform.
- **Tasks**:
  - Prepare the application for deployment (e.g., build the app).
  - Choose a hosting platform (like Vercel, Netlify, or GitHub Pages) and deploy the app.
  - Verify that the deployed app works correctly in a live environment.

---

### **Summary**

- **Milestone 1**: Set up the project and basic routing.
- **Milestone 2**: Implement authentication, user management, and logout functionality.
- **Milestone 3**: Develop core features including post display, adding posts, and interactions (like, comment).
- **Milestone 4**: Add advanced features like followers/following and enhance UI/UX.
- **Milestone 5**: Test the app thoroughly and deploy it.
