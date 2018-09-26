import React,{Component} from 'react'
import * from './BooksAPI'

class BookFinder extends Component {

    this.state = {
	searchTerm: ''
    }
    
    render() {
	return (
	    <div>
	      <input
	        type="text"
	        placeholder="Search for books in library"
	        value={this.state.searchTerm}
	        onChange={(e) => this.setState({searchTerm: e.target.value})}
	      />
	    </div>
	)
    }
}

export default BookFinder
