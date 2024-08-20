import React, { useEffect, useState } from 'react';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';
import { CiLogout } from "react-icons/ci";
import LogOut from '../Components/LogOut';

const Home = ({ setIsLogin }) => {
    const [posts, setPosts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)


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
                console.log(data);
                setPosts(data)

            } catch (err) {
                console.log(err)
            }
        }

        fetchPost()
    }, [])



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
                <div style={styles.navRight} onClick={openModal}>
                    <CiLogout style={{ fontSize: "25px", padding: '5px', backgroundColor: 'red', color: 'white', borderRadius: "50%", cursor: 'pointer' }} />
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
                                <span style={styles.feedUserName}>{post.postedBy.name}</span>
                            </div>
                            <img
                                src={post.photo}
                                alt="Feed"
                                style={styles.feedImage}
                            />
                            <div style={styles.feedActions}>
                                <FaHeart style={styles.actionIcon} />
                                <FaComment style={styles.actionIcon} />
                                <FaShare style={styles.actionIcon} />
                            </div>
                            <div style={styles.feedCaption}>
                                <span style={styles.feedUserName}>{post.postedBy.name}</span> {post.body}
                            </div>
                        </div>
                    ))
                }
            </div>
            <LogOut isModalOpen={isModalOpen} closeModal={closeModal} setIsLogin={setIsLogin}> </LogOut>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',

        margin: '0 auto',
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
        justifyContent: 'space-around',
        padding: '10px',
        fontSize: '20px',
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
