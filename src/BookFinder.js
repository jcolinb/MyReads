import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'

class BookFinder extends Component {

    state = {
	searchTerm: '',
	searchResults: []
    }

    updateTerm(term) {
	(term &&
	BooksAPI.search(term).then((data) => this.setState({searchTerm: (term),searchResults: ((data && !(data.error)) ? data : [])}))
	) ||
	(this.setState({searchTerm:''}))
    }

    render() {
	return (
	    	<div>
		  <input
	            type="text"
	            value={this.state.searchTerm}
	            onChange={(e) =>
		      this.updateTerm(e.target.value)
		    }
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
