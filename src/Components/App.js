import React from "react";
import SearchBar from "./SearchBar";
import "semantic-ui-css/semantic.min.css";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";
class App extends React.Component {
  state = {
    videos: [],
    videoSelected: null,
  };
  componentDidMount() {
    this.onFormSubmit("Hanuman");
  }
  onVideoSelect = (video) => {
    // console.log("Inside App component", video);
    this.setState({ videoSelected: video });
    console.log(this.state.videoSelected);
  };
  onFormSubmit = async (term) => {
    const resposne = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: resposne.data.items,
      videoSelected: resposne.data.items[0],
    });
    console.log(this.state.videos);
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.videoSelected} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
