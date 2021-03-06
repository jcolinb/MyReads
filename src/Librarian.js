import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
class Librarian extends Component {

    state = {
	shelf: 'none'
    }
    
    setShelf = (bookId,val) => {
	let book = {id: (bookId)}
	BooksAPI.update(book,val)
	    .then(() => this.props.updateLibrary && this.props.updateLibrary())
	    .then(() => this.getShelf())
    }

    getShelf = () => {
	BooksAPI.get(this.props.bookId)
	    .then((book) => book.shelf)
	    .then((shelf) => {this.setState({shelf: shelf })})
    }

    componentWillMount = this.getShelf
    
    render() {

	return (
                      <div className="book-shelf-changer">
                        <select value={this.state.shelf}
	                        onChange={(e) => {
		                  this.setShelf(this.props.bookId,e.target.value)
		                }}
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
