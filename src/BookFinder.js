import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBar from './SearchBar'

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
		  { if (book.imageLinks) {
		     return (
		       <li key={book.id}>
		         <div className="book-cover"
		              style={{width: 128,height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}
			 ></div>
		       </li>
		    )
		   }
		  }
		 })
		}
	        </ol>
	      </div>
	)
    }
}

export default BookFinder
