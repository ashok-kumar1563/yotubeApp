import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./VideoItem.css";
const VideoItem = ({ video, onVideoSelect }) => {
  // console.log("Inside VideoItem", video);
  return (
    <div onClick={() => onVideoSelect(video)} className=" video-item item">
      <img className="ui  image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header"> {video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
