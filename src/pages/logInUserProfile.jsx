import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/logInUserProfile.scss';
import getUserPosts from '../components/posts/getUserPosts.jsx';
import getUserInfo from '../components/users/getUserInfo.jsx';

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
    const followers = userInfos.followers;

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
                        <img src={post.imgLink} alt="post" />
                        <p><strong>{post.postContent}</strong></p>
                        <h3>Comments </h3>
                        {post.comments.length > 0 && post.comments.map((comment, index) => (
                            <div>
                                <span>{comment.username}</span>
                                <p key={index}>{comment.comment}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section >
    );
}
