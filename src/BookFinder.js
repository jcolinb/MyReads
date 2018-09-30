import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBar from './SearchBar'
import Book from './Book'
import Shelf from './Shelf'
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
	        <div>
		<SearchBar term={this.state.searchTerm}
	                   updateTerm={this.updateTerm}
		/>
		<ol className="books-grid">

	        {this.state.searchResults.map(function(book) {
		    if (book.imageLinks) { console.log(book)
		     return (
			     <Book
			 key={book.id}
			 bookId={book.id}
			 cover={book.imageLinks.thumbnail}
			 title={book.title}
			 author={book.authors}
			     />
		    )
		   
		  }
		 })
		}
	        </ol>
	      </div>
	)
    }
}

export default BookFinder
		       
