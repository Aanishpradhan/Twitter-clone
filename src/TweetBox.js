import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import db from "./firebase";


function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("image");

  const sendTweeet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Aryan Pradhan",
      username: "@pradhan",
      verified: true,
      text: tweetMessage,
      avatar:
        "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
      image: tweetImage,
    });
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
          <input placeholder="What's happenining?" type="text" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional:Enter image URL"
          type="text"
        />

        <Button  className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
