import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from '../actions/';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {    
    return this.props.books.map(book => {      
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
    books: state.books,
    
  }
}


//Anything returned from this function will end up as props on
//the BookList container
const mapDispatchToProps = (dispatch, ownProps) => {
  //whenever selectBook is called, the result should be passed to all 
  //of the reducers.
 return bindActionCreators({selectBook : selectBook}, dispatch) //bindActionCreators passed the result of selectBook to all reducers
}

//Promote bookList from a component to a container - it needs to know about this new dispatch
//method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList); //this produces a container