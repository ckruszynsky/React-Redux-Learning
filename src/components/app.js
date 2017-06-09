import React, { Component } from "react";
import BookList from "../containers/book-list";
import BookDetail from "../containers/book-detail";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

export default App;
