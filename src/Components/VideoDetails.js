import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) return <div> Loading</div>;
  console.log(video.id.videoId);
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="ui segment">
      <div className="ui embed">
        <iframe alt={video.snippet.description} src={videoSrc} />
      </div>
      <h4 className="header">{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetails;
