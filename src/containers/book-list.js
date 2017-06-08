import React, { Component } from "react";
import { connect } from "react-redux";

class BookList extends Component {
  renderList() {    
    return this.props.books.map(book => {
      console.log(book.title);
      return  <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    );
  }
}

//takes in the application state so the function
//can determine what to pull off of state and return
//as props
//When application state changes, the component will re-render
//and the object returned will become props
const mapStateToProps = (state, ownProps) => {
  //whatever is returned will show up as props
  //in booklist
  return {
    books: state.books
  }
}


export default connect(mapStateToProps)(BookList); //this produces a container