import React, { Component } from "react";
import SearchBar from "../search_bar/";
import VideoList from "../video_list/";
import VideoDetail from '../video_detail/';
import YTSearch from "youtube-api-search";

const API_KEY = "AIzaSyCBy17oDE2r9Jb2HFBYA8xuOR9uH1vqChE";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;