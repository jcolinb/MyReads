import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class SearchBar extends Component {

    render() {
      return (
	      <div className="search-books-bar">
	        <Link to="/" className="close-search"/>
	        <div className="search-books-input-wrapper">
	          <input type="text"
	                 value={this.props.term}
	                 onChange={(e) =>
	                   this.props.updateTerm(e.target.value)
	                 }
	          />
	        </div>
	      </div>
    )
    }
}

export default SearchBar
