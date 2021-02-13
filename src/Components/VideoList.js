import React from "react";
import VideoItem from "./VideoItem";
import "semantic-ui-css/semantic.min.css";
class Videolist extends React.Component {
  renderList = () => {
    return this.props.videos.map((video) => {
      return (
        <VideoItem
          key={video.id.videoId}
          onVideoSelect={this.props.onVideoSelect}
          video={video}
        />
      );
    });
  };
  render() {
    return <div className="ui list">{this.renderList()}</div>;
  }
}

export default Videolist;
