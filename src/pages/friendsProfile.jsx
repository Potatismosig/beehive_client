import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import friendsProfileFetch from "../components/users/friendsProfileFetch";
import Header from '../components/pageComponents/header';


export default function FriendsProfile() {
  let { friendUsername } = useParams();
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [userInfos, setUserInfos] = useState([]);

  useEffect(() => {
    friendsProfileInfo();
  }, []);

  async function friendsProfileInfo() {
    const response = await friendsProfileFetch(friendUsername);
    const data = await response.json();
    if (data === "Authentication error: jwt expired") {
      navigate("/");
    }
    if (data === "User not found") {
      navigate("/home");
    }
    setPosts(data.posts);
    setUserInfos(data.user);
  }
  
  return (
  <section className="logInUserProfile">
  <Header />
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
      {posts.length > 0 && posts.map((post, index) => (
        <div className="contains-feed-info" key={index} >
          <img src={post.linkImg} alt="post" />
          <p>{post.postContent}</p>

          {post.comments.length ? <h3>Comments </h3> : <></>}

          {post.comments.length > 0 && post.comments.map((comment, index) => (
              <div key={index}>
                  <span>{comment.username}</span>
                  <p>{comment.comment}</p>
              </div>
          ))}
          
        </div>
      ))}
    </div>

  </section>
  )
}
