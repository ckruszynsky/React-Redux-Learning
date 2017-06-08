import React, { Component } from 'react';
import BookList from '../containers/book-list';

class App extends Component {
    constructor(props){
        super(props);       
    }

    render(){
     return (
        <div>   
            <BookList />                                  
        </div>
     );
    }
}


export default App;