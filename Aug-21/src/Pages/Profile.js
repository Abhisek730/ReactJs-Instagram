import React, { useEffect, useState } from 'react';
import './Css/ProfilePage.css'; // Ensure to create a CSS file for styling

const ProfilePage = () => {
    const [user, setUser] = useState()
    console.log(window.location.search);

    const queryParams = new URLSearchParams(window.location.search)
    const userId = queryParams.get("userId")
   


    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch("https://insta-backend-hr3a.onrender.com/user/" + userId, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                })
                const data = await response.json()
                console.log(data);
                setUser(data)

            } catch (err) {
                console.log(err)
            }

        }
        fetchUserProfile()
    }, [])



    // const user = {
    //     profilePicture: 'https://via.placeholder.com/150',
    //     username: 'johndoe',
    //     bio: 'This is a short bio about John Doe.',
    //     posts: [
    //         'https://via.placeholder.com/150',
    //         'https://via.placeholder.com/150',
    //         'https://via.placeholder.com/150',
    //         'https://via.placeholder.com/150',
    //         'https://via.placeholder.com/150',
    //         'https://via.placeholder.com/150',
    //     ],
    //     stats: {
    //         posts: 34,
    //         followers: 1234,
    //         following: 567,
    //     },
    // };

    return (
        user && <div className="profile-page">
            <header className="profile-header">
                <div className="profile-picture">
                    <img src={user.user.Photo? user.user.Photo : "https://cdn-icons-png.flaticon.com/128/149/149071.png"} alt={`${user.username}'s profile`} />
                </div>
                <div className="profile-info">
                    <h1>{user.user.userName}</h1>
                    <div className="profile-stats">
                        <span><strong>{user.post.length}</strong> posts</span>
                        <span><strong>{user.user.followers.length}</strong> followers</span>
                        <span><strong>{user.user.following.length}</strong> following</span>
                    </div>
                    <p className="profile-bio">Helllo 123 Mic testing</p>
                </div>
            </header>
            <div className="profile-posts">
                {user.post.map((post, index) => (
                    <div key={index} className="post">
                        <img src={post.photo} alt={`Post ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfilePage;
