import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import Shelf from './Shelf'

class BookShelves extends Component {

    state = {
	library: []
    }

    updateLibrary = () => {
	BooksAPI.getAll().then((data) => this.setState({library: data}))
    }
    
    componentDidMount = this.updateLibrary

    
    render() {
	return (
		<div className="list-books-content">
		  <div className="bookshelf">
		    <h2 className="bookshelf-title">Want To Read</h2>
		    <Shelf shelfName="wantToRead"
	                   library={this.state.library}
	                   updateLibrary={this.updateLibrary}
		    />
		  </div>

		  <div className="bookshelf">
		    <h2 className="bookshelf-title">Currently Reading</h2>
		    <Shelf shelfName="currentlyReading" 
	                   library={this.state.library}
	                   updateLibrary={this.updateLibrary}
		    />
		  </div>

		  <div className="bookshelf">
		    <h2 className="bookshelf-title">Read</h2>
		    <Shelf shelfName="read" 
	                   library={this.state.library}
	                   updateLibrary={this.updateLibrary}
		    />
		  </div>
		</div>
	)
    }
}

export default BookShelves
