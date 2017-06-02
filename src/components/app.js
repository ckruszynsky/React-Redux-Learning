import React, { Component } from "react";
import SearchBar from "./search_bar";
import VideoList from "./video_list";
import VideoDetail from "./video_detail";
import YTSearch from "youtube-api-search";
import _ from 'lodash';

const API_KEY = "AIzaSyCBy17oDE2r9Jb2HFBYA8xuOR9uH1vqChE";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('guitars');
  }

  videoSearch(term) {
      YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar  onSearchTermChange = {videoSearch } />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
