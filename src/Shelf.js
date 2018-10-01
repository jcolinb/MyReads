import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Shelf extends Component {
    
    render() {

	return (
	  <ol className="books-grid">
	    {
	      this.props.library.filter((book) => this.props.shelfName === book.shelf)
		.map((book) => 
				(<Book
				 key={book.id}
				 bookId={book.id}
				 cover={book.imageLinks.thumbnail}
				 title={book.title}
				 author={book.authors}
				 updateLibrary={this.props.updateLibrary}
				 />)
		    )
	    }
	  </ol>
	)
            }
}

export default Shelf
