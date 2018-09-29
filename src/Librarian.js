import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
class Librarian extends Component {

    getShelf(bookId,target) {
	BooksAPI.get(bookId).then((book) => (book.shelf) && (target.value = book.shelf))
    }

    setShelf(bookId,val) {
	BooksAPI.update(bookId,val)
    }

    render() {
	return (
                      <div className="book-shelf-changer">
                <select onChange={(e) => {
		    this.setShelf(this.props.bookId,e.target.value)
		}}
	    onClick={(e) => {this.getShelf(this.props.bookId,e.target)}}
		>
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
