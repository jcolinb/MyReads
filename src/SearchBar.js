import React,{Component} from 'react'

class SearchBar extends Component {

    render() {
      return (
	<div className="search-books-input-wrapper">
	  <input
	    type="text"
	    value={this.props.term}
	    onChange={(e) =>
	      this.props.updateTerm(e.target.value)
	    }
	  />
	</div>    
    )
    }
}

export default SearchBar
