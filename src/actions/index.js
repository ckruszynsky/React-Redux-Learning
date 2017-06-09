//selectBook is a ActionCreator that needs to needs to return 
//an action, which is an object with a type property
export function selectBook(book){    
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}