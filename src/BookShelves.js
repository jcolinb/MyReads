import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import Shelf from './Shelf'

class BookShelves extends Component {

    state = {
	library: []
    }
    
    componentDidMount = () => {
	BooksAPI.getAll().then((data) => this.setState({library: data}))
    }
    
    render() {
	return (
		<div className="list-books-content">
		  <div className="bookshelf">
		    <h2 className="bookshelf-title">Want To Read</h2>
		<Shelf shelfName="wantToRead" library={this.state.library}/>
		  </div>

		  <div className="bookshelf">
		    <h1 className="bookshelf-title">Currently Reading</h1>
		    <Shelf shelfName="currentlyReading" library={this.state.library}/>
		  </div>

		  <div className="bookshelf">
		    <h1 className="bookshelf-title">Read</h1>
		    <Shelf shelfName="read" library={this.state.library}/>
		  </div>
		</div>
	)
    }
}

export default BookShelves
