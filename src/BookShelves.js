import React,{Component} from 'react'
import Book from './Book'
import Shelf from './Shelf'

class BookShelves extends Component {
    render() {
	return (
		<div>
		<div>
		<h1>Want To Read</h1>
		<Shelf shelfName="wantToRead"/>
		</div>

		<div>
		<h1>Currently Reading</h1>
		<Shelf shelfName="currentlyReading"/>
		</div>

		<div>
		<h1>Read</h1>
		<Shelf shelfName="read"/>
		</div>
		</div>
	)
    }
}

export default BookShelves
