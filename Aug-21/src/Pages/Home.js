import React, { useEffect, useState } from 'react';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';
import { CiLogout } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import LogOut from '../Components/LogOut';
import AddPost from '../Components/AddPost';
import { FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Home = ({ setIsLogin }) => {
    const [posts, setPosts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [comment, setComment] = useState("")

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    const [newPost, setNewPost] = useState(true)

    const [isAddPostModalOpen, setIsAddPostModalOpen] = useState(false)
    const openAddPostModal = () => setIsAddPostModalOpen(true)
    const closeAddPostModal = () => setIsAddPostModalOpen(false)

    function updateNewPostValue() {
        setNewPost((prev) => !prev)
    }

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch("https://insta-backend-hr3a.onrender.com/allposts", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                })
                const data = await response.json()
                console.log(data[0].comments[0].postedBy);
                setPosts(data)

            } catch (err) {
                console.log(err)
            }
        }

        fetchPost()
    }, [newPost])

    async function likePost(postId) {
        try {
            const response = await fetch("https://insta-backend-hr3a.onrender.com/like", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    postId: postId
                })
            });
            const data = await response.json();
            console.log(data);
            toast.success("Liked Successfully6")
            updateNewPostValue()

        } catch (err) {
            console.log(err);
        }
    }
    async function unlikePost(postId) {
        try {
            const response = await fetch("https://insta-backend-hr3a.onrender.com/unlike", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    postId: postId
                })
            });
            const data = await response.json();
            console.log(data);
            toast.success("UnLiked Successfully6")
            updateNewPostValue()

        } catch (err) {
            console.log(err);
        }
    }
    async function commentPost(postId) {
        try {
            const response = await fetch("https://insta-backend-hr3a.onrender.com/comment", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    text: comment,
                    postId: postId
                })
            });
            const data = await response.json();
            console.log(data);
            toast.success("Comment Successfully")
            setComment("")
            updateNewPostValue()
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div style={styles.container}>
            <nav style={styles.navbar}>
                <div style={styles.navLeft}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                        alt="Instagram Logo"
                        style={styles.logo}
                    />
                </div>
                <div style={styles.navCenter}>
                    <input
                        type="text"
                        placeholder="Search"
                        style={styles.searchInput}
                    />
                </div>
                <div style={styles.navRight} >
                    <FaPlus style={{ fontSize: "25px", padding: '5px', cursor: 'pointer', marginRight: "10px" }} onClick={openAddPostModal} />


                    <CiLogout onClick={openModal} style={{ fontSize: "25px", padding: '5px', backgroundColor: 'red', color: 'white', borderRadius: "50%", cursor: 'pointer' }} />
                </div>
            </nav>


            <div style={styles.feedContainer}>
                {posts &&
                    posts.map((post) => (
                        <div key={post._id} style={styles.feedCard}>
                            <div style={styles.feedHeader}>
                                <img
                                    src={post.postedBy.Photo ? post.postedBy.Photo : "https://cdn-icons-png.flaticon.com/128/149/149071.png"}
                                    alt="User"
                                    style={styles.feedUserIcon}
                                />
                                <Link to={`/profile?userId=${post.postedBy._id}`}><span style={styles.feedUserName}>{post.postedBy.name}</span></Link>
                            </div>
                            <img
                                src={post.photo}
                                alt="Feed"
                                style={styles.feedImage}
                            />
                            <div style={styles.feedActions}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <span style={{ marginRight: "5px", }}>{post.likes.length}</span>
                                    {post.likes.includes(localStorage.getItem("userId")) ? <FaRegHeart style={styles.redIcon} onClick={() => unlikePost(post._id)} /> : <FaRegHeart onClick={() => likePost(post._id)} style={styles.actionIcon} />

                                    }


                                </div>
                                <FaComment style={styles.actionIcon} />
                                <FaShare style={styles.actionIcon} />
                            </div>
                            <div style={styles.feedCaption}>
                                <span style={styles.feedUserName}>{post.postedBy.name}</span> {post.body}
                            </div>
                            <div style={{ height: "100px", borderTop: "1px solid #ccc",overflowY:"scroll" }}>

                                {post.comments.map((commentDetail) => (
                                    <div key={commentDetail._id} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "0px 10px" }}>
                                        
                                        <p>{commentDetail.comment}</p>
                                    </div>
                                ))

                                }


                            </div>
                            <div style={{ display: "flex", alignItems: "center", borderTop: "1px solid black" }}>
                                <input type="text" style={{ padding: "7px", border: "none" }} placeholder='Add your comment here.....' value={comment} onChange={(e) => setComment(e.target.value)} />
                                <button style={{ background: "black", cursor: "pointer", fontWeight: "bold", color: "#fff", padding: "12px", border: "none" }} onClick={() => commentPost(post._id)}>Post</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <LogOut isModalOpen={isModalOpen} closeModal={closeModal} setIsLogin={setIsLogin}> </LogOut>


            <AddPost updateNewPostValue={updateNewPostValue} isModalOpen={isAddPostModalOpen} closeModal={closeAddPostModal}></AddPost>
            <ToastContainer />
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',

        margin: '0 auto',
    },
    redIcon: {
        backgroundColor: "red"
    },
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        borderBottom: '1px solid #dbdbdb',
        position: 'sticky',
        top: 0,
        backgroundColor: '#fff',
        zIndex: 1000,
    },
    logo: {
        height: '40px',
    },
    searchInput: {
        width: '200px',
        padding: '5px 10px',
        borderRadius: '5px',
        border: '1px solid #dbdbdb',
    },
    profileIcon: {
        height: '30px',
        borderRadius: '50%',
    },
    feedContainer: {
        marginTop: '20px',
        maxWidth: '600px',
        margin: "20px auto"
    },
    feedCard: {
        border: '1px solid #dbdbdb',
        borderRadius: '5px',
        marginBottom: '20px',
    },
    feedHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
    },
    feedUserIcon: {
        height: '40px',
        borderRadius: '50%',
        marginRight: '10px',
    },
    feedUserName: {
        fontWeight: 'bold',
    },
    feedImage: {
        width: '100%',
    },
    feedActions: {
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '10px',
        fontSize: '20px',
        gap: "15px"
    },
    actionIcon: {
        cursor: 'pointer',
        marginRight: '10px',
    },
    feedCaption: {
        padding: '10px',
    },
};

export default Home;
