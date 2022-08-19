import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import "./Post.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

const Post=forwardRef(
    ({displayName, username, verified, text, image, avatar}, ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="post__avatar">
        {/* <Avatar src=l.ssl.fastly"https://kajabi-storefronts-production.globa.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" /> */}
        <Avatar src={avatar}/>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {/* Aryan Pradhan{" "} */}
              {displayName}{" "}
              <span className="post__headerSpecial">
              {verified && <VerifiedUserIcon className="post__badge" />}
                {/* @cleverboy */}
                {username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            {/* <p> I challenge you to build a Twitter clone with React!! </p> */}
            <p>{text}</p>
          </div>
          </div>
        {/* </div>
        <img
          src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
          alt=""
        /> */}
        <img src={image} alt="" />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon className="small" />
          <PublishIcon className="small" />
        </div>
      </div>
    </div>
  );
}
);
export default Post;
