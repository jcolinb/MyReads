import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBar from './SearchBar'
import Book from './Book'

class BookFinder extends Component {

    state = {
	searchTerm: '',
	searchResults: []
    }

    updateTerm = (term) => {
	(term &&
	BooksAPI.search(term).then((data) => this.setState({searchTerm: (term),searchResults: ((data && !(data.error)) ? data : [])}))
	) ||
	(this.setState({searchTerm:''}))
    }

    render() {
	return (
	        <div className="search-books">
		<SearchBar term={this.state.searchTerm}
	                   updateTerm={this.updateTerm}
		/>
		<div className="search-books-results">
		<ol className="books-grid">

	        {this.state.searchResults.map(function(book) {

		     return (
			     <Book
			 key={book.id}
			 bookId={book.id}
			 cover={(book.imageLinks) ? book.imageLinks.thumbnail:""}
			 title={book.title}
			 author={(book.authors) ? book.authors:"none"}
			     />
		    )

		 })
		}
	    </ol>
		</div>
	      </div>
	)
    }
}

export default BookFinder
		       
