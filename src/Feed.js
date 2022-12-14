import React, { useState,useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import db from "./firebase";
// import FlipMove from "react-flip-move";
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, []);
  
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* Twitter */}

      <TweetBox />

      {/* {posts.map((post) => (  */}
       <Post 
    displayName= "Aryan Pradhan"
    username= "@pradhan"
    verified={true}
    text= "YOO its working"
    avatar="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
    image="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
  /> 
       {/* ))} */}
      {/* Post */}
     {/* /// <FlipMove> */}

      {/* {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))} */}
{/* // </FlipMove> */}
       {/* <Post/> 
<Post/> 
<Post/> 
<Post/>    */}

      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
    </div>
  );
}

export default Feed;
