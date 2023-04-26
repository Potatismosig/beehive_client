import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/home.scss';
import getFriendsPosts from '../components/posts/getFriendsPosts';
import getUserInfo from '../components/users/getUserInfo';
import likePost from '../components/posts/likePost';
import commentPostFetch from '../components/posts/commentPost';
import createdPostFetch from '../components/posts/createPost';

import { GiTreeBeehive } from 'react-icons/gi';
import { BiCommentDots, BiPaperPlane } from 'react-icons/bi';

export default function Home() {
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    const [commentContent, setCommentContent] = useState({});
    const [createTextContent ,setCreateTextContent] = useState([]);
    const [imageurl ,setImageurl] = useState([]);

    useEffect(() => {
        fetchUserInfosAndFriendsPosts();
    }, []);

    async function fetchUserInfosAndFriendsPosts() {
        try {
            await userInfos();
            await friendsPosts();
        } catch (error) {
            console.error(error);
        }
    }

    async function friendsPosts() {
        const response = await getFriendsPosts();
        const data = await response.json();
        if (data === "Authentication error: jwt expired") {
            navigate("/");
        }
        setData(data);
    }

    async function userInfos() {
        const response = await getUserInfo();
        const data = await response.json();
        if (data === "Authentication error: jwt expired") {
            navigate("/");
        }
        setUserInfo(data);
    }

    async function likeUserPost(postId) {
        const response = await likePost(postId);
        const data = await response.json();
        if (data === "Authentication error: jwt expired") {
            navigate("/");
        }
        await friendsPosts();
    }

    async function commentPost(postId, comments) {
        const response = await commentPostFetch(postId, comments);
        const data = await response.json();
        if (data === "Authentication error: jwt expired") {
            navigate("/");
        }
        await friendsPosts();
    }

    async function createdPost(postContent, link) {
        const response = await createdPostFetch(postContent, link);
        const data = await response.json();
        if (data === "Authentication error: jwt expired") {
            navigate("/");
        }
    }

    function handleCheckboxChange(event) {
        const postId = event.target.value;
        likeUserPost(postId);
    }

    function handleSubmit(event, postId) {
        event.preventDefault();
        const commentText = commentContent[postId];
        commentPost(postId, commentText);
    }
    
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'emjgys7r');
        
        try {
          const response = await fetch(
            'https://api.cloudinary.com/v1_1/dddzde2ks/image/upload',
            {
              method: 'POST',
              body: formData,
            }
          );
          const data = await response.json();
          setImageurl(data.secure_url);
        } catch (error) {
          console.error('Error uploading the image:', error);
        }
    };

    const handleSubmitCreate = async (e) => {
        e.preventDefault();
        createdPost(createTextContent, imageurl)
    };

    return (
        <section className='home'>
            <form action="" className='createPost' onSubmit={handleSubmitCreate}>
                <h1>Create Bee post</h1>
                <input type="text" value={createTextContent} onChange={(e) => setCreateTextContent(e.target.value)} required/>
                <input type="file" accept="image/png, image/jpeg" onChange={handleFileChange} required/>
                <button type='submit' disabled={!imageurl}>Create</button>
            </form>

            <div className='posts'>
            {
                data.length ?
                    data.length > 0 && data.map((post, index) => (
                        <div className='post' key={post._id}>
                            <div className='postImg'>
                                <img src={post.linkImg} alt="Post img" />
                            </div>

                            <div className='postInfo'>
                                <div className='userinfo-engagement'>
                                    <div className='userProfile'>
                                        <img src="https://cdn.leonardo.ai/users/c7b2baf0-23b8-4ae7-81d0-f7389e13d481/generations/a900af82-9cc2-4dc1-a635-6535ed76a6eb/Spirit_Creatures_realistic_cute_bee_1.jpg" alt="Profile img" />
                                        <p className='username'>{post.username}</p>     
                                    </div>
                                    <p className='description'>{post.postContent}</p>
                                    <div className='engagement'>
                                        <label htmlFor={index} className='likeInfo'>
                                            <input type="checkbox" id={index} value={post._id} disabled={post.likes?.includes(userInfo.username)} onChange={handleCheckboxChange} style={{}}/>
                                            <span className='likeSpan'
                                                style={{
                                                    color: post.likes?.includes(userInfo.username) ? '#d7a06066' : '#80482c'
                                                }}
                                            >
                                                <GiTreeBeehive></GiTreeBeehive>
                                            </span>
                                            <span>{post.likes?.length}</span>
                                        </label>

                                        <div className='commentCount'>
                                            <span className='commentSpan'>
                                                <BiCommentDots></BiCommentDots>
                                            </span>
                                            <span>{post.comments?.length}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='comments'>
                                    {post.comments.map((comment, index) => (
                                        <div className='comment' key={index}>

                                            <div className='userProfile'>
                                                <img src="https://cdn.leonardo.ai/users/c7b2baf0-23b8-4ae7-81d0-f7389e13d481/generations/fcf555b6-033f-4e45-b2b2-929b4f01ecf5/Spirit_Creatures_realistic_cute_bee_2.jpg" alt="" />
                                                <p className='username'>{comment.username}</p>
                                            </div>
                                            <p className='commentContent'>{comment.comment}</p>
                                        </div>
                                    ))}

                                    <form className="commentForm" onSubmit={(e) => handleSubmit(e, post._id)}>
                                        <label className="commentLabel" htmlFor={post._id}>
                                        <input
                                            type="text"
                                            id={post._id}
                                            value={commentContent[post._id] || ''}
                                            onChange={(e) => setCommentContent({ ...commentContent, [post._id]: e.target.value })}
                                            placeholder="Min 3 characters long"
                                        />

                                        </label>
                                        <button type="submit">
                                            <BiPaperPlane></BiPaperPlane>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    ))
                :
                <div>
                    <p>Error, No posts found</p>
                </div>
            }
            </div>
        </section>
    )
}
