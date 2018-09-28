import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
class Librarian extends Component {

    getShelf(bookId) {

    }

    setShelf(bookId) {

    }

    render() {
	return (
                      <div className="book-shelf-changer">
                        <select>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>	    
	)
    }
}

export default Librarian
