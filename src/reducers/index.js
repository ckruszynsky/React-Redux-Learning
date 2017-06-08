import { combineReducers } from "redux";
import Books from "./reducer_books";

const rootReducer = combineReducers({
  books: Books
});

export default rootReducer;
