import { useEffect, useState } from 'react'
import React from 'react'
import { useNavigate } from "react-router-dom";
import getAllUsers from '../components/users/getAllUsers'
import followUser from '../components/users/followUser';
import '../styles/allUsers.scss'


export default function AllUsers() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);  
  

  useEffect(() => {
    allUsers();
  }, []);

  async function allUsers() {
    try {
      const response = await getAllUsers();
      const data = await response.json();
      if (data === "Authentication error: jwt expired") {
        navigate("/");
      } else if (Array.isArray(data)) {
        setUsers(data);
      } else {
        console.log("Unexpected data format:", data);
      }
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  }

  async function follow(followUsername) {
    try {
      const response = await followUser(followUsername);
      const data = await response.json();
      if (data === "Authentication error: jwt expired") {
        navigate("/");
      }

    allUsers(); 

    } catch (error) {
      console.log("Error fetching users:", error);
    }
  }

  function handleFollowUser(e) {
    const followuser = e.target.value;
    follow(followuser);
  }


  
  return (    
    <section className='allUsers'>
      {users.length ? (
        users.map((user, index) => (
          <div key={index} className='user'>
            <p>{user.username}</p>
            <button className='followButton' value={user.username} onClick={handleFollowUser}>Follow</button>
          </div>
        ))
      ) : (
        <div>
          <p>Error, no users found.</p>
        </div>
      )}
    </section>   
  )
}


