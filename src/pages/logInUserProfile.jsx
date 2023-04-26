import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/logInUserProfile.scss';
import getUserPosts from '../components/posts/getUserPosts.jsx';
import getUserInfo from '../components/users/getUserInfo.jsx';
import deletePosts from '../components/posts/deletePosts.jsx';
import putPosts from '../components/posts/putPosts.jsx';

export default function LogInUserProfile() {
    const navigateToLogin = useNavigate();
    useEffect(() => {
        userPosts();
        userInfo();
    }, []);

    const [posts, setPosts] = useState([]);
    const [userInfos, setUserInfos] = useState([]);


    async function userInfo() {
        const response = await getUserInfo();
        const data = await response.json();
        if (data === "Authentication error: jwt expired") {
            navigateToLogin("/");
            return;
        }
        setUserInfos(data);
    }

    async function userPosts() {
        const response = await getUserPosts();
        const data = await response.json();
        if (data === "Authentication error: jwt expired") {
            navigateToLogin("/");
            return;
        }
        setPosts(data);
    }

    async function deletePost(postId) {
        const response = await deletePosts(postId);
        const data = await response.json();
        if (data === "Authentication error: jwt expired") {
            navigateToLogin("/");
            return;
        }
        userPosts();
    }

    async function updatePost(postId, newContent) {
        const response = await putPosts(postId, newContent);
        const data = await response.json();
        if (data === "Authentication error: jwt expired") {
            navigateToLogin("/");
            return;
        }
        userPosts();
    }
    const followers = userInfos.followers;
    const handleDeletePosts = (e) => {
        const postId = e.target.value;
        deletePost(postId);
    }

    const handleSubmitUpdate = (e) => {
        e.preventDefault();
        const postId = e.target.dataset.postId;
        const postContent = e.target[0].value;
        updatePost(postId, postContent);
    }
    return (
        <section className="logInUserProfile">
            <div className="profile-card js-profile-card">
                <div className="profile-card__img">
                    <img src="https://picsum.photos/536/354" alt="profile" />
                </div>

                <div className="profile-card__cnt js-profile-cnt">

                    <div className="profile-card__name"> {userInfos.username}🐝 </div>

                    <div className="profile-card-loc"></div>

                    <div className="profile-card-inf">
                        <div className="profile-card-inf__item">
                            <div className="profile-card-inf__title">{userInfos.followers?.length}</div>
                            <div className="profile-card-inf__txt">Followers</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="users-feed">
                {posts.length > 0 && posts.map((post) => (
                    <div className="contains-feed-info" key={post._id} >
                        <img src={post.linkImg} alt="post" />


                        <form onSubmit={handleSubmitUpdate} data-post-id={post._id}>
                            <input defaultValue={post.postContent} type="text" />
                            <button type="submit" id="update">Update Bee post 🐝</button>
                        </form>
                        <br></br>

                        <button onClick={handleDeletePosts} value={post._id}> 🗑️ </button>
                        {post.comments.length ?
                            <h3>Comments </h3> : <h3></h3>}
                        {post.comments.length > 0 && post.comments.map((comment, index) => (
                            <div key={index}>
                                <span>{comment.username}</span>
                                <p>{comment.comment}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section >
    );
}
