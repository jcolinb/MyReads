import React,{Component} from 'react'
import Librarian from './Librarian'
class Book extends Component {
    render() {
	return (
	        <li>
		  <div className="book">
                    <div className="book-top">
                      <div className="book-cover"
	                   style={{ width: 128,
		                    height: 193,
				    backgroundImage: `url(${this.props.cover})`}}>
		      </div>
		      <Librarian/>
                    </div>
                    <div className="book-title">{this.props.title}</div>
                    <div className="book-authors">{this.props.author}</div>
                  </div>
		</li>
	)
    }
}

export default Book
